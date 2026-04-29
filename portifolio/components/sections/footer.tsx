"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, ArrowUpRight, Rocket } from "lucide-react"
import { FooterParticles } from "@/components/footer-particles"
import { useState, useEffect } from "react"

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:pedro.leon0304@gmail.com", label: "Email", isExternal: true },
]

const footerLinks = [
  { label: "Início", href: "#hero", slideIndex: 0 },
  { label: "Sobre", href: "#sobre", slideIndex: 1 },
  { label: "Serviços", href: "#servicos", slideIndex: 2 },
  { label: "Ver exemplos", href: "#servicos", slideIndex: 2 },
] as const

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-50px" },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }
}

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  },
  viewport: { once: false, margin: "-50px" }
}

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }
  }
}

export function Footer() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string, slideIndex?: number) => {
    // Don't intercept external links (mailto, http, https)
    if (href.startsWith('mailto:') || href.startsWith('http://') || href.startsWith('https://')) {
      return
    }

    e.preventDefault()

    if (isMobile) {
      // Mobile: normal vertical scroll
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (slideIndex !== undefined) {
      // Desktop: horizontal scroll - navigate to specific slide
      // Find the horizontal wrapper container
      const container = document.querySelector('[style*="height:"]') as HTMLElement
      if (container) {
        const sectionTop = container.offsetTop
        const sectionHeight = container.offsetHeight
        const totalSlides = 6
        const windowHeight = window.innerHeight
        const targetScroll = sectionTop + (slideIndex / (totalSlides - 1)) * (sectionHeight - windowHeight)
        window.scrollTo({ top: targetScroll, behavior: 'smooth' })
      }
    }
  }

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative h-full py-12 sm:py-16 border-t border-primary/5 bg-white/[0.01] overflow-hidden flex flex-col"
    >
      {/* Particle Background */}
      <FooterParticles />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center">
          {/* Brand */}
          <motion.div 
            {...fadeInUp}
            className="mb-5 sm:mb-6"
          >
            <div className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">
              <span className="text-foreground">Leon</span>
              <span className="text-primary">.</span>
              <span className="text-blue-400">Dev</span>
            </div>
            <p className="text-gray-900 dark:text-muted-foreground max-w-md mx-auto text-xs sm:text-sm">
              Desenvolvimento web premium para empresas que querem resultados, não só um site bonito.
            </p>
          </motion.div>

          {/* Links + Social */}
          <div className="flex flex-col items-center gap-4 sm:gap-5 mb-6 sm:mb-8">
            <motion.nav 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: false, margin: "-50px" }}
              className="flex flex-wrap justify-center gap-4 sm:gap-6"
            >
              {footerLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href, link.slideIndex)}
                  variants={staggerItem}
                  whileHover={{ x: 3, y: -2 }}
                  className="text-xs sm:text-sm text-gray-900 dark:text-muted-foreground hover:text-gray-900 dark:hover:text-foreground transition-colors flex items-center gap-1 group cursor-pointer"
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </motion.a>
              ))}
            </motion.nav>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: false, margin: "-50px" }}
              className="flex items-center gap-3 sm:gap-3"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  onClick={(e) => !social.isExternal && handleScroll(e, social.href)}
                  aria-label={social.label}
                  variants={staggerItem}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 sm:w-9 sm:h-9 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/10 transition-colors min-h-[48px] min-w-[48px]"
                >
                  <social.icon className="w-5 h-5 sm:w-4 sm:h-4" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="pt-4 sm:pt-6 border-t border-primary/5 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3"
          >
            <p className="text-[10px] sm:text-xs text-gray-900 dark:text-muted-foreground">
              © {new Date().getFullYear()} Leon Dev. Todos os direitos reservados.
            </p>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-gray-900 dark:text-muted-foreground"
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Rocket className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-primary" />
              </motion.div>
              <span className="hidden sm:inline">Feito para vender mais</span>
              <span className="sm:hidden">Vender mais</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}
