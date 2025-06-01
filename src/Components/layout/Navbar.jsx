import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi'; 

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['home', 'sobre-mi', 'habilidades', 'portafolio', 'contactame'];

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 transition-colors duration-300
        ${scrolled ? 'bg-black bg-opacity-90 shadow-lg' : 'bg-transparent'}
      `}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo estilizado */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer"
        >
          DiegoL.
        </Link>

        {/* Ícono de hamburguesa para móvil */}
        <button
          className="lg:hidden text-white text-3xl focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Menú para pantallas grandes */}
        <ul className="hidden lg:flex space-x-10">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="
                  relative cursor-pointer text-white font-medium capitalize
                  before:absolute before:-bottom-1 before:left-0
                  before:w-0 before:h-[2px] before:bg-gradient-to-r before:from-blue-400 before:via-purple-500 before:to-pink-500
                  before:transition-all before:duration-300
                  hover:before:w-full
                "
                activeClass="text-pink-400"
              >
                {item.replace('-', ' ')}
              </Link>
            </li>
          ))}
        </ul>

        {/* Menú móvil desplegable */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-black bg-opacity-95 shadow-lg lg:hidden">
            <ul className="flex flex-col items-center py-6 space-y-4">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setMenuOpen(false)}
                    className="
                      block text-white text-lg font-medium capitalize
                      hover:text-pink-400 transition-colors duration-200
                    "
                  >
                    {item.replace('-', ' ')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
