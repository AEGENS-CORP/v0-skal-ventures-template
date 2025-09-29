"use client"

import type React from "react"

import { useState } from "react"
import { useParticles } from "./particle-context"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

export function Contact() {
  const { setHovering } = useParticles()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24 bg-muted/30 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sentient font-extralight mb-4">Parlons de votre projet</h2>
            <p className="text-lg text-muted-foreground">
              Prêt à transformer votre entreprise avec l'IA ? Commençons par une conversation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-sentient mb-6">Contactez-nous</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-muted-foreground">contact@aiagency.com</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Téléphone</h4>
                  <p className="text-muted-foreground">+33 1 23 45 67 89</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Adresse</h4>
                  <p className="text-muted-foreground">
                    123 Avenue de l'Innovation
                    <br />
                    75001 Paris, France
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input name="name" placeholder="Nom complet" value={formData.name} onChange={handleChange} required />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <Input name="company" placeholder="Entreprise" value={formData.company} onChange={handleChange} />

              <Textarea
                name="message"
                placeholder="Décrivez votre projet..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />

              <Button
                type="submit"
                size="lg"
                className="w-full"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
              >
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
