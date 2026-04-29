"use client"

import { motion, AnimatePresence } from "framer-motion"
import { createContext, useContext, useState, ReactNode, useEffect } from "react"

const RevealContext = createContext<{ delay: number }>({ delay: 0 })

export function useRevealDelay() {
  return useContext(RevealContext).delay
}

interface RevealLayoutProps {
  children: ReactNode
}

export function RevealLayout({ children }: RevealLayoutProps) {
  const [started, setStarted] = useState(false)
  const [showDoors, setShowDoors] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsMobile(window.innerWidth < 768)
  }, [])

  const handleStart = () => {
    setStarted(true)
    setTimeout(() => {
      setShowDoors(false)
    }, 1200)
  }

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <RevealContext.Provider value={{ delay: 0 }}>
        {children}
      </RevealContext.Provider>
    )
  }

  // Disable reveal on mobile for simpler experience
  if (isMobile) {
    return (
      <RevealContext.Provider value={{ delay: 0 }}>
        {children}
      </RevealContext.Provider>
    )
  }

  return (
    <RevealContext.Provider value={{ delay: 1 }}>
      <div className="relative">
        {/* Doors Overlay */}
        <AnimatePresence>
          {showDoors && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
            >
              {/* Left Door */}
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: started ? "-100%" : 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-slate-900 to-slate-800 border-r border-white/10"
              />

              {/* Right Door */}
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: started ? "100%" : 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-slate-900 to-slate-800 border-l border-white/10"
              />

              {/* CENTER CONTENT - logo + button disappear together */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                {/* Animated background circles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
                  />
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
                  />
                </div>

                <AnimatePresence>
                  {!started && (
                    <motion.div
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="text-center relative z-10"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center"
                      >
                        <div className="text-6xl sm:text-7xl font-bold mb-8">
                          <span className="text-white">Leon</span>
                          <span className="text-primary">.</span>
                          <span className="text-primary">Dev</span>
                        </div>
                        <p className="text-white/70 text-lg mb-10">Sites que vendem. Nada menos.</p>

                        <motion.button
                          whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(99,102,241,0.4)" }}
                          whileTap={{ scale: 0.97 }}
                          onClick={handleStart}
                          className="px-8 py-4 bg-primary hover:bg-primary/90 text-white text-lg font-semibold rounded-xl transition-colors shadow-lg shadow-primary/30"
                        >
                          Entrar no site
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content - Always rendered */}
        {children}
      </div>
    </RevealContext.Provider>
  )
}
