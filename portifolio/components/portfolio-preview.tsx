"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Sparkles, X, Check, Menu, ShoppingCart, Phone, MapPin, Clock, Calendar, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

// Animation variants
const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  },
  viewport: { once: false, margin: "-50px" }
}

const staggerItem = {
  initial: { opacity: 0, y: 30, scale: 0.95 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }
  }
}

const cardHover = { 
  scale: 1.02, 
  y: -5,
  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const } 
}

// Mini Website Components
function MiniHeader({ logo, menuItems, bgColor = "bg-white", textColor = "text-gray-800" }: { 
  logo: string, 
  menuItems: string[], 
  bgColor?: string,
  textColor?: string
}) {
  return (
    <div className={`${bgColor} px-4 py-3 flex items-center justify-between border-b`}>
      <span className={`font-bold text-sm ${textColor}`}>{logo}</span>
      <div className="flex items-center gap-3">
        {menuItems.slice(0, 3).map((item, i) => (
          <span key={i} className={`text-xs ${textColor} opacity-70 hidden sm:block`}>{item}</span>
        ))}
        <Menu className={`w-4 h-4 ${textColor}`} />
      </div>
    </div>
  )
}

function MiniHero({ 
  title, 
  subtitle, 
  cta, 
  bgGradient = "from-pink-100 to-rose-50",
  buttonColor = "bg-rose-500",
  textColor = "text-gray-800"
}: { 
  title: string, 
  subtitle: string, 
  cta: string,
  bgGradient?: string,
  buttonColor?: string,
  textColor?: string
}) {
  return (
    <div className={`bg-gradient-to-br ${bgGradient} px-4 py-6 text-center`}>
      <h3 className={`font-bold text-base ${textColor} mb-1 leading-tight`}>{title}</h3>
      <p className={`text-xs ${textColor} opacity-70 mb-3`}>{subtitle}</p>
      <button className={`${buttonColor} text-white text-xs px-4 py-2 rounded-full font-medium shadow-lg`}>
        {cta}
      </button>
    </div>
  )
}

function MiniFeatures({ features, icon: Icon }: { features: string[], icon: any }) {
  return (
    <div className="bg-white px-4 py-3 space-y-2">
      {features.map((feature, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
            <Icon className="w-3 h-3 text-gray-600" />
          </div>
          <span className="text-xs text-gray-600">{feature}</span>
        </div>
      ))}
    </div>
  )
}

