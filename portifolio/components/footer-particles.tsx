"use client"

/* eslint-disable react/no-inline-styles -- Dynamic particle positions and animations require inline styles */
import { useState, useEffect, useRef, useCallback } from "react"
import { motion } from "framer-motion"

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  opacity: number
}

interface FireworkParticle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  opacity: number
  life: number
}

export function FooterParticles() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const [fireworks, setFireworks] = useState<FireworkParticle[]>([])
  const mousePosition = useRef({ x: -1000, y: -1000 })
  const fireworkIdRef = useRef(0)
  const isVisibleRef = useRef(true)
  const animationFrameRef = useRef<number>()

  // Intersection Observer to pause when not visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        isVisibleRef.current = entries[0].isIntersecting
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const count = isMobile ? 40 : 50 // Reduced from 80/100
    const colors = ["#2563EB", "#7C3AED", "#0891B2", "#4F46E5", "#DC2626", "#059669"]
    
    const newParticles: Particle[] = []
    
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
        size: Math.random() * 6 + 6, // Reduced from 8-16 to 6-12
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.2 + 0.7,
      })
    }
    
    setParticles(newParticles)
  }, [])

  // Debounced mouse move handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isVisibleRef.current || !containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    mousePosition.current = {
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    }
  }, [])

  const handleClick = useCallback((e: MouseEvent) => {
    if (!isVisibleRef.current || !containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const clickX = ((e.clientX - rect.left) / rect.width) * 100
    const clickY = ((e.clientY - rect.top) / rect.height) * 100
    
    const colors = ["#3B82F6", "#A78BFA", "#60A5FA", "#C4B5FD", "#F472B6", "#34D399", "#FBBF24", "#F87171"]
    const newFireworks: FireworkParticle[] = []
    
    // Reduced bursts from 3 to 2
    for (let burst = 0; burst < 2; burst++) {
      const burstOffsetX = (Math.random() - 0.5) * 5
      const burstOffsetY = (Math.random() - 0.5) * 5
      
      // Reduced particles per burst from 40 to 25
      for (let i = 0; i < 25; i++) {
        const angle = (Math.PI * 2 * i) / 25 + (Math.random() - 0.5) * 0.3
        const speed = Math.random() * 3 + 1.5
        newFireworks.push({
          id: fireworkIdRef.current++,
          x: clickX + burstOffsetX,
          y: clickY + burstOffsetY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 4 + 2, // Reduced from 3-8 to 2-6
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: 1,
          life: 90, // Reduced from 120
        })
      }
    }
    
    setFireworks(prev => [...prev, ...newFireworks])
  }, [])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    const debouncedMouseMove = (e: MouseEvent) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => handleMouseMove(e), 16) // ~60fps
    }

    window.addEventListener("mousemove", debouncedMouseMove)
    window.addEventListener("click", handleClick)
    return () => {
      window.removeEventListener("mousemove", debouncedMouseMove)
      window.removeEventListener("click", handleClick)
      clearTimeout(timeoutId)
    }
  }, [handleMouseMove, handleClick])

  useEffect(() => {
    const animate = () => {
      if (!isVisibleRef.current) {
        animationFrameRef.current = requestAnimationFrame(animate)
        return
      }

      setParticles(prevParticles => {
        return prevParticles.map(particle => {
          let { x, y, vx, vy } = particle
          
          // Apply mouse repulsion with reduced radius
          const dx = mousePosition.current.x - x
          const dy = mousePosition.current.y - y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const repelRadius = 15 // Reduced from 20
          const repelStrength = 0.4 // Reduced from 0.5
          
          if (distance < repelRadius && distance > 0) {
            const force = (1 - distance / repelRadius) * repelStrength
            vx -= (dx / distance) * force
            vy -= (dy / distance) * force
          }
          
          // Apply velocity
          x += vx
          y += vy
          
          // Wrap around screen edges
          if (x < 0) x = 100
          if (x > 100) x = 0
          if (y < 0) y = 100
          if (y > 100) y = 0
          
          // Add slight damping
          vx *= 0.99
          vy *= 0.99
          
          // Add small random movement
          vx += (Math.random() - 0.5) * 0.01
          vy += (Math.random() - 0.5) * 0.01
          
          // Limit max speed
          const maxSpeed = 0.4 // Reduced from 0.5
          const speed = Math.sqrt(vx * vx + vy * vy)
          if (speed > maxSpeed) {
            vx = (vx / speed) * maxSpeed
            vy = (vy / speed) * maxSpeed
          }
          
          return { ...particle, x, y, vx, vy }
        })
      })
      
      setFireworks(prevFireworks => {
        return prevFireworks
          .map(fw => {
            let { x, y, vx, vy, life, opacity } = fw
            
            x += vx
            y += vy
            vy += 0.08
            vx *= 0.98
            vy *= 0.98
            life -= 1
            opacity = Math.max(0, life / 90)
            
            return { ...fw, x, y, vx, vy, life, opacity }
          })
          .filter(fw => fw.life > 0)
      })
      
      animationFrameRef.current = requestAnimationFrame(animate)
    }
    
    animationFrameRef.current = requestAnimationFrame(animate)
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden"
      style={{ zIndex: 1, pointerEvents: 'none' }}
    >
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.size / 2}px ${particle.color}40`, // Reduced glow
            willChange: 'transform, opacity',
          }}
        />
      ))}
      {fireworks.map((fw) => (
        <div
          key={fw.id}
          className="absolute rounded-full"
          style={{
            left: `${fw.x}%`,
            top: `${fw.y}%`,
            width: fw.size,
            height: fw.size,
            backgroundColor: fw.color,
            opacity: fw.opacity,
            boxShadow: `0 0 ${fw.size * 4}px ${fw.size}px ${fw.color}80, 0 0 ${fw.size * 8}px ${fw.size * 2}px ${fw.color}40`, // Reduced glow
            willChange: 'transform, opacity',
          }}
        />
      ))}
    </div>
  )
}
