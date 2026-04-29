"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "@/components/animated-background"
import { ArrowRight, Play, Users } from "lucide-react"
import { useRevealDelay } from "@/components/reveal-layout"
import { TextScramble } from "@/components/text-scramble"
import { useRouter } from "next/navigation"

const stats = [
  { value: "100%", label: "Identidade Visual Única" },
  { value: "24/7", label: "Presença Online Profissional" },
  { value: "Autoridade", label: "Que Converte Visitantes" },
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-50px" },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
}

const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }
}

const statsContainer = {
  animate: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
}

const statsItem = {
  initial: { opacity: 0, x: 30, scale: 0.9 },
  animate: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }
  }
}

const buttonHover = { scale: 1.03, transition: { duration: 0.2 } }
const buttonTap = { scale: 0.98 }

const cardHover = { 
  scale: 1.03, 
  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const } 
}

export function Hero() {
  const router = useRouter()
  const d = useRevealDelay()

  return (
    <>
      <section id="hero" className="relative h-full flex flex-col justify-center overflow-hidden py-12 sm:py-0">
        <AnimatedBackground />

        <div className="relative z-10 container mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="max-w-5xl mx-auto w-full">
            {/* Trust Badge - Mobile only */}
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, delay: d + 0.1 }}
              className="sm:hidden inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-accent border border-primary/20 mb-6"
            >
              <span className="text-base text-foreground/80">
                Já ajudei <span className="text-foreground font-bold text-lg">+50 empresas</span>
              </span>
            </motion.div>

            {/* Desktop Trust Badge */}
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, delay: d + 0.1 }}
              className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent border border-primary/20 mb-6"
            >
              <span className="text-sm text-foreground/80">
                Já ajudei <span className="text-foreground font-bold">+50 empresas</span>
              </span>
            </motion.div>

            {/* Main Content - Mobile First */}
            <div className="flex flex-col gap-12 lg:grid lg:grid-cols-5 lg:gap-6 items-start mb-12 lg:mb-6">
              <div className="lg:col-span-3">
                <motion.h1
                  {...fadeInUp}
                  transition={{ duration: 0.7, delay: d }}
                  className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mb-8 sm:mb-4 leading-tight"
                >
                  <span className="text-foreground">Seu site não deve </span>
                  <span className="text-muted-foreground line-through">"parecer bonito"</span>
                  <br />
                  <TextScramble text="Deve trazer clientes" className="text-gradient" />
                </motion.h1>

                <motion.p
                  {...fadeInUp}
                  transition={{ duration: 0.7, delay: d + 0.15 }}
                  className="text-lg sm:text-base text-foreground/80 leading-relaxed max-w-lg mb-12"
                >
                  Eu crio sites pensados para transformar visitantes em clientes — 
                  <span className="text-foreground font-semibold"> não só para parecer profissional</span>.
                </motion.p>

                {/* Stats - Mobile Stacked */}
                <motion.div
                  {...fadeInUp}
                  transition={{ duration: 0.5, delay: d + 0.2 }}
                  className="lg:hidden space-y-6 mb-12"
                >
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={cardHover}
                      className="p-6 rounded-2xl bg-accent border border-primary/20 shadow cursor-default"
                    >
                      <div className="text-4xl font-bold text-foreground mb-2">
                        {stat.value}
                      </div>
                      <div className="text-base text-foreground/70">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Stats - Desktop Compact */}
              <motion.div
                {...fadeInUp}
                transition={{ duration: 0.5, delay: d + 0.2 }}
                className="hidden lg:block lg:col-span-2 space-y-3"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={cardHover}
                    className="p-3 rounded-xl bg-accent border border-primary/20 shadow cursor-default"
                  >
                    <div className="text-xl lg:text-2xl font-bold text-foreground mb-0.5">
                      {stat.value}
                    </div>
                    <div className="text-xs text-foreground/70">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* CTA Buttons - Mobile Full Width */}
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, delay: d + 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4 mb-8"
            >
              <motion.div whileHover={buttonHover} whileTap={buttonTap} className="flex-1">
                <a
                  href="https://wa.me/5543999729854?text=Olá! Quero atrair mais clientes com um site profissional"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button size="lg" className="h-14 sm:h-12 w-full px-6 text-base sm:text-base group shadow-lg shadow-primary/20 min-h-[56px]">
                    <Users className="mr-2 w-5 h-5 sm:w-5 sm:h-5" />
                    <span className="hidden sm:inline">Quero atrair mais clientes</span>
                    <span className="sm:hidden">Quero mais clientes</span>
                    <ArrowRight className="ml-2 w-5 h-5 sm:w-5 sm:h-5" />
                  </Button>
                </a>
              </motion.div>
              
              <motion.div whileHover={buttonHover} whileTap={buttonTap} className="flex-1">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="h-14 sm:h-12 w-full px-6 text-base sm:text-base border-primary/20 min-h-[56px]"
                  onClick={() => router.push("/portfolio")}
                >
                  <Play className="mr-2 w-5 h-5 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">Ver exemplos reais</span>
                  <span className="sm:hidden">Ver exemplos</span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, delay: d + 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 text-base sm:text-sm text-muted-foreground"
            >
              {["Disponível agora", "Resposta em 24h"].map((text, i) => (
                <motion.div 
                  key={i}
                  {...fadeInUp}
                  transition={{ duration: 0.4, delay: d + 0.6 + (i * 0.1) }}
                  className="flex items-center gap-2"
                >
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-emerald-500"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  />
                  {text}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
