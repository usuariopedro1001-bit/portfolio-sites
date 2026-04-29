"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, TrendingUp, Home, Info, Briefcase, Layout, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { useTheme } from "@/components/theme-provider"

const navLinks = [
  { label: "Sobre", href: "#sobre", icon: Info },
  { label: "Serviços", href: "#servicos", icon: Briefcase },
  { label: "Ver exemplos reais", href: "/portfolio", icon: Layout },
]

const bottomNavLinks = [
  { label: "Início", href: "#", icon: Home },
  { label: "Sobre", href: "#sobre", icon: Info },
  { label: "Serviços", href: "#servicos", icon: Briefcase },
  { label: "Exemplos", href: "/portfolio", icon: Layout },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Hide bottom nav on portfolio page
  const showBottomNav = pathname !== "/portfolio"

  return (
    <>
      {/* Top Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-primary/5"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="text-2xl font-bold">
                <span className="text-foreground">Leon</span>
                <span className="text-primary">.</span>
                <span className="text-blue-400">Dev</span>
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 ml-auto">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-foreground/80 hover:text-foreground font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-foreground" />
                ) : (
                  <Moon className="w-5 h-5 text-foreground" />
                )}
              </button>
              <Button size="sm" className="h-10 px-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                Quero Vender Mais
              </Button>
            </nav>

            {/* Mobile Menu Button - Only on portfolio page */}
            {pathname === "/portfolio" && (
              <button
                className="md:hidden ml-auto p-2 rounded-lg bg-primary/5 border border-primary/10"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-foreground" />
                ) : (
                  <Menu className="w-5 h-5 text-foreground" />
                )}
              </button>
            )}
          </div>

          {/* Mobile Menu - Only on portfolio page */}
          {isMobileMenuOpen && pathname === "/portfolio" && (
            <div className="md:hidden py-6 border-t border-primary/5">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-base text-muted-foreground hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-primary/5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </motion.header>

      {/* Bottom Navigation - Mobile Only */}
      {showBottomNav && (
        <motion.nav
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-xl border-t border-primary/5 pb-safe"
        >
          <div className="flex items-center justify-around py-3 px-4">
            {bottomNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl hover:bg-primary/5 active:bg-primary/10 transition-colors min-w-[64px]"
              >
                <link.icon className="w-6 h-6 text-foreground/70" />
                <span className="text-[10px] text-foreground/70 font-medium">{link.label}</span>
              </a>
            ))}
          </div>
        </motion.nav>
      )}
    </>
  )
}