// Mini Website Templates
const miniSites = [
  {
    id: 1,
    tipo: "Clínica Estética",
    resultado: "Agendamentos online 24h",
    descricao: "Design sofisticado que transmite confiança e profissionalismo.",
    template: ({ expanded }: { expanded: boolean }) => (
      <div className="h-full flex flex-col bg-white rounded-lg overflow-hidden shadow-inner">
        <MiniHeader logo="Bella Estética" menuItems={["Serviços", "Equipe", "Contato"]} bgColor="bg-white" textColor="text-rose-700" />
        <MiniHero 
          title="Sua beleza natural em 1º lugar" 
          subtitle="Tratamentos faciais e corporais com tecnologia de ponta"
          cta="Agendar Consulta"
          bgGradient="from-rose-50 to-pink-100"
          buttonColor="bg-rose-500"
          textColor="text-rose-900"
        />
        <div className="flex-1 bg-white p-4 space-y-3 overflow-y-auto">
          <div className="grid grid-cols-3 gap-2">
            {["Limpeza", "Botox", "Laser"].map((s, i) => (
              <div key={i} className="bg-rose-50 rounded-lg p-2 text-center">
                <div className="w-8 h-8 bg-rose-100 rounded-full mx-auto mb-1" />
                <span className="text-xs text-rose-700">{s}</span>
              </div>
            ))}
          </div>
          {expanded && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle className="w-4 h-4 text-rose-500" />
                  <span className="text-sm font-medium">Depoimentos</span>
                </div>
                <p className="text-xs text-gray-600 italic">"Resultado incrível! Minha pele nunca esteve tão boa."</p>
              </div>
              <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium">Agendar Agora</button>
            </motion.div>
          )}
        </div>
      </div>
    )
  },
  {
    id: 2,
    tipo: "Loja Online",
    resultado: "Checkout em 1 clique",
    descricao: "E-commerce otimizado para vendas com experiência fluida.",
    template: ({ expanded }: { expanded: boolean }) => (
      <div className="h-full flex flex-col bg-gray-50 rounded-lg overflow-hidden shadow-inner">
        <MiniHeader logo="StyleShop" menuItems={["Feminino", "Masculino", "Acessórios"]} bgColor="bg-violet-600" textColor="text-white" />
        <div className="bg-violet-600 px-4 py-3">
          <div className="bg-white rounded-lg p-2 flex items-center gap-2">
            <span className="text-xs text-gray-400 flex-1">Buscar produtos...</span>
            <ShoppingCart className="w-4 h-4 text-violet-600" />
          </div>
        </div>
        <div className="flex-1 p-4 space-y-3 overflow-y-auto">
          <div className="grid grid-cols-2 gap-2">
            {[
              { name: "Vestido", price: "R$ 129" },
              { name: "Blusa", price: "R$ 89" },
              { name: "Calça", price: "R$ 159" },
              { name: "Saia", price: "R$ 99" }
            ].map((p, i) => (
              <div key={i} className="bg-white rounded-lg p-3 shadow-sm">
                <div className="w-full h-16 bg-violet-100 rounded mb-2" />
                <p className="text-xs font-medium text-gray-800">{p.name}</p>
                <p className="text-xs text-violet-600 font-bold">{p.price}</p>
                <button className="w-full mt-2 bg-violet-600 text-white text-xs py-1 rounded">Comprar</button>
              </div>
            ))}
          </div>
          {expanded && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
              <div className="bg-white rounded-lg p-3">
                <p className="text-sm font-medium mb-2">Carrinho (3 itens)</p>
                <p className="text-lg font-bold text-violet-600">Total: R$ 377</p>
                <button className="w-full mt-2 bg-green-500 text-white py-2 rounded-lg font-medium">Finalizar Compra</button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    )
  },
  {
    id: 3,
    tipo: "Escritório de Advocacia",
    resultado: "Captação de casos de alto valor",
    descricao: "Presença autoridade que transmite seriedade e experiência.",
    template: ({ expanded }: { expanded: boolean }) => (
      <div className="h-full flex flex-col bg-slate-900 rounded-lg overflow-hidden shadow-inner">
        <MiniHeader logo="GOLDMANN" menuItems={["Áreas", "Advogados", "Blog"]} bgColor="bg-slate-900" textColor="text-amber-400" />
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 px-4 py-6 text-center border-t border-slate-700">
          <h3 className="font-serif font-bold text-amber-400 text-base mb-1">Excelência Jurídica</h3>
          <p className="text-xs text-slate-400 mb-3">Defendendo seus direitos com dedicação</p>
          <button className="bg-amber-500 text-slate-900 text-xs px-4 py-2 rounded font-bold">
            Fale com Especialista
          </button>
        </div>
        <div className="flex-1 bg-slate-900 p-4 space-y-3 overflow-y-auto">
          <div className="grid grid-cols-2 gap-2">
            {["Trabalhista", "Cível", "Empresarial", "Tributário"].map((a, i) => (
              <div key={i} className="bg-slate-800 rounded-lg p-2 text-center border border-slate-700">
                <div className="w-6 h-6 bg-amber-500/20 rounded mx-auto mb-1 flex items-center justify-center">
                  <span className="text-amber-400 text-xs">⚖</span>
                </div>
                <span className="text-xs text-slate-300">{a}</span>
              </div>
            ))}
          </div>
          {expanded && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
              <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
                <p className="text-xs text-slate-400 mb-2">Atendimento 24h para emergências</p>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span className="text-amber-400 font-bold text-sm">(11) 9999-9999</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    )
  },
  {
    id: 4,
    tipo: "Restaurante",
    resultado: "Reservas online constantes",
    descricao: "Site apetitoso que destaca ambiente e cardápio.",
    template: ({ expanded }: { expanded: boolean }) => (
      <div className="h-full flex flex-col bg-orange-50 rounded-lg overflow-hidden shadow-inner">
        <MiniHeader logo="Bistrô Verde" menuItems={["Cardápio", "Chef", "Local"]} bgColor="bg-white" textColor="text-orange-700" />
        <div className="bg-gradient-to-r from-orange-500 to-red-500 px-4 py-5 text-center">
          <h3 className="font-bold text-white text-base mb-1">Cozinha Artesanal</h3>
          <p className="text-xs text-white/80 mb-3">Sabores que encantam seu paladar</p>
          <button className="bg-white text-orange-600 text-xs px-4 py-2 rounded-full font-bold shadow-lg">
            Reservar Mesa
          </button>
        </div>
        <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-orange-50">
          <div className="space-y-2">
            {[
              { nome: "Risoto de Cogumelos", preco: "R$ 48" },
              { nome: "Filé Mignon", preco: "R$ 72" },
              { nome: "Salmão Grelhado", preco: "R$ 65" }
            ].map((p, i) => (
              <div key={i} className="bg-white rounded-lg p-3 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg" />
                  <span className="text-sm font-medium text-gray-800">{p.nome}</span>
                </div>
                <span className="text-orange-600 font-bold text-sm">{p.preco}</span>
              </div>
            ))}
          </div>
          {expanded && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-orange-500" />
                  <span className="text-sm font-medium">Reserva para hoje</span>
                </div>
                <div className="flex gap-2">
                  {["19h", "20h", "21h"].map(h => (
                    <button key={h} className="flex-1 bg-orange-100 text-orange-700 py-2 rounded text-xs font-medium">{h}</button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    )
  },
  {
    id: 5,
    tipo: "Empresa Local",
    resultado: "Mais chamadas e visitas",
    descricao: "Presença profissional que fortalece a marca local.",
    template: ({ expanded }: { expanded: boolean }) => (
      <div className="h-full flex flex-col bg-white rounded-lg overflow-hidden shadow-inner">
        <MiniHeader logo="Constructions Pro" menuItems={["Serviços", "Projetos", "Sobre"]} bgColor="bg-emerald-700" textColor="text-white" />
        <div className="bg-emerald-700 px-4 py-5 text-center">
          <h3 className="font-bold text-white text-base mb-1">Construindo Sonhos</h3>
          <p className="text-xs text-emerald-100 mb-3">20 anos de experiência em obras</p>
          <button className="bg-amber-400 text-emerald-900 text-xs px-4 py-2 rounded font-bold">
            Orçamento Grátis
          </button>
        </div>
        <div className="flex-1 p-4 space-y-3 overflow-y-auto">
          <div className="grid grid-cols-2 gap-2">
            {["Residencial", "Comercial", "Reformas", "Projetos"].map((s, i) => (
              <div key={i} className="bg-emerald-50 rounded-lg p-3 text-center">
                <div className="w-8 h-8 bg-emerald-100 rounded mx-auto mb-1 flex items-center justify-center">
                  <span className="text-emerald-600 text-lg">🏗</span>
                </div>
                <span className="text-xs text-emerald-800 font-medium">{s}</span>
              </div>
            ))}
          </div>
          {expanded && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
              <div className="bg-gray-100 rounded-lg p-3">
                <div className="flex items-center gap-2 text-sm text-gray-700 mb-1">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>Av. Principal, 1234 - Centro</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span>Seg-Sex: 8h às 18h</span>
                </div>
              </div>
              <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                Ligar Agora
              </button>
            </motion.div>
          )}
        </div>
      </div>
    )
  },
  {
    id: 6,
    tipo: "Landing Page de Vendas",
    resultado: "Alta taxa de conversão",
    descricao: "Página focada em um único objetivo: vender.",
    template: ({ expanded }: { expanded: boolean }) => (
      <div className="h-full flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg overflow-hidden shadow-inner">
        <div className="px-4 py-6 text-center">
          <span className="text-red-400 text-xs font-bold tracking-wider">⚡ OFERTA LIMITADA</span>
          <h3 className="font-bold text-white text-lg mt-2 mb-1">Curso Completo de Marketing</h3>
          <p className="text-xs text-gray-400">De iniciante a profissional em 30 dias</p>
        </div>
        <div className="flex-1 px-4 pb-4 space-y-4 overflow-y-auto">
          <div className="bg-white/10 rounded-lg p-4 text-center backdrop-blur">
            <p className="text-gray-400 text-xs line-through">De R$ 997</p>
            <p className="text-white text-2xl font-bold">12x R$ 49</p>
            <p className="text-red-400 text-xs">ou R$ 497 à vista (-15%)</p>
          </div>
          <div className="space-y-2">
            {["50+ aulas em vídeo", "Certificado incluso", "Suporte 1 ano", "Garantia 7 dias"].map((b, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm text-gray-300">{b}</span>
              </div>
            ))}
          </div>
          {expanded && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
              <div className="bg-red-500 text-white text-center py-3 rounded-lg font-bold animate-pulse">
                🚨 VAGAS ACABANDO!
              </div>
              <button className="w-full bg-green-500 hover:bg-green-400 text-white py-4 rounded-lg font-bold text-lg shadow-lg shadow-green-500/30">
                QUERO ENTRAR AGORA →
              </button>
              <p className="text-center text-xs text-gray-500">Pagamento 100% seguro • Acesso imediato</p>
            </motion.div>
          )}
          {!expanded && (
            <button className="w-full bg-red-500 text-white py-3 rounded-lg font-bold">
              Comprar Agora
            </button>
          )}
        </div>
      </div>
    )
  },
]

export function PortfolioPreview() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-8 pb-4 border-b border-white/10">
        <div className="flex items-center gap-3 mb-2">
          <Sparkles className="w-6 h-6 text-primary" />
          <span className="text-sm text-primary font-medium uppercase tracking-wider">
            Galeria de Estilos
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Todos esses estilos são
          <span className="text-primary"> adaptados para você</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Cada negócio é único. Escolha o estilo que mais combina com sua marca e veja como transformamos visitantes em clientes.
        </p>
      </div>

      {/* Grid */}
      <div className="flex-1 overflow-y-auto p-8">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {miniSites.map((site) => (
            <motion.div
              key={site.id}
              variants={staggerItem}
              whileHover={cardHover}
              className={`group rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-300 bg-accent ${
                expandedId === site.id ? "md:col-span-2 md:row-span-2 ring-2 ring-primary/50" : ""
              }`}
            >
              {/* Mini Website Preview */}
              <div className={`relative ${expandedId === site.id ? "h-[500px]" : "h-[320px]"} transition-all duration-500`}>
                <site.template expanded={expandedId === site.id} />
              </div>

              {/* Info Bar */}
              <div className="p-4 bg-white/[0.02] border-t border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-foreground">{site.tipo}</h3>
                  <span className="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium">
                    {site.resultado}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {site.descricao}
                </p>

                {/* Toggle Button */}
                <button
                  onClick={() => setExpandedId(expandedId === site.id ? null : site.id)}
                  className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors"
                >
                  {expandedId === site.id ? (
                    <>
                      <X className="w-4 h-4" />
                      Fechar preview
                    </>
                  ) : (
                    <>
                      <ArrowRight className="w-4 h-4" />
                      Ver estilo completo
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center p-8 rounded-2xl bg-primary/10 border border-primary/20"
        >
          <p className="text-lg text-foreground mb-4">
            Não encontrou exatamente o que precisa?
          </p>
          <Button size="lg" className="group">
            Vamos criar algo único para você
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
