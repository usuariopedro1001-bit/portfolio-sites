"use client"

/* eslint-disable react/no-inline-styles -- Dynamic scroll transforms require inline styles */
import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ArrowRight, ExternalLink, Eye, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    client: "Clínica Bella",
    type: "Site Institucional",
    description: "Presença digital elegante para clínica de estética premium. Design que transmite confiança e sofisticação.",
    result: "+180% agendamentos online",
    color: "from-rose-500 to-pink-600",
    bgPattern: "radial-gradient(circle at 20% 80%, rgba(244,63,94,0.15) 0%, transparent 50%)",
    tags: ["Landing Page", "Agendamento", "SEO"],
  },
  {
    id: 2,
    client: "TechStore Pro",
    type: "E-commerce",
    description: "Plataforma de vendas completa com checkout otimizado. Experiência de compra fluida e conversão maximizada.",
    result: "+95% taxa de conversão",
    color: "from-violet-500 to-purple-600",
    bgPattern: "radial-gradient(circle at 80% 20%, rgba(139,92,246,0.15) 0%, transparent 50%)",
    tags: ["E-commerce", "Checkout", "Integrações"],
  },
  {
    id: 3,
    client: "Goldmann Advogados",
    type: "Site Institucional",
    description: "Presença autoritária para escritório de advocacia de alto padrão. Design que transmite seriedade e expertise.",
    result: "+45 novos casos/mês",
    color: "from-amber-500 to-orange-600",
    bgPattern: "radial-gradient(circle at 50% 50%, rgba(245,158,11,0.15) 0%, transparent 50%)",
    tags: ["Autoridade", "Captação", "Blog"],
  },
  {
    id: 4,
    client: "Bistrô Verde",
    type: "Site + Reservas",
    description: "Experiência gastronômica digital completa. Cardápio online integrado com sistema de reservas.",
    result: "+250 reservas/semana",
    color: "from-emerald-500 to-teal-600",
    bgPattern: "radial-gradient(circle at 30% 70%, rgba(16,185,129,0.15) 0%, transparent 50%)",
    tags: ["Reservas", "Cardápio", "Galeria"],
  },
  {
    id: 5,
    client: "Construction Pro",
    type: "Site Corporativo",
    description: "Presença profissional para empresa de construção civil. Portfólio de obras e captação de orçamentos.",
    result: "+60 orçamentos/mês",
    color: "from-blue-500 to-cyan-600",
    bgPattern: "radial-gradient(circle at 70% 30%, rgba(59,130,246,0.15) 0%, transparent 50%)",
    tags: ["Portfólio", "Orçamentos", "Local"],
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] xl:w-[40vw] h-full px-4"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="relative h-full rounded-3xl overflow-hidden bg-accent border border-white/10 group cursor-pointer">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 transition-opacity duration-500"
          // eslint-disable-next-line react/no-inline-styles
          style={{ background: project.bgPattern }}
        />
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Content */}
        <div className="relative h-full flex flex-col p-8 md:p-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <motion.span 
                className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70 mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 }}
              >
                {project.type}
              </motion.span>
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3 }}
              >
                {project.client}
              </motion.h3>
            </div>
            <motion.div 
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors"
              whileHover={{ rotate: 45, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <ExternalLink className="w-5 h-5 text-white/70" />
            </motion.div>
          </div>

          {/* Description */}
          <motion.p 
            className="text-white/60 text-base md:text-lg leading-relaxed mb-6 flex-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4 }}
          >
            {project.description}
          </motion.p>

          {/* Result Badge */}
          <motion.div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${project.color} text-white text-sm font-semibold mb-6 w-fit`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <Zap className="w-4 h-4" />
            {project.result}
          </motion.div>

          {/* Tags */}
          <motion.div 
            className="flex flex-wrap gap-2 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.6 }}
          >
            {project.tags.map((tag, i) => (
              <span 
                key={i}
                className="px-3 py-1 rounded-full text-xs bg-white/5 text-white/50 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.7 }}
          >
            <Button 
              variant="outline" 
              className="w-full border-white/20 hover:bg-white/10 text-white group/btn"
            >
              <Eye className="w-4 h-4 mr-2" />
              Ver Case Completo
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/5 to-transparent rounded-tl-full" />
        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-br-full" />
      </div>
    </motion.div>
  )
}

export function HorizontalShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Smooth spring animation for natural feel
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const smoothProgress = useSpring(scrollYProgress, springConfig)
  
  // Calculate horizontal movement
  // Total width minus viewport width gives us the scrollable distance
  const x = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", "-80%"]
  )

  // Progress indicator
  const scaleX = useTransform(smoothProgress, [0, 1], [0, 1])

  return (
    <section 
      ref={containerRef}
      id="cases"
      className="relative bg-background"
      // eslint-disable-next-line react/no-inline-styles
      style={{ height: `${projects.length * 100}vh` }}
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Section Header */}
        <div className="absolute top-0 left-0 right-0 z-20 p-8 md:p-12">
          <div className="max-w-7xl mx-auto flex items-end justify-between">
            <div>
              <motion.span 
                className="text-sm text-primary font-medium uppercase tracking-wider mb-2 block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
              >
                Cases de Sucesso
              </motion.span>
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Resultados que <span className="text-primary">falam por si</span>
              </motion.h2>
            </div>
            
            {/* Progress Bar */}
            <div className="hidden md:block w-48 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary rounded-full"
                style={{ scaleX, transformOrigin: "left" }}
              />
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <motion.div 
          className="absolute top-1/2 left-0 -translate-y-1/2 flex items-center h-[70vh]"
          style={{ x }}
        >
          {/* Spacer for initial offset */}
          <div className="w-[10vw] flex-shrink-0" />
          
          {/* Project Cards */}
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
          
          {/* End CTA Card */}
          <motion.div 
            className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[50vw] lg:w-[35vw] h-[70vh] px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-full rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex flex-col items-center justify-center p-10 text-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Zap className="w-16 h-16 text-primary mb-6" />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Quer ser o próximo case?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-sm">
                Vamos criar um site que converta visitantes em clientes e eleve sua presença digital.
              </p>
              <Button size="lg" className="group">
                Começar Agora
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
          
          {/* Final spacer */}
          <div className="w-[15vw] flex-shrink-0" />
        </motion.div>

        {/* Scroll Hint */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="text-xs uppercase tracking-wider">Role para continuar</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
              <motion.div 
                className="w-1.5 h-1.5 bg-white/40 rounded-full"
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
