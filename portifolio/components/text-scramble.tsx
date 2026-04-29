"use client"

import { useState, useEffect } from "react"

interface TextScrambleProps {
  text: string
  className?: string
}

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"

export function TextScramble({ text, className = "" }: TextScrambleProps) {
  const [scrambledText, setScrambledText] = useState(text)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout
    let iteration = 0

    const animate = () => {
      setScrambledText(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index]
            }
            return characters[Math.floor(Math.random() * characters.length)]
          })
          .join("")
      )

      iteration += 1 / 3

      if (iteration >= text.length) {
        clearInterval(interval)
        setScrambledText(text)
      }
    }

    const startAnimation = () => {
      setIsAnimating(true)
      iteration = 0
      interval = setInterval(animate, 30)
    }

    startAnimation()

    return () => clearInterval(interval)
  }, [text])

  return <span className={className}>{scrambledText}</span>
}
