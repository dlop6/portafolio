import React from 'react';
import CardSection from '@/components/ui/CardSection';
import TerminalBadge from '@/components/ui/TerminalBadge';
import { FaCogs, FaDatabase, FaGlobeAmericas, FaUser, FaCode, FaToolbox } from 'react-icons/fa';
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
            title={<span className="flex items-center gap-2"><FaUser className="text-primaryStart" /> About Me</span>}
            colorClass="bg-clip-text text-transparent bg-gradient-to-r from-primaryStart via-primaryMid to-primaryEnd font-mono"
          >
            <p className="text-lg leading-relaxed mb-3 font-mono text-gray-300">
Soy Diego López, desarrollador con experiencia en proyectos personales, universitarios y profesionales. He construido soluciones full-stack de principio a fin (incluyendo seguridad, pruebas y despliegue) y también he colaborado en equipos, donde valoro la comunicación clara, el review y entregar iterando.
            </p>
            <p className="text-lg leading-relaxed font-mono text-gray-300">


Me gusta combinar ingeniería práctica con buen diseño de UI. En este portafolio vas a ver productos reales, prototipos y experimentos, algunos “retro”, otros más modernos, pero todos hechos con la intención de aprender y entregar algo funcional.
            </p>
          </CardSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Programming Skills */}
            <CardSection title={<span className="flex items-center gap-2"><FaCode className="text-primaryStart" /> Programming Skills</span>} colorClass="text-primaryStart font-mono">
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
              <CardSection title={<span className="flex items-center gap-2"><FaToolbox className="text-primaryMid" /> Frameworks & Tools</span>} colorClass="text-primaryMid font-mono">
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
              <CardSection 
                title={<span className="flex items-center gap-2"><FaCogs className="text-primaryStart" /> Metodologías</span>} 
                colorClass="text-primaryStart font-mono"
              >
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {metodologias.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </CardSection>

              {/* Bases de Datos */}
              <CardSection 
                title={<span className="flex items-center gap-2"><FaDatabase className="text-primaryMid" /> Bases de Datos</span>} 
                colorClass="text-primaryMid font-mono"
              >
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {basesDatos.map((db) => (
                    <li key={db}>{db}</li>
                  ))}
                </ul>
              </CardSection>

              {/* Idiomas */}
              <CardSection 
                title={<span className="flex items-center gap-2"><FaGlobeAmericas className="text-primaryEnd" /> Idiomas</span>} 
                colorClass="text-primaryEnd font-mono"
              >
                <ul className="list-disc list-inside space-y-2 text-gray-300">
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
