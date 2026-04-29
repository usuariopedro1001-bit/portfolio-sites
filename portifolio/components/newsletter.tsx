"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react"
import { MagneticButton } from "@/components/magnetic-button"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsLoading(false)
    setEmail("")
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 sm:p-12 text-center"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/20 flex items-center justify-center">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Receba dicas exclusivas
          </h2>
          
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Estratégias de conversão, tendências de design e insights sobre desenvolvimento web direto no seu email.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
                className="flex-1 px-6 py-4 rounded-xl bg-background border border-primary/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <MagneticButton
                type="submit"
                disabled={isLoading}
                className="bg-primary text-white hover:bg-primary/90 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span>Enviando...</span>
                ) : (
                  <>
                    <span>Inscrever</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </MagneticButton>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
              </div>
              <p className="text-foreground font-semibold text-lg">
                Inscrição confirmada!
              </p>
              <p className="text-muted-foreground text-sm">
                Verifique seu email para confirmar.
              </p>
            </motion.div>
          )}

          <p className="text-xs text-muted-foreground mt-6">
            Respeitamos sua privacidade. Sem spam, pode cancelar quando quiser.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
