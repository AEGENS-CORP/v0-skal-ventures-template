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
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Leva } from "leva"
import { Insights } from "@/components/insights"
import { Methodology } from "@/components/methodology"
import { Resources } from "@/components/resources"
import { Innovation } from "@/components/innovation"
import { Partnerships } from "@/components/partnerships"
import { Expertise } from "@/components/expertise"
import { News } from "@/components/news"
import { HomeLinks } from "@/components/home-links"

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
      <About />
      <Testimonials />
      <Innovation />
      <Partnerships />
      <Expertise />
      <Insights />
      <Methodology />
      <Resources />
      <HomeLinks />
      <News />
      <Contact />
      <Footer />
      <Leva hidden />
    </>
  )
}
