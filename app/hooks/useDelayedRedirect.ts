'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export function useDelayedRedirect(path: string, delay: number) {
  const router = useRouter()
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    console.log('Setting up delayed redirect...')
    
    const redirectTimeout = setTimeout(() => {
      console.log('Attempting to redirect...')
      try {
        router.push(path)
        console.log('Router.push called')
      } catch (err) {
        console.error('Error during router.push:', err)
        setError(err instanceof Error ? err : new Error('Unknown error occurred'))
      }
    }, delay)

    return () => {
      console.log('Cleaning up redirect timeout...')
      clearTimeout(redirectTimeout)
    }
  }, [router, path, delay])

  return { error }
}

