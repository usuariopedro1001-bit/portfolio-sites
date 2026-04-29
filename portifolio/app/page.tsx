"use client"

import { useState, useEffect } from "react"
import { HorizontalWrapper } from "@/components/horizontal-wrapper"
import { Navbar } from "@/components/navbar"
import { ScrollProgress } from "@/components/scroll-progress"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Newsletter } from "@/components/newsletter"
import { ParticleEffects } from "@/components/particle-effects"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Services } from "@/components/sections/services"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"

// Each slide wrapper ensures perfect 100vh proportions
function Slide({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`h-screen w-screen flex flex-col ${className}`}>
      <Navbar />
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  )
}

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsMobile(window.innerWidth < 768)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (!mounted) {
    return null
  }

  // Mobile: normal vertical scroll
  if (isMobile) {
    return (
      <main className="bg-background">
        <ParticleEffects />
        <ScrollProgress />
        <WhatsAppButton />
        <div className="relative">
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Newsletter />
          <CTA />
          <Footer />
        </div>
      </main>
    )
  }

  // Desktop: horizontal scroll with snap
  return (
    <main className="bg-background">
      <ParticleEffects />
      <ScrollProgress />
      <WhatsAppButton />
      <HorizontalWrapper>
        <Slide>
          <Hero />
        </Slide>
        
        <Slide>
          <About />
        </Slide>
        
        <Slide>
          <Services />
        </Slide>
        
        <Slide>
          <Newsletter />
        </Slide>
        
        <Slide>
          <CTA />
        </Slide>
        
        <Slide className="justify-end">
          <Footer />
        </Slide>
      </HorizontalWrapper>
    </main>
  )
}
