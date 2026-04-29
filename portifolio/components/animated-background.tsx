"use client"

/* eslint-disable react/no-inline-styles -- Dynamic animation values require inline styles */
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface Bar {
  id: number
  left: number
  width: number
  height: number
  duration: number
  delay: number
  opacity: number
}

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)
  const [bars, setBars] = useState<Bar[]>([])

  useEffect(() => {
    setMounted(true)
    const generateBars = () => {
      const newBars: Bar[] = []
      const count = typeof window !== 'undefined' && window.innerWidth < 768 ? 10 : 16

      for (let i = 0; i < count; i++) {
        newBars.push({
          id: i,
          left: (i / count) * 100 + (Math.random() * 4 - 2),
          width: Math.random() * 1.5 + 0.5,
          height: Math.random() * 30 + 20,
          duration: Math.random() * 2 + 4,
          delay: Math.random() * 2,
          opacity: Math.random() * 0.1 + 0.03,
        })
      }
      setBars(newBars)
    }

    generateBars()
    const handleResize = () => generateBars()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      {/* Animated bars */}
      {bars.map((bar) => (
        // eslint-disable-next-line react/no-inline-styles -- Dynamic values require inline styles
        <div
          key={bar.id}
          className="absolute top-0 h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent"
          style={{
            left: `${bar.left}%`,
            width: `${bar.width}px`,
            opacity: bar.opacity,
            animation: `gradientBar ${bar.duration}s ease-in-out ${bar.delay}s infinite`,
            filter: 'blur(0.5px)',
          }}
        />
      ))}

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_background_80%)]" />
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}
