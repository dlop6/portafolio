import React from 'react';

export default function About() {
  const skills = [
    { name: "JavaScript", level: 85, gradient: "linear-gradient(90deg, #facc15 0%, #f59e42 100%)" },
    { name: "Node.js", level: 70, gradient: "linear-gradient(90deg, #34d399 0%, #059669 100%)" },
    { name: "CSS", level: 60, gradient: "linear-gradient(90deg, #f472b6 0%, #a21caf 100%)" },
    { name: "Python", level: 90, gradient: "linear-gradient(90deg, #a78bfa 0%, #7c3aed 100%)" },
    { name: "Java", level: 90, gradient: "linear-gradient(90deg, #f87171 0%, #b91c1c 100%)" },
    { name: "C#", level: 60, gradient: "linear-gradient(90deg, #818cf8 0%, #312e81 100%)" },
    { name: "Kotlin", level: 55, gradient: "linear-gradient(90deg, #fdba74 0%, #ea580c 100%)" },
    { name: "PostgreSQL", level: 75, gradient: "linear-gradient(90deg, #5eead4 0%, #0f766e 100%)" },
    { name: "TypeScript", level: 55, gradient: "linear-gradient(90deg, #60a5fa 0%, #2563eb 100%)" },
  ];

  const frameworks = [
    "Jetpack Compose",
    "React",
    "Vue",
    "GraphQL",
    "Docker",
    "Firebase",
    "Neo4J",
    "PostgreSQL",
    "Bizagi Studio",
  ];

  const metodologias = [
    "BPMN",
    "APIs REST/GraphQL",
    "Programación concurrente",
    "Diseño UX/UI",
  ];

  const basesDatos = ["PostgreSQL", "Neo4J", "Firebase"];

  const idiomas = [
    { nombre: "Español", nivel: "nativo" },
    { nombre: "Inglés", nivel: "avanzado" },
  ];

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
         
        </div>

        {/* Right: Content Blocks */}
        <div className="flex-1 space-y-12">
          {/* About Text */}
          <div className="bg-gray-800 bg-opacity-70 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
            <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg leading-relaxed mb-3">
              Soy Diego López, un Fullstack Developer de Guatemala con  3 años construyendo
              aplicaciones web y móviles. Me apasiona materializar ideas en soluciones tangibles que
              mejoren procesos y experiencias de usuario.
            </p>
            <p className="text-lg leading-relaxed">
              Combino herramientas low-code como Bizagi para optimizar flujos de negocio, y potentes
              tecnologías modernas como Kotlin, React, GraphQL, Neo4J y Rust para construir sistemas
              escalables. Siempre busco el balance perfecto entre rendimiento, usabilidad y estética.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 bg-opacity-70 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Programming Skills</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
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
            </div>

            <div className="space-y-6">
              {/* Frameworks & Tools */}
              <div className="bg-gray-800 bg-opacity-70 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4 text-pink-400">Frameworks & Tools</h3>
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
              </div>

              {/* Metodologías */}
              <div className="bg-gray-800 bg-opacity-70 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Metodologías</h3>
                <ul className="list-disc list-inside space-y-2 text-base">
                  {metodologias.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </div>

              {/* Bases de Datos */}
              <div className="bg-gray-800 bg-opacity-70 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4 text-green-400">Bases de Datos</h3>
                <ul className="list-disc list-inside space-y-2 text-base">
                  {basesDatos.map((db) => (
                    <li key={db}>{db}</li>
                  ))}
                </ul>
              </div>

              {/* Idiomas */}
              <div className="bg-gray-800 bg-opacity-70 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Idiomas</h3>
                <ul className="list-disc list-inside space-y-2 text-base">
                  {idiomas.map((idioma) => (
                    <li key={idioma.nombre}>
                      {idioma.nombre} <span className="text-gray-400">({idioma.nivel})</span>
                    </li>
                  ))}
                </ul>
              </div>
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
