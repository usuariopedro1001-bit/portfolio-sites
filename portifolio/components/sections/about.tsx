"use client"

import { motion } from "framer-motion"
import { Target, Rocket, Shield, MessageCircle, Search } from "lucide-react"

const diferenciais = [
  {
    numero: "01",
    titulo: "Foco em Resultado",
    descricao: "Não entrego apenas um site bonito. Entrego uma ferramenta de vendas que gera clientes enquanto você dorme.",
    icone: Target,
  },
  {
    numero: "02",
    titulo: "Performance Primeiro",
    descricao: "Sites que carregam em menos de 1 segundo. Velocidade = mais vendas. Google premia, clientes compram.",
    icone: Rocket,
  },
  {
    numero: "03",
    titulo: "Estratégia Inclusa",
    descricao: "Antes de escrever uma linha de código, entendo seu negócio, concorrência e público-alvo.",
    icone: Search,
  },
  {
    numero: "04",
    titulo: "Suporte Real",
    descricao: "Não te abandono após a entrega. 30 dias de ajustes inclusos + suporte contínuo disponível.",
    icone: Shield,
  },
]

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
  transition: { duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] as const }
}

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }
}

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  },
  viewport: { once: false, margin: "-100px" }
}

const staggerItem = {
  initial: { opacity: 0, x: -40 },
  whileInView: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }
  }
}

const cardHover = { 
  scale: 1.02, 
  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const } 
}

export function About() {
  return (
    <section id="sobre" className="sm:min-h-screen flex flex-col justify-center relative overflow-hidden py-12 sm:py-0">
      {/* Background */}
      <div className="absolute top-1/3 right-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
        <div className="max-w-5xl mx-auto w-full">
          
          {/* Header - Mobile Stacked */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 mb-12">
            <motion.div {...fadeInLeft}>
              <span className="inline-block text-base sm:text-xs font-medium text-primary uppercase tracking-wider mb-6">
                Por Que Me Contratar
              </span>
              <h2 className="text-3xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground leading-tight">
                Não vendo sites. 
                <span className="text-primary"> Vendo resultados.</span>
              </h2>
            </motion.div>
            
            <motion.div {...fadeInRight} className="flex items-center">
              <p className="text-lg sm:text-base text-muted-foreground leading-relaxed">
                A maioria dos desenvolvedores entrega um produto bonito que não converte. 
                Eu entrego uma <span className="text-foreground font-semibold">máquina de vendas</span> que justifica 
                cada centavo investido em poucos meses.
              </p>
            </motion.div>
          </div>

          {/* Differentiators - Mobile Stacked, Desktop Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: false, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {diferenciais.map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={cardHover}
                whileTap={{ scale: 0.98 }}
                className="group p-8 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 hover:bg-white/[0.04] transition-colors duration-500 cursor-pointer active:scale-[0.98]"
              >
                <div className="flex items-start gap-4 sm:gap-3 mb-4">
                  <div className="w-16 h-16 sm:w-10 sm:h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                    <item.icone className="w-8 h-8 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-base font-bold text-foreground">
                      {item.titulo}
                    </h3>
                    <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors font-bold">{item.numero}</span>
                  </div>
                </div>
                <p className="text-base sm:text-sm text-muted-foreground leading-relaxed">
                  {item.descricao}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div 
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="mt-10 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 sm:px-4 py-4 sm:py-2 rounded-2xl bg-white/[0.02] border border-white/10 cursor-default">
              <MessageCircle className="w-6 h-6 sm:w-4 sm:h-4 text-primary" />
              <p className="text-base sm:text-sm">
                <span className="text-foreground font-semibold">Ainda tem dúvidas?</span>
                <span className="text-muted-foreground"> Vamos conversar.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
