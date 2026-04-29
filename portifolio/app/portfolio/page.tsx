"use client"

import { PortfolioPreview } from "@/components/portfolio-preview"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Back button */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao site
            </Link>
            <div className="ml-auto text-2xl font-bold">
              <span className="text-foreground">Leon</span>
              <span className="text-primary">.</span>
              <span className="text-blue-400">Dev</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-16">
        <PortfolioPreview />
      </div>
    </div>
  )
}
