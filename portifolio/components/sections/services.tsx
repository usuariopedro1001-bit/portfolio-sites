"use client"

import { motion } from "framer-motion"
import { Globe, Layout, Settings, ArrowRight, Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TiltCard } from "@/components/tilt-card"
import { MagneticButton } from "@/components/magnetic-button"

const servicos = [
  {
    icone: Layout,
    titulo: "Landing Page de Alta Conversão",
    descricao: "Foco total em conversão",
    resultado: "Até 3x mais leads qualificados",
    investimento: "A partir de R$ 3.500",
    destaque: false,
    entrega: "7-10 dias úteis",
    features: [
      "Gera leads automaticamente",
      "Estratégia pronta para vender",
      "Captura contatos em tempo real",
      "Integração direta com WhatsApp",
      "Otimizado para Google",
      "Métricas de conversão"
    ]
  },
  {
    icone: Globe,
    titulo: "Site Institucional Premium",
    descricao: "Posiciona sua marca como autoridade",
    resultado: "Mais autoridade = mais vendas",
    investimento: "A partir de R$ 6.000",
    destaque: true,
    entrega: "15-20 dias úteis",
    features: [
      "Até 5 páginas completas",
      "Blog integrado para conteúdo",
      "SEO avançado para ranking",
      "Galeria de projetos visual",
      "Formulário de contato inteligente",
      "Integração com redes sociais"
    ]
  },
  {
    icone: Settings,
    titulo: "Sistema Web & E-commerce",
    descricao: "Automação que escala seu negócio",
    resultado: "Reduz custos operacionais",
    investimento: "A partir de R$ 12.000",
    destaque: false,
    entrega: "30-45 dias úteis",
    features: [
      "Painel administrativo completo",
      "Gestão de produtos simplificada",
      "Pagamentos integrados",
      "Processos 100% automatizados",
      "API personalizada para integrações",
      "Suporte prioritário 24/7"
    ]
  },
]

const inclusos = [
  "Estratégia de conversão",
  "Design exclusivo (sem templates)",
  "Otimização para Google (SEO)",
  "Performance máxima (PageSpeed 90+)",
  "Responsivo para todos os dispositivos",
  "30 dias de ajustes inclusos",
]

// Animation variants
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
      delayChildren: 0.1
    }
  },
  viewport: { once: false, margin: "-100px" }
}

const staggerItem = {
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }
  }
}

const cardHover = { 
  y: -8, 
  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const } 
}

const cardTap = { scale: 0.98 }

