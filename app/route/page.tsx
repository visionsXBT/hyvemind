'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Loading() {
  const router = useRouter()

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/welcome')
    }, 3500) // 3.5 seconds

    return () => clearTimeout(timeout)
  }, [router])

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
    }}>
      <Image
        src="/loading.gif"
        alt="Loading..."
        width={1280}
        height={720}
        priority
      />
    </div>
  )
}

