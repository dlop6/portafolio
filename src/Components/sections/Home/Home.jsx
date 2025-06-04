import React from 'react';
import { Link } from 'react-scroll';

export default function Home() {
  return (
    <section className="relative bg-neutralBlack text-white min-h-[calc(100vh-64px)] flex flex-col items-center justify-center overflow-hidden px-6 font-mono">
      {/* Scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.05), rgba(0,0,0,0.05) 1px, transparent 1px, transparent 2px)',
        }}
      />

      {/* para que se mire retro */}
      <div className="absolute -top-16 -left-20 w-64 h-64 bg-primaryMid opacity-25 rounded-sm blur-sm -z-10 animate-blob-pulse" />
      <div className="absolute -bottom-24 -right-32 w-96 h-96 bg-primaryStart opacity-20 rounded-sm blur-sm -z-10 animate-blob-pulse" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        {/* Logo Container (pixel frame) */}
        <div className="relative mb-8">
          <div className="bg-neutralDark border-4 border-primaryStart p-4 flex items-center justify-center shadow-[0_0_10px_#ff8c00] transform rotate-3 hover:rotate-0 transition-transform duration-700">
            <img src="src/assets/react.svg" alt="React Logo" className="w-16 h-16" />
          </div>
          
        </div>

        {/* Title */}
        <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primaryStart via-primaryMid to-primaryEnd relative py-2">
          Soy Diego López
          <span className="absolute left-0 -bottom-2 w-24 h-1 bg-primaryStart rounded-sm underline-animate"></span>
        </h1>
        <p className="text-lg text-textGray mb-6 drop-shadow-[0_0_3px_#ff8c00]">
          Estudiante de Ciencias de la Computación en la UVG, apasionado por crear soluciones
          al estilo retro que impulsen la innovación.
        </p>

        {/* Description Box */}
        <div className="bg-neutralDark bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-[0_0_15px_#ff8c00] mb-8 border-2 border-primaryMid">
          <p className="leading-relaxed text-accentAmber">
            Especializado en modelado de procesos con Bizagi y desarrollo fullstack
            usando Kotlin, React, GraphQL y Rust. Construyo sistemas escalables con
            estética de display antiguo.
          </p>
        </div>

        {/* Buttons (retro terminal style) */}
        <div className="flex flex-wrap justify-center gap-5">
          <Link
            to="portafolio"
            smooth={true}
            duration={500}
            className="inline-block bg-neutralDark border-2 border-primaryStart text-primaryStart px-6 py-2 rounded shadow-[0_0_8px_#ff8c00] hover:bg-primaryStart hover:text-neutralBlack transition-colors"
          >
            VER PROYECTOS
          </Link>
          <Link
            to="contactame"
            smooth={true}
            duration={500}
            className="inline-block bg-primaryStart text-neutralBlack px-6 py-2 rounded shadow-[0_0_8px_#ff8c00] hover:bg-primaryMid transition-colors"
          >
            MI CV
          </Link>
        </div>
      </div>

      {/* Bottom Divider (pixel style) */}
      <div className="absolute inset-x-0 bottom-0">
        <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-20 fill-neutralBlack">
          <polygon points="0,20 100,0 100,20" />
        </svg>
      </div>
    </section>
  );
}
