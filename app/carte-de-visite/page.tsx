import type { Metadata } from "next"
import {
  Mail,
  Phone,
  Globe,
  TrendingUp,
  Target,
  Sparkles,
  Zap,
  Shield,
  Award,
  Clock,
  DollarSign,
  BarChart3,
  LineChart,
  PieChart,
  Activity,
  ArrowUpRight,
  TrendingDown,
  Percent,
  Calculator,
  CheckCircle2,
} from "lucide-react"
import { PhoneLink } from "@/components/phone-link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Carte de visite - aegens",
  description: "Votre partenaire stratégique en transformation digitale",
}

export default function CarteDeVisitePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="max-w-5xl w-full">
        <div className="relative overflow-hidden rounded-3xl backdrop-blur-md p-8 shadow-2xl bg-card border-foreground border-2">
          {/* En-tête avec logo et nom */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <Image src="/ae-logo-business-card.png" alt="AE Logo" width={80} height={80} className="object-contain" />
              <div>
                <p className="text-5xl font-bold mb-1 leading-tight">Simon LECLAIR</p>
                <p className="text-xl text-foreground/70 font-medium">Président</p>
              </div>
            </div>
          </div>

          {/* Grille de 20+ petits blocs sur le ROI et la stratégie */}
          <div className="grid grid-cols-4 md:grid-cols-5 gap-3 mb-6">
            <div className="bg-green-500/20 border-2 border-green-500/40 rounded-lg p-3 flex flex-col items-center justify-center text-center">
              <DollarSign className="w-6 h-6 text-green-400 mb-1" />
              <p className="text-xs font-bold">Chaque euro compte</p>
            </div>

            <div className="bg-blue-500/20 border-2 border-blue-500/40 rounded-lg p-3 flex flex-col items-center justify-center text-center">
              <TrendingUp className="w-6 h-6 text-blue-400 mb-1" />
              <p className="text-xs font-bold">Croissance explosive</p>
            </div>

            <div className="bg-orange-500/20 border-2 border-orange-500/40 rounded-lg p-3 flex flex-col items-center justify-center text-center">
              <Target className="w-6 h-6 text-orange-400 mb-1" />
              <p className="text-xs font-bold">Rentabilité maximale</p>
            </div>

            <div className="bg-purple-500/20 border-2 border-purple-500/40 rounded-lg p-3 flex flex-col items-center justify-center text-center">
              <BarChart3 className="w-6 h-6 text-purple-400 mb-1" />
              <p className="text-xs font-bold">Performance décuplée</p>
            </div>

            <div className="bg-cyan-500/20 border-2 border-cyan-500/40 rounded-lg p-3 flex flex-col items-center justify-center text-center">
              <Sparkles className="w-6 h-6 text-cyan-400 mb-1" />
              <p className="text-xs font-bold">Stratégie gagnante</p>
            </div>

            <div className="bg-yellow-500/20 border-2 border-yellow-500/40 rounded-lg p-3 flex flex-col items-center justify-center text-center">
              <Zap className="w-6 h-6 text-yellow-400 mb-1" />
              <p className="text-xs font-bold">Résultats immédiats</p>
            </div>

            <div className="bg-red-500/20 border-2 border-red-500/40 rounded-lg p-3 flex flex-col items-center justify-center text-center">
              <ArrowUpRight className="w-6 h-6 text-red-400 mb-1" />
              <p className="text-xs font-bold">Efficacité brutale</p>
            </div>

            <div className="bg-pink-500/20 border-2 border-pink-500/40 rounded-lg p-3 flex flex-col items-center justify-center text-center">
              <LineChart className="w-6 h-6 text-pink-400 mb-1" />
              <p className="text-xs font-bold">Optimisation totale</p>
            </div>

            <div className="bg-indigo-500/20 border-2 border-indigo-500/40 rounded-lg p-3 flex flex-col items-center justify-center text-center">
              <PieChart className="w-6 h-6 text-indigo-400 mb-1" />
              <p className="text-xs font-bold">Données puissantes</p>
            </div>

            <div className="bg-teal-500/20 border-2 border-teal-500/40 rounded-lg p-3 flex flex-col items-center justify-center text-center">
              <Activity className="w-6 h-6 text-teal-400 mb-1" />
              <p className="text-xs font-bold">Productivité x10</p>
            </div>

            <div className="bg-green-500/20 border-2 border-green-500/40 rounded-lg p-3 flex flex-col items-center justify-center text-center">
              <TrendingDown className="w-6 h-6 text-green-400 mb-1" />
              <p className="text-xs font-bold">Coûts écrabouillés</p>
            </div>

            <div className="bg-blue-500/20 border-2 border-blue-500/40 rounded-lg p-3 flex flex-col items-center justify-center text-center">
              <Percent className="w-6 h-6 text-blue-400 mb-1" />
              <p className="text-xs font-bold">Marges explosives</p>
            </div>

            <div className="bg-orange-500/20 border-2 border-orange-500/40 rounded-lg p-3 flex flex-col items-center justify-center text-center">
              <Calculator className="w-6 h-6 text-orange-400 mb-1" />
              <p className="text-xs font-bold">Prévisions précises</p>
            </div>

            <div className="bg-purple-500/20 border-2 border-purple-500/40 rounded-lg p-3 flex flex-col items-center justify-center text-center">
              <Shield className="w-6 h-6 text-purple-400 mb-1" />
              <p className="text-xs font-bold">Protection blindée</p>
            </div>

            <div className="bg-cyan-500/20 border-2 border-cyan-500/40 rounded-lg p-3 flex flex-col items-center justify-center text-center">
              <Award className="w-6 h-6 text-cyan-400 mb-1" />
              <p className="text-xs font-bold">Excellence garantie</p>
            </div>

            <div className="bg-yellow-500/20 border-2 border-yellow-500/40 rounded-lg p-3 flex flex-col items-center justify-center text-center">
              <CheckCircle2 className="w-6 h-6 text-yellow-400 mb-1" />
              <p className="text-xs font-bold">Résultats prouvés</p>
            </div>

            <div className="bg-red-500/20 border-2 border-red-500/40 rounded-lg p-3 flex flex-col items-center justify-center text-center">
              <DollarSign className="w-6 h-6 text-red-400 mb-1" />
              <p className="text-xs font-bold">Investissement sûr</p>
            </div>

            <div className="bg-pink-500/20 border-2 border-pink-500/40 rounded-lg p-3 flex flex-col items-center justify-center text-center">
              <TrendingUp className="w-6 h-6 text-pink-400 mb-1" />
              <p className="text-xs font-bold">Profit multiplié</p>
            </div>

            <div className="bg-indigo-500/20 border-2 border-indigo-500/40 rounded-lg p-3 flex flex-col items-center justify-center text-center">
              <BarChart3 className="w-6 h-6 text-indigo-400 mb-1" />
              <p className="text-xs font-bold">KPI maîtrisés</p>
            </div>

            <div className="bg-teal-500/20 border-2 border-teal-500/40 rounded-lg p-3 flex flex-col items-center justify-center text-center">
              <Target className="w-6 h-6 text-teal-400 mb-1" />
              <p className="text-xs font-bold">Objectifs atteints</p>
            </div>

            <div className="bg-green-500/20 border-2 border-green-500/40 rounded-lg p-3 flex flex-col items-center justify-center text-center">
              <Sparkles className="w-6 h-6 text-green-400 mb-1" />
              <p className="text-xs font-bold">Innovation rapide</p>
            </div>

            <div className="bg-blue-500/20 border-2 border-blue-500/40 rounded-lg p-3 flex flex-col items-center justify-center text-center">
              <ArrowUpRight className="w-6 h-6 text-blue-400 mb-1" />
              <p className="text-xs font-bold">Scale immédiat</p>
            </div>

            <div className="bg-orange-500/20 border-2 border-orange-500/40 rounded-lg p-3 flex flex-col items-center justify-center text-center">
              <LineChart className="w-6 h-6 text-orange-400 mb-1" />
              <p className="text-xs font-bold">Mesure continue</p>
            </div>

            <div className="bg-purple-500/20 border-2 border-purple-500/40 rounded-lg p-3 flex flex-col items-center justify-center text-center">
              <Activity className="w-6 h-6 text-purple-400 mb-1" />
              <p className="text-xs font-bold">Suivi en temps réel</p>
            </div>

            <div className="bg-cyan-500/20 border-2 border-cyan-500/40 rounded-lg p-3 flex flex-col items-center justify-center text-center">
              <Clock className="w-6 h-6 text-cyan-400 mb-1" />
              <p className="text-xs font-bold">Temps = argent</p>
            </div>
          </div>

          {/* Contact et CTA */}
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white/5 border-2 border-white/20 rounded-lg p-4 flex items-center gap-3">
              <Phone className="w-6 h-6 text-primary flex-shrink-0" />
              <PhoneLink
                phoneNumber="+33745103015"
                displayNumber="07 45 10 30 15"
                className="text-base font-bold hover:text-primary transition-colors"
              />
            </div>

            <div className="bg-white/5 border-2 border-white/20 rounded-lg p-4 flex items-center gap-3">
              <Mail className="w-6 h-6 text-primary flex-shrink-0" />
              <a href="mailto:contact@aegens.com" className="text-base font-bold hover:text-primary transition-colors">
                contact@aegens.com
              </a>
            </div>

            <div className="bg-white/5 border-2 border-white/20 rounded-lg p-4 flex items-center gap-3">
              <Globe className="w-6 h-6 text-primary flex-shrink-0" />
              <a
                href="https://www.aegens.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-bold hover:text-primary transition-colors"
              >
                www.aegens.com
              </a>
            </div>
          </div>

          {/* CTA Final */}
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/40 rounded-lg px-6 py-4 text-center">
            <p className="text-sm font-bold">
              Diagnostic stratégique offert · Plan d'action ROI sous 48h · Confidentiel
            </p>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">Format carte de visite (85 × 55 mm)</p>
      </div>
    </div>
  )
}
