"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Features } from "@/components/features"
import { Stats } from "@/components/stats"
import { Process } from "@/components/process"
import { Portfolio } from "@/components/portfolio"
import { Technologies } from "@/components/technologies"
import { Team } from "@/components/team"
import { Pricing } from "@/components/pricing"
import { Timeline } from "@/components/timeline"
import { FAQ } from "@/components/faq"
import { Newsletter } from "@/components/newsletter"
import { Awards } from "@/components/awards"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Leva } from "leva"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Features />
      <Stats />
      <Process />
      <Portfolio />
      <Technologies />
      <Team />
      <Pricing />
      <Timeline />
      <Awards />
      <FAQ />
      <Newsletter />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <Leva hidden />
    </>
  )
}
