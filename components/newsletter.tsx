"use client"

import type React from "react"

import { useState } from "react"
import { useParticleContext } from "./particle-context"

export const Newsletter = () => {
  const { addParticles } = useParticleContext()
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      addParticles(50)
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <section className="relative py-32 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="hover-card p-16 group">
          <div className="mb-12">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Restez à la Pointe
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Recevez nos insights exclusifs sur les dernières innovations technologiques, nos études de cas et les
              tendances qui façonnent l'avenir du digital
            </p>
          </div>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex gap-4 mb-8">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300 font-bold"
                  required
                  onFocus={() => addParticles(10)}
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
                  onMouseEnter={() => addParticles(15)}
                >
                  S'abonner
                </button>
              </div>

              <div className="flex items-center justify-center gap-8 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="font-bold">Contenu exclusif</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="font-bold">Pas de spam</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="font-bold">Désabonnement facile</span>
                </div>
              </div>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-2 text-green-400">Merci pour votre inscription !</h3>
              <p className="text-white/70 font-bold">Vous recevrez bientôt notre premier insight exclusif.</p>
            </div>
          )}

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white/90 mb-2">2.5K+</div>
              <div className="text-white/60 font-bold">Abonnés actifs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white/90 mb-2">95%</div>
              <div className="text-white/60 font-bold">Taux d'ouverture</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white/90 mb-2">Hebdo</div>
              <div className="text-white/60 font-bold">Fréquence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
