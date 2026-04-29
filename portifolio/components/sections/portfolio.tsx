"use client"

import { motion } from "framer-motion"
import { FadeIn } from "@/components/motion/fade-in"
import { ExternalLink, TrendingUp, Users, Clock, ArrowUpRight, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

const cases = [
  {
    cliente: "Loja Viva",
    tipo: "E-commerce",
    descricao: "Redesenho completo de e-commerce de moda feminina. Foco em mobile-first e velocidade de checkout.",
    resultado: "+127% em vendas no 1º mês",
    metricas: { conversao: "+85%", trafego: "+40%" },
    cor: "from-pink-500/20 to-purple-500/20",
  },
  {
    cliente: "Consultoria Pro",
    tipo: "Landing Page",
    descricao: "Página de captação para consultoria B2B. Estrutura de copy baseada em pesquisa de dor do cliente.",
    resultado: "3x mais leads qualificados",
    metricas: { conversao: "+210%", trafego: "Mesmo" },
    cor: "from-emerald-500/20 to-teal-500/20",
  },
  {
    cliente: "Imobiliária Prime",
    tipo: "Site + Sistema",
    descricao: "Portal imobiliário com busca avançada, mapa interativo e área do corretor.",
    resultado: "+60% de atendimentos",
    metricas: { conversao: "+45%", trafego: "+55%" },
    cor: "from-blue-500/20 to-cyan-500/20",
  },
  {
    cliente: "SaaS Metrics",
    tipo: "Dashboard",
    descricao: "Painel de analytics em tempo real para empresa de métricas de marketing digital.",
    resultado: "Retenção de clientes +35%",
    metricas: { conversao: "N/A", trafego: "Interno" },
    cor: "from-orange-500/20 to-amber-500/20",
  },
]

export function Portfolio() {
  return (
    <section id="cases" className="py-28 sm:py-36 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <FadeIn>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
              <div className="max-w-2xl">
                <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
                  Cases Reais
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                  Resultados que você pode
                  <span className="text-primary"> replicar</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Cada projeto aqui tem uma métrica em comum: 
                  <span className="text-foreground font-semibold"> retorno sobre investimento</span>.
                </p>
              </div>
              <Button variant="outline" className="self-start lg:self-auto border-primary/20 h-12 px-6">
                Ver Todos os Cases
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </FadeIn>

          {/* Cases - UNIQUE CARD LAYOUT */}
          <div className="space-y-6">
            {cases.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="group relative rounded-3xl overflow-hidden border border-primary/5 hover:border-primary/30 transition-all duration-500"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.cor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative p-8 lg:p-10 bg-white/[0.02]">
                    <div className="grid lg:grid-cols-12 gap-8 items-center">
                      {/* Main Info */}
                      <div className="lg:col-span-5">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                            {item.tipo}
                          </span>
                          <button 
                            aria-label="Ver projeto"
                            className="p-2 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                          >
                            <Eye className="w-4 h-4 text-muted-foreground" />
                          </button>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                          {item.cliente}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.descricao}
                        </p>
                      </div>

                      {/* Result Highlight */}
                      <div className="lg:col-span-4">
                        <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                          <div className="flex items-center gap-2 mb-2">
                            <TrendingUp className="w-5 h-5 text-emerald-600" />
                            <span className="text-sm text-emerald-600 font-medium">Resultado Principal</span>
                          </div>
                          <div className="text-2xl font-bold text-emerald-700">
                            {item.resultado}
                          </div>
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="lg:col-span-3 flex gap-6">
                        <div>
                          <div className="text-2xl font-bold text-foreground">
                            {item.metricas.conversao}
                          </div>
                          <div className="text-xs text-muted-foreground">Conversão</div>
                        </div>
                        <div className="w-px bg-primary/10" />
                        <div>
                          <div className="text-2xl font-bold text-foreground">
                            {item.metricas.trafego}
                          </div>
                          <div className="text-xs text-muted-foreground">Tráfego</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* Bottom Note */}
          <FadeIn delay={0.5}>
            <div className="mt-12 text-center">
              <p className="text-muted-foreground">
                <span className="text-foreground font-semibold">Importante:</span> Resultados variam conforme nicho, 
                investimento em tráfego e estado atual do negócio. Vamos analisar seu caso específico?
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
