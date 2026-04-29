"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { MagneticButton } from "@/components/magnetic-button"

const projects = [
  {
    id: 1,
    title: "E-commerce Premium",
    category: "e-commerce",
    description: "Plataforma completa com gestão de produtos, pagamentos e analytics.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Next.js", "Stripe", "Prisma"],
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Dashboard SaaS",
    category: "dashboard",
    description: "Painel administrativo com gráficos em tempo real e automação.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["React", "D3.js", "Node.js"],
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Landing Page Startup",
    category: "landing",
    description: "Página de alta conversão com animações e copy persuasiva.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    tags: ["Framer Motion", "Tailwind", "Vercel"],
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "App Mobile Finance",
    category: "mobile",
    description: "Aplicativo de gestão financeira com sincronização em tempo real.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
    tags: ["React Native", "Firebase", "Redux"],
    link: "#",
    github: "#"
  },
  {
    id: 5,
    title: "Blog Tech",
    category: "blog",
    description: "Plataforma de conteúdo com SEO otimizado e sistema de comentários.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop",
    tags: ["Next.js", "MDX", "Supabase"],
    link: "#",
    github: "#"
  },
  {
    id: 6,
    title: "Portal Corporativo",
    category: "institucional",
    description: "Site institucional para empresa de tecnologia com múltiplas seções.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    tags: ["TypeScript", "Storyblok", "AWS"],
    link: "#",
    github: "#"
  }
]

const categories = ["todos", "e-commerce", "dashboard", "landing", "mobile", "blog", "institucional"]

export function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState("todos")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = selectedCategory === "todos" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            <span className="text-gradient">Projetos Recentes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos projetos que desenvolvi, cada um com seus próprios desafios e soluções únicas.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <MagneticButton
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-accent border border-white/20 text-foreground hover:bg-white/10"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </MagneticButton>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden glass cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Links */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <MagneticButton className="flex-1 bg-primary text-white py-2 rounded-lg flex items-center justify-center gap-2 text-sm">
                      <ExternalLink className="w-4 h-4" />
                      Ver
                    </MagneticButton>
                    <MagneticButton className="flex-1 bg-accent border border-white/20 text-foreground py-2 rounded-lg flex items-center justify-center gap-2 text-sm">
                      <Github className="w-4 h-4" />
                      Código
                    </MagneticButton>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Nenhum projeto encontrado nesta categoria.</p>
          </div>
        )}
      </div>
    </section>
  )
}
