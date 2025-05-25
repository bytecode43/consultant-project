
import HeroSlider        from '../components/home/HeroSlider';
import CEOSection        from '../components/home/CEOSection';
import ProjectHighlights from '../components/home/ProjectHighlights';
import ServicesCarousel  from '../components/home/ServicesCarousel';
import ContactForm       from '../components/home/ContactForm';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';

export default function HomePage() {
  return (
    <div className="space-y-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navbar />

      <HeroSlider />
      <CEOSection />
      <ProjectHighlights />

      <section id="services" className="bg-[#0d7bd4] text-white py-16">
        <ServicesCarousel />
      </section>

      <section id="contact" className="py-16 bg-white/80">
        <ContactForm />
      </section>
      <Footer/>
    </div>
  );
}
