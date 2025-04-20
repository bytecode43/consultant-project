// src/pages/HomePage.tsx
import React from 'react'
import HeroSlider from '../components/home/HeroSlider'
import CEOSection from '../components/home/CEOSection'
import StatsGrid from '../components/home/StatsGrid'
import ContactForm from '../components/home/ContactForm'

export default function HomePage() {
  return (
    <div className="
      bg-gradient-to-br 
      from-blue-50 via-white to-indigo-50 
      min-h-screen
    ">
      {/* Hero carousel */}
      <section className="pt-4">
        <HeroSlider />
      </section>

      {/* CEO’s message */}
      <section className="py-16">
        <CEOSection />
      </section>

      {/* Key stats */}
      <section className="py-16 bg-white/80">
        <StatsGrid />
      </section>

      {/* Contact form */}
      <section className="py-16 bg-white/80">
        <ContactForm />
      </section>
    </div>
  )
}
