'use client'

import { useEffect, useState } from 'react'

export default function LandingPage() {
  const [showEnter, setShowEnter] = useState(true)

  // Blinking effect for the [enter] text
  useEffect(() => {
    const interval = setInterval(() => {
      setShowEnter(prev => !prev)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      {/* Hexagon Grid */}
      <div className="relative w-64 h-64 mb-8">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          style={{
            filter: 'drop-shadow(0 0 10px #00ff00)',
          }}
        >
          <path
            d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z"
            fill="none"
            stroke="#00ff00"
            strokeWidth="0.5"
            className="animate-pulse"
          />
          <path
            d="M50 20 L78.3 35 L78.3 65 L50 80 L21.7 65 L21.7 35 Z"
            fill="none"
            stroke="#00ff00"
            strokeWidth="0.5"
          />
          <path
            d="M35 40 L65 40 L80 60 L65 80 L35 80 L20 60 Z"
            fill="none"
            stroke="#00ff00"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* Enter Text */}
      <div 
        className={`font-mono text-[#00ff00] text-2xl ${
          showEnter ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-100`}
        style={{
          textShadow: '0 0 10px #00ff00',
        }}
      >
        [ enter ]
      </div>
    </div>
  )
}

