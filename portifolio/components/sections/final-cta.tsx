"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight } from "lucide-react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import type { Container, Engine } from "@tsparticles/engine"
import { useTheme } from "@/components/theme-provider"

export function FinalCTA() {
  const [isInit, setIsInit] = useState(false)
  const canvasRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setIsInit(true)
    })
  }, [])

  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: {
          delay: 0.5,
          enable: true,
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: theme === "dark" ? ["#2563EB", "#7C3AED"] : ["#60A5FA", "#A78BFA"],
      },
      links: {
        color: theme === "dark" ? "#ffffff" : "#1E293B",
        distance: 150,
        enable: true,
        opacity: theme === "dark" ? 0.2 : 0.15,
        width: 1,
      },
      move: {
        direction: "none" as const,
        enable: true,
        outModes: {
          default: "bounce" as const,
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: isMobile ? 40 : 80,
      },
      opacity: {
        value: theme === "dark" ? 0.5 : 0.4,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: "-100px" },
    transition: { duration: 0.5 }
  }

  const buttonHover = { scale: 1.03, transition: { duration: 0.2 } }
  const buttonTap = { scale: 0.98 }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0" ref={canvasRef}>
        {isInit && (
          <Particles
            id="tsparticles-final"
            options={particlesOptions}
            className="absolute inset-0"
          />
        )}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Pronto para escalar suas vendas com
              <span className="text-gradient"> automação inteligente</span>?
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Impressoras, toners e soluções que geram resultado real para o seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                <a
                  href="https://wa.me/5543999729854?text=Olá! Quero escalar minhas vendas com automação inteligente"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button 
                    size="lg" 
                    className="h-16 px-10 text-lg shadow-lg shadow-primary/25 group"
                  >
                    <MessageCircle className="mr-3 w-6 h-6" />
                    Falar no WhatsApp agora
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </motion.div>

              <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                <a
                  href="#servicos"
                  className="block"
                >
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="h-16 px-10 text-lg border-primary/20"
                  >
                    Ver planos
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
