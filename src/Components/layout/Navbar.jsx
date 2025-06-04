// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';
import useScrollSpy from '@/hooks/useScrollSpy'; // <- importa el hook

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Lista de ids que usamos en App.jsx para cada sección:
  const sectionIds = ['home', 'sobre-mi', 'habilidades', 'portafolio', 'contactame'];
  // Llamamos al hook. Offset = 70 (ajusta al alto de tu Navbar + margen que quieras).
  const activeSection = useScrollSpy(sectionIds, 70);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 transition-colors duration-300
        ${scrolled ? 'bg-neutralDark bg-opacity-90 shadow-lg' : 'bg-transparent'}
      `}
    >
      <div className="container flex items-center justify-between py-3">
        {/* Logo con degradado naranja */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-2xl font-extrabold bg-gradient-to-r from-primaryStart via-primaryMid to-primaryEnd bg-clip-text text-transparent cursor-pointer"
        >
          DiegoL.
        </Link>

        {/* Ícono hamburguesa para móvil */}
        <button
          className="lg:hidden text-white text-3xl focus:outline-none"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Menú para pantallas grandes */}
        <ul className="hidden lg:flex space-x-8">
          {sectionIds.map((item) => {
            const isActive = activeSection === item;
            return (
              <li key={item}>
                <Link
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`
                    relative cursor-pointer capitalize
                    ${isActive ? 'text-primaryStart' : 'text-white'}
                    before:absolute before:-bottom-1 before:left-0
                    before:w-0 before:h-[2px] before:bg-gradient-to-r before:from-primaryStart before:via-primaryMid before:to-primaryEnd
                    before:transition-all before:duration-300
                    hover:before:w-full
                  `}
                >
                  {item.replace('-', ' ')}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Menú móvil desplegable */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-neutralDark bg-opacity-95 shadow-lg lg:hidden">
            <ul className="flex flex-col items-center py-6 space-y-4">
              {sectionIds.map((item) => {
                const isActive = activeSection === item;
                return (
                  <li key={item}>
                    <Link
                      to={item}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={() => setMenuOpen(false)}
                      className={`
                        block text-lg font-medium capitalize
                        ${isActive ? 'text-primaryStart' : 'text-white'}
                        hover:text-primaryStart transition-colors duration-200
                      `}
                    >
                      {item.replace('-', ' ')}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
