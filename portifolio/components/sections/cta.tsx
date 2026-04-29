"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"
import { PortfolioPreview } from "@/components/portfolio-preview"
import { ArrowRight, Clock, Zap, Shield, Sparkles, MessageCircle, Eye } from "lucide-react"

const garantias = [
  { icone: Shield, texto: "Garantia de satisfação" },
  { icone: Clock, texto: "Entrega no prazo ou devolvo" },
  { icone: MessageCircle, texto: "Suporte direto comigo" },
]

// Animation variants
const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: false, margin: "-100px" },
  transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }
}

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: false, margin: "-100px" },
  transition: { duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] as const }
}

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  },
  viewport: { once: false, margin: "-100px" }
}

const staggerItem = {
  initial: { opacity: 0, x: 20 },
  whileInView: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }
  }
}

const cardHover = { 
  rotate: 0, 
  scale: 1.02, 
  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const } 
}

const buttonHover = { scale: 1.03, transition: { duration: 0.2 } }
const buttonTap = { scale: 0.98 }

export function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="h-full flex items-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              
              {/* Left - Main CTA */}
              <motion.div {...fadeInLeft} className="relative">
                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-3 -right-3 lg:right-auto lg:-left-3 px-3 py-1.5 rounded-lg bg-amber-500/20 border border-amber-500/30 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-amber-500" />
                    <span className="text-xs text-amber-600 font-semibold">Só 2 vagas</span>
                  </div>
                </motion.div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                  Vamos transformar sua 
                  <span className="text-primary"> presença digital</span>?
                </h2>
                
                <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                  Cada dia sem um site profissional é uma oportunidade perdida. 
                  <span className="text-foreground font-semibold"> Vamos conversar?</span>
                </p>

                {/* Buttons */}
                <div className="flex flex-col gap-3">
                  <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                    <a
                      href="https://wa.me/5543999729854?text=Olá! Quero começar agora a transformar minha presença digital"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button size="lg" className="h-14 px-8 text-base w-full group justify-between">
                        <span className="flex items-center">
                          <Zap className="mr-2 w-5 h-5" />
                          Quero Começar Agora
                        </span>
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </a>
                  </motion.div>
                  
                  <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                    <a
                      href="#investimento"
                      className="block"
                    >
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="h-12 px-8 text-base border-white/20 w-full justify-start"
                      >
                        <Eye className="mr-2 w-5 h-5" />
                        Ver planos disponíveis
                      </Button>
                    </a>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right - Trust Card */}
              <motion.div {...fadeInRight} className="relative">
                <motion.div
                  initial={{ rotate: -2 }}
                  whileHover={cardHover}
                  className="p-6 rounded-2xl bg-white border border-gray-200 shadow-2xl cursor-default"
                >
                  {/* Card Header */}
                  <div className="flex items-center gap-3 mb-5 pb-5 border-b border-gray-200">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Seu investimento protegido</h3>
                      <p className="text-xs text-gray-600">Trabalho com compromisso</p>
                    </div>
                  </div>

                  {/* Guarantees */}
                  <motion.div 
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: false }}
                    className="space-y-3 mb-5"
                  >
                    {garantias.map((item, index) => (
                      <motion.div 
                        key={index} 
                        variants={staggerItem}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <item.icone className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm text-gray-800 font-medium">{item.texto}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Response Time */}
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <div className="flex items-center gap-2">
                      <motion.div 
                        className="w-2.5 h-2.5 rounded-full bg-emerald-500"
                        animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-sm text-emerald-700 font-medium">
                        Resposta em até 24 horas
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div 
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute -bottom-3 -right-3 w-20 h-20 rounded-2xl bg-primary/20 -z-10" 
                />
                <motion.div 
                  animate={{ rotate: [0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-blue-500/20 -z-10" 
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <PortfolioPreview />
      </Modal>
    </>
  )
}
