import './index.css';
import Navbar from "@components/layout/Navbar.jsx";
import Footer from "@components/layout/Footer.jsx";
import { Suspense, lazy } from 'react';

// Lazy load sections
const HomeSection = lazy(() => import('@components/sections/Home/Home.jsx'));
const AboutSection = lazy(() => import('@components/sections/About/About.jsx'));
const SkillsSection = lazy(() => import('@components/sections/Habilidades/Abilities.jsx'));
const PortfolioSection = lazy(() => import('@components/sections/Portfolio/Portfolio.jsx'));
const ContactSection = lazy(() => import('@components/sections/Contacto/Contacto.jsx'));

function App() {
  return (
    <div className="font-sans bg-black text-gray-100">
      <Navbar />
      <Suspense fallback={<div className="text-center py-10">Cargando...</div>}>
        <section id="home" className="min-h-screen bg-black">
          <HomeSection />
        </section>
        <section id="sobre-mi" className="min-h-screen py-10 bg-black">
          <AboutSection />
        </section>
        <section id="habilidades" className="min-h-screen py-10 bg-black">
          <SkillsSection />
        </section>
        <section id="portafolio" className="min-h-screen py-10 bg-black">
          <PortfolioSection />
        </section>
        <section id="contactame" className="min-h-screen py-10 bg-black">
          <ContactSection />
        </section>
      </Suspense>
      <section id="footer" className="py-10 bg-black text-white">
        <Footer />
      </section>
    </div>
  )
}

export default App;
