import { NextResponse } from 'next/server'

export async function GET() {
  await new Promise(resolve => setTimeout(resolve, 3500)) // 3.5 seconds delay
  return NextResponse.redirect(new URL('/welcome', process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'))
}

