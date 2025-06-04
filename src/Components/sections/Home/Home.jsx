import React from 'react';
import { Link } from 'react-scroll';

export default function Home() {
  return (
    <section className="relative bg-black text-white min-h-[calc(100vh-64px)] flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Decorative Gradient Blobs */}
      <div className="absolute -top-16 -left-20 w-64 h-64 bg-gradient-to-tr from-pink-500 via-purple-600 to-blue-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-24 -right-32 w-96 h-96 bg-gradient-to-br from-blue-400 via-purple-600 to-pink-500 rounded-full opacity-20 animate-pulse"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        {/* Stylized Logo Container */}
        <div className="relative mb-8">
          <div className="bg-white rounded-full p-6 flex items-center justify-center shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-700">
            <img
              src="src/assets/react.svg"
              alt="React Logo"
              className="w-16 h-16"
            />
          </div>
          
        </div>

        {/* Main Title with Gradient and Underline */}
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent relative">
          Soy Diego López
          <span className="absolute left-0 -bottom-2 w-24 h-1 bg-accentPink rounded-full underline-animate"></span>
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Estudiante de Ciencias de la Computación en la UVG, apasionado por crear
          soluciones que impulsen la innovación y mejoren vidas.
        </p>

        {/* Description Box */}
        <div className="bg-gray-800 bg-opacity-60 backdrop-blur-sm p-6 rounded-2xl shadow-lg mb-8">
          <p className="leading-relaxed">
            Me especializo en modelado de procesos de negocio con Bizagi y en
            desarrollo fullstack usando Kotlin, React, GraphQL, Neo4J y Rust. Mi
            objetivo es construir sistemas escalables, eficientes y con una experiencia
            de usuario impecable.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-5">
          <Link
            to="portafolio"
            smooth={true}
            duration={500}
            className="inline-block bg-white text-black px-6 py-2 rounded-full font-semibold hover:shadow-xl transition-shadow"
          >
            Ver Proyectos
          </Link>
          <Link
            to="contactame"
            smooth={true}
            duration={500}
            className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-colors"
          >
            Mi CV
          </Link>
        </div>
      </div>

      {/* Decorative Angled Divider at Bottom */}
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
          className="w-full h-20 fill-black"
        >
          <polygon points="0,20 100,0 100,20" />
        </svg>
      </div>
    </section>
  );
}
