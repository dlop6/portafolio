import React from 'react';
import CardSection from '@/components/ui/CardSection';
import TerminalBadge from '@/components/ui/TerminalBadge';
import {
  programmingSkills,
  frameworks,
  metodologias,
  basesDatos,
  idiomas
} from '@/data/skillsData';

export default function About() {
  return (
    <section className="relative bg-neutralBlack text-white py-24 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left: Terminal Badge en lugar de foto */}
        <div className="relative flex-shrink-0">
          <TerminalBadge />
          {/* Badge “Hola” opcional:
          <div className="absolute -bottom-4 -right-8 bg-primaryStart text-neutralBlack px-3 py-1 rounded-full font-mono font-semibold shadow-lg transform rotate-12">
            Hola!
          </div>
          */}
        </div>

        {/* Right: Bloques de contenido */}
        <div className="flex-1 space-y-12">
          {/* About Text */}
          <CardSection
            title="About Me"
            colorClass="bg-clip-text text-transparent bg-gradient-to-r from-primaryStart via-primaryMid to-primaryEnd font-mono"
          >
            <p className="text-lg leading-relaxed mb-3 font-mono text-neutralLight">
              Soy Diego López, un Fullstack Developer de Guatemala con 3 años construyendo
              aplicaciones web y móviles. Me apasiona materializar ideas en soluciones tangibles que
              mejoren procesos y experiencias de usuario.
            </p>
            <p className="text-lg leading-relaxed font-mono text-neutralLight">
              Actualmente estudio Ciencias de la Computación en la UVG, donde he perfeccionado mis
              conocimientos. Combino herramientas low-code como Bizagi para optimizar flujos de
              negocio, y potentes tecnologías modernas como Kotlin, React, GraphQL, Neo4J y Rust para
              construir sistemas escalables. Siempre busco el balance perfecto entre rendimiento,
              usabilidad y estética.
            </p>
          </CardSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Programming Skills */}
            <CardSection title="Programming Skills" colorClass="text-primaryStart font-mono">
              <div className="space-y-4">
                {programmingSkills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-primaryMid font-mono drop-shadow-[0_1px_0_#000]">
                        {skill.name}
                      </span>
                      <span className="text-sm text-primaryStart font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-neutralDark rounded-full h-2 overflow-hidden border border-primaryMid">
                      <div
                        className="h-2 rounded-full transition-all duration-500 group-hover:scale-x-105"
                        style={{
                          width: `${skill.level}%`,
                          background: 'linear-gradient(90deg, #ff8c00 0%, #ff5500 100%)',
                          boxShadow: '0 0 8px #ff8c00, 0 0 2px #000 inset'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardSection>

            <div className="space-y-6">
              {/* Frameworks & Tools */}
              <CardSection title="Frameworks & Tools" colorClass="text-primaryMid font-mono">
                <div className="flex flex-wrap gap-3">
                  {frameworks.map((tool) => (
                    <span
                      key={tool}
                      className="bg-neutralDark border border-primaryMid text-primaryMid px-3 py-1 rounded-full text-sm font-mono shadow-[0_0_8px_#ff8c00] hover:bg-primaryMid hover:text-neutralBlack transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </CardSection>

              {/* Metodologías */}
              <CardSection title="Metodologías" colorClass="text-primaryStart font-mono">
                <ul className="list-disc list-inside space-y-2 text-neutralLight">
                  {metodologias.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </CardSection>

              {/* Bases de Datos */}
              <CardSection title="Bases de Datos" colorClass="text-primaryMid font-mono">
                <ul className="list-disc list-inside space-y-2 text-neutralLight">
                  {basesDatos.map((db) => (
                    <li key={db}>{db}</li>
                  ))}
                </ul>
              </CardSection>

              {/* Idiomas */}
              <CardSection title="Idiomas" colorClass="text-primaryEnd font-mono">
                <ul className="list-disc list-inside space-y-2 text-neutralLight">
                  {idiomas.map((idioma) => (
                    <li key={idioma.nombre}>
                      {idioma.nombre}{' '}
                      <span className="text-neutralLight drop-shadow-[0_1px_0_#000]">
                        ({idioma.nivel})
                      </span>
                    </li>
                  ))}
                </ul>
              </CardSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
