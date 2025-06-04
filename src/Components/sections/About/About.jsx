import React from 'react';
import CardSection from '@/Components/ui/CardSection';
import {
  programmingSkills,
  frameworks,
  metodologias,
  basesDatos,
  idiomas
} from '@/data/skillsData';

export default function About() {
  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-24 px-6">
      {/* Decorative angle at top */}
      <div className="absolute inset-x-0 -top-16">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="w-full h-16 fill-black"
        >
          <polygon points="0,100 100,0 100,100" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left: Profile Card */}
        <div className="relative flex-shrink-0">
          <div className="transform -rotate-6 hover:rotate-0 transition-transform duration-500">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Diego López"
              className="w-52 h-64 md:w-64 md:h-80 object-cover rounded-3xl border-4 border-pink-500 shadow-2xl"
            />
          </div>
          {/* “Hola” Badge */}
          <div className="absolute -bottom-4 -right-8 bg-pink-500 text-black px-3 py-1 rounded-full font-semibold shadow-lg transform rotate-12">
            Hola!
          </div>
        </div>

        {/* Right: Content Blocks */}
        <div className="flex-1 space-y-12">
          {/* About Text */}
          <CardSection
            title="About Me"
            colorClass="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
          >
            <p className="text-lg leading-relaxed mb-3">
              Soy Diego López, un Fullstack Developer de Guatemala con 3 años construyendo
              aplicaciones web y móviles. Me apasiona materializar ideas en soluciones tangibles que
              mejoren procesos y experiencias de usuario.
            </p>
            <p className="text-lg leading-relaxed">
              Combino herramientas low-code como Bizagi para optimizar flujos de negocio, y potentes
              tecnologías modernas como Kotlin, React, GraphQL, Neo4J y Rust para construir sistemas
              escalables. Siempre busco el balance perfecto entre rendimiento, usabilidad y estética.
            </p>
          </CardSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Programming Skills */}
            <CardSection title="Programming Skills" colorClass="text-yellow-400">
              <div className="space-y-4">
                {programmingSkills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-2 rounded-full transition-all duration-500 group-hover:scale-x-105"
                        style={{
                          width: `${skill.level}%`,
                          background: skill.gradient,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardSection>

            <div className="space-y-6">
              {/* Frameworks & Tools */}
              <CardSection title="Frameworks & Tools" colorClass="text-pink-400">
                <div className="flex flex-wrap gap-3">
                  {frameworks.map((tool) => (
                    <span
                      key={tool}
                      className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow hover:scale-105 transition-transform"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </CardSection>

              {/* Metodologías */}
              <CardSection title="Metodologías" colorClass="text-blue-400">
                <ul className="list-disc list-inside space-y-2 text-base">
                  {metodologias.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </CardSection>

              {/* Bases de Datos */}
              <CardSection title="Bases de Datos" colorClass="text-green-400">
                <ul className="list-disc list-inside space-y-2 text-base">
                  {basesDatos.map((db) => (
                    <li key={db}>{db}</li>
                  ))}
                </ul>
              </CardSection>

              {/* Idiomas */}
              <CardSection title="Idiomas" colorClass="text-yellow-400">
                <ul className="list-disc list-inside space-y-2 text-base">
                  {idiomas.map((idioma) => (
                    <li key={idioma.nombre}>
                      {idioma.nombre} <span className="text-gray-400">({idioma.nivel})</span>
                    </li>
                  ))}
                </ul>
              </CardSection>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative angle at bottom */}
      <div className="absolute inset-x-0 -bottom-16 rotate-180">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="w-full h-16 fill-black"
        >
          <polygon points="0,100 100,0 100,100" />
        </svg>
      </div>
    </section>
  );
}