export function Services() {
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false

  return (
    <section id="servicos" className="relative overflow-visible py-16 sm:py-20 pb-40 bg-background">
      <div id="investimento" className="container mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-16 relative z-10">
        <div className="max-w-6xl mx-auto w-full">
          
          {/* Header */}
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block text-lg sm:text-sm font-medium text-primary uppercase tracking-wider mb-8">
              Investimento
            </span>
            <h2 className="text-4xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8">
              Escolha seu caminho para
              <span className="text-primary"> mais vendas</span>
            </h2>
            <p className="text-xl sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Cada projeto inclui estratégia, design exclusivo e desenvolvimento premium.
              <span className="text-foreground"> Sem surpresas.</span>
            </p>
          </motion.div>

          {/* Services Grid - Mobile Single Column */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: false, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {servicos.map((servico, index) => (
              <motion.div
                key={index}
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.1 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                whileHover={prefersReducedMotion ? undefined : { y: -4, transition: { duration: 0.2 } }}
                style={{ 
                  transform: servico.destaque ? 'scale(1.05)' : 'scale(1)',
                  zIndex: servico.destaque ? 10 : 1,
                  willChange: prefersReducedMotion ? 'auto' : 'transform, opacity'
                }}
                className={`relative rounded-2xl overflow-hidden p-6 h-auto flex flex-col ${
                  servico.destaque 
                    ? "bg-gradient-to-br from-blue-600 to-blue-700 dark:from-slate-800 dark:to-slate-900 text-white shadow-lg shadow-blue-500/20 dark:shadow-slate-900/20 ring-2 ring-blue-500/30 dark:ring-slate-700/20" 
                    : "bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 shadow-md hover:shadow-lg text-gray-900 dark:text-white"
                }`}
              >

                  {/* Popular Badge */}
                  {servico.destaque && (
                    <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-center py-2 text-sm font-bold -mt-6 -mx-6 mb-4 shadow-lg">
                      <div className="flex items-center justify-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        MAIS ESCOLHIDO
                      </div>
                    </div>
                  )}

                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-lg ${
                      servico.destaque 
                        ? "bg-white/10 backdrop-blur-sm border border-white/20" 
                        : "bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-700"
                    }`}>
                      <servico.icone className={`w-8 h-8 opacity-80 ${servico.destaque ? "text-white/90" : "text-slate-600 dark:text-slate-400"}`} />
                    </div>

                    {/* Investment */}
                    <div className="mb-5">
                      <div className={`text-2xl font-bold ${servico.destaque ? "text-white" : "text-gray-900 dark:text-white"}`}>
                        {servico.investimento}
                      </div>
                      <div className={`text-xs uppercase tracking-wider ${servico.destaque ? "text-white/70" : "text-gray-500 dark:text-gray-400"}`}>
                        Investimento inicial
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl font-bold mb-2 leading-tight ${servico.destaque ? "text-white" : "text-gray-900 dark:text-white"}`}>
                      {servico.titulo}
                    </h3>

                    {/* Description */}
                    <p className={`text-sm mb-4 font-medium ${servico.destaque ? "text-white/90" : "text-gray-700 dark:text-gray-300"}`}>
                      {servico.descricao}
                    </p>

                    {/* Result */}
                    <div className={`p-3 rounded-xl mb-4 ${
                      servico.destaque 
                        ? "bg-white/10 backdrop-blur-sm border border-white/20" 
                        : "bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-700"
                    }`}>
                      <div className={`text-sm font-semibold ${servico.destaque ? "text-white/90" : "text-slate-700 dark:text-slate-300"}`}>
                        {servico.resultado}
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2.5 mb-5 flex-1">
                      {servico.features.map((feature, idx) => (
                        <li key={idx} className={`flex items-start gap-3 text-sm ${servico.destaque ? "text-white/90" : "text-gray-700 dark:text-gray-300"}`}>
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            servico.destaque ? "bg-white/10" : "bg-slate-100 dark:bg-slate-900/40"
                          }`}>
                            <Check className={`w-3 h-3 opacity-80 ${servico.destaque ? "text-white/90" : "text-slate-600 dark:text-slate-400"}`} />
                          </div>
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Divider */}
                    <div className={`h-px mb-4 ${servico.destaque ? "bg-white/20" : "bg-gray-200 dark:bg-gray-700"}`} />

                    {/* Delivery */}
                    <div className="mb-4">
                      <div className={`text-xs uppercase tracking-wider mb-1 ${servico.destaque ? "text-white/60" : "text-gray-500 dark:text-gray-400"}`}>
                        Entrega estimada
                      </div>
                      <div className={`text-sm font-semibold ${servico.destaque ? "text-white" : "text-gray-900 dark:text-white"}`}>
                        {servico.entrega}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={`https://wa.me/5543999729854?text=Olá! Tenho interesse no plano ${servico.titulo.replace(/\s+/g, '%20')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <MagneticButton
                        className={`w-full ${
                          servico.destaque 
                            ? "bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl hover:scale-105" 
                            : "bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white hover:from-blue-700 hover:to-blue-800 dark:hover:from-blue-600 dark:hover:to-blue-700 shadow-lg hover:shadow-xl hover:scale-105"
                        } h-12 px-5 text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all duration-200`}
                      >
                        <span>Quero esse plano</span>
                        <ArrowRight className="w-4 h-4" />
                      </MagneticButton>
                    </a>
              </motion.div>
            ))}
          </motion.div>

          {/* What's Included - Inline */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-4 gap-y-3 sm:gap-y-2 text-base sm:text-sm text-muted-foreground">
              <span className="text-foreground font-semibold mr-2">Incluso:</span>
              {inclusos.map((item, index) => (
                <span key={index} className="flex items-center gap-2">
                  <Check className="w-5 h-5 sm:w-3 sm:h-3 text-primary" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
