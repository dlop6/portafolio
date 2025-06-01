import './index.css';
import Navbar from "@components/layout/Navbar.jsx";
import Footer from "@components/layout/Footer.jsx";

// Importar secciones (crea estos componentes después)
import HomeSection from '@components/sections/Home/Home.jsx';
import AboutSection from '@components/sections/About/About.jsx';
import SkillsSection from '@components/sections/Habilidades/Abilities.jsx';
import PortfolioSection from '@components/sections/Portfolio/Portfolio.jsx';
import ContactSection from '@components/sections/Connect/Connect.jsx';

function App() {
  return (
    <div className="font-sans bg-black text-gray-100">
      <Navbar />
      
      <section id="home" className="min-h-screen bg-black">
        <HomeSection />
      </section>
      
      <section id="sobre-mi" className="min-h-screen py-20 bg-black">
        <AboutSection />
      </section>
      
      <section id="habilidades" className="min-h-screen py-20 bg-black">
        <SkillsSection />
      </section>
      
      <section id="portafolio" className="min-h-screen py-20 bg-black">
        <PortfolioSection />
      </section>
      
      <section id="contactame" className="min-h-screen py-20 bg-black">
        <ContactSection />
      </section>
      
      <section id="footer" className="py-10 bg-black text-white">
        <Footer />
      </section>
    </div>
  )
}

export default App;