"use client"

import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in"
import { Quote, Star } from "lucide-react"

const depoimentos = [
  {
    texto: "O novo site trouxe resultados em 2 semanas. Passamos de 5 leads por semana para 18. O investimento se pagou no primeiro mês.",
    autor: "Carlos Mendes",
    cargo: "Diretor, Construtora Horizonte",
    nota: 5,
    resultado: "+260% leads",
  },
  {
    texto: "Diferente de outros devs, ele realmente entendeu nosso negócio. O site não é só bonito, converte visitantes em consultas.",
    autor: "Fernanda Lopes",
    cargo: "CEO, Clínica Estética Bella",
    nota: 5,
    resultado: "3x mais agendamentos",
  },
  {
    texto: "Performance impressionante. Site carrega em 0.8s, ranking no Google subiu 15 posições. Clientes elogiam a experiência.",
    autor: "Ricardo Almeida",
    cargo: "Marketing Director, TechFlow",
    nota: 5,
    resultado: "PageSpeed 98/100",
  },
]

export function Testimonials() {
  return (
    <section className="py-28 sm:py-36 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <FadeIn className="text-center mb-20">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Depoimentos
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Clientes que tiveram
              <span className="text-primary"> resultados reais</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Não acredite apenas na minha palavra. Veja o que empresários dizem sobre trabalhar comigo.
            </p>
          </FadeIn>

          {/* Testimonial Cards */}
          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {depoimentos.map((item, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="group relative h-full p-8 rounded-3xl bg-white/[0.02] backdrop-blur-sm border border-primary/5 hover:border-primary/20 transition-all duration-500"
                >
                  {/* Quote Icon */}
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors" />
                  
                  {/* Result Badge */}
                  <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                    <span className="text-sm text-emerald-600 font-medium">{item.resultado}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(item.nota)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-foreground/90 mb-8 leading-relaxed">
                    &ldquo;{item.texto}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center border border-primary/20">
                      <span className="text-primary font-semibold">
                        {item.autor.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {item.autor}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {item.cargo}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
