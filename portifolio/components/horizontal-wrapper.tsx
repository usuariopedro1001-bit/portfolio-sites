"use client"

/* eslint-disable react/no-inline-styles -- Dynamic height calculation and Framer Motion transforms require inline styles */
import { useRef, ReactNode, useEffect, useState, useCallback } from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion"

interface HorizontalWrapperProps {
  children: ReactNode[]
}

// Desktop-only horizontal scroll component
function DesktopHorizontalScroll({ children }: { children: ReactNode[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const scrollTimeoutRef = useRef<NodeJS.Timeout>()
  const [windowWidth, setWindowWidth] = useState(1440)
  
  const totalSlides = children.length

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    let timeoutId: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => setWindowWidth(window.innerWidth), 100)
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      clearTimeout(timeoutId)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Stiffer spring for snap behavior - locks to slides
  const springConfig = { stiffness: 150, damping: 25, restDelta: 0.001, mass: 0.8 }
  const smoothProgress = useSpring(scrollYProgress, springConfig)

  // Snap to nearest slide when scrolling stops
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const slide = Math.round(latest * (totalSlides - 1))
    setCurrentSlide(slide)
    
    // Detect when user stops scrolling and snap to nearest slide
    setIsScrolling(true)
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false)
      // Snap to nearest slide
      const nearestSlide = Math.round(latest * (totalSlides - 1))
      if (containerRef.current) {
        const sectionTop = containerRef.current.offsetTop
        const sectionHeight = containerRef.current.offsetHeight
        const targetScroll = sectionTop + (nearestSlide / (totalSlides - 1)) * (sectionHeight - window.innerHeight)
        window.scrollTo({ top: targetScroll, behavior: "smooth" })
      }
    }, 150) // 150ms after scroll stops
  })

  // Continuous horizontal movement with snap
  const x = useTransform(
    smoothProgress,
    [0, 1],
    [0, -(totalSlides - 1) * windowWidth]
  )

  // Progress bar transform
  const progressScale = useTransform(smoothProgress, [0, 1], [0, 1])

  // Dots navigation - instant snap to slide
  const goToSlide = useCallback((index: number) => {
    if (!containerRef.current) return
    const sectionTop = containerRef.current.offsetTop
    const sectionHeight = containerRef.current.offsetHeight
    const targetScroll = sectionTop + (index / (totalSlides - 1)) * (sectionHeight - window.innerHeight)
    window.scrollTo({ top: targetScroll, behavior: "smooth" })
  }, [totalSlides])

  return (
    <div 
      ref={containerRef}
      className="relative"
      style={{ height: `${totalSlides * 100}vh` }} /* eslint-disable-line react/no-inline-styles */
    >
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen overflow-auto">
        {/* Horizontal Track - GPU accelerated */}
        <motion.div 
          className="flex min-h-full will-change-transform"
          style={{ x }}
        >
          {children.map((child, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-screen min-h-screen"
            >
              <div className="min-h-full">
                {child}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Navigation Dots */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                currentSlide === index 
                  ? "bg-primary scale-125 shadow-lg shadow-primary/50" 
                  : "bg-primary/20 hover:bg-primary/40"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute bottom-8 right-8 z-50 text-muted-foreground text-sm font-mono">
          <span className="text-primary font-bold">{String(currentSlide + 1).padStart(2, '0')}</span>
          <span className="mx-1">/</span>
          <span>{String(totalSlides).padStart(2, '0')}</span>
        </div>

        {/* Scroll Hint - only on first slide */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentSlide === 0 ? 1 : 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-wider">Role para navegar</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-primary/20 rounded-full flex justify-center pt-2">
              <motion.div 
                className="w-1.5 h-1.5 bg-primary/30 rounded-full"
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Progress Bar Top */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary/5 z-50">
          <motion.div 
            className="h-full bg-primary"
            style={{ 
              scaleX: progressScale,
              transformOrigin: "left"
            }}
          />
        </div>
      </div>
    </div>
  )
}

export function HorizontalWrapper({ children }: HorizontalWrapperProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsMobile(window.innerWidth < 768)
    let timeoutId: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => setIsMobile(window.innerWidth < 768), 100)
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      clearTimeout(timeoutId)
    }
  }, [])

  if (!mounted) {
    return null
  }

  // On mobile, render normal vertical scroll
  if (isMobile) {
    return (
      <div className="relative">
        {children.map((child, index) => (
          <div key={index} className="relative">
            {child}
          </div>
        ))}
      </div>
    )
  }

  // On desktop, render horizontal scroll
  return <DesktopHorizontalScroll children={children} />
}
