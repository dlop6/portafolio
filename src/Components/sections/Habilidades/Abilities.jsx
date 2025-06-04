import React from 'react';
import { abilitiesData } from '@/data/abilitiesData';
import CardSection from '@/Components/ui/CardSection';

export default function Abilities() {
  return (
    <section className="relative bg-neutralBlack text-primaryMid py-24 px-6 overflow-hidden">
      {/* Decorative background shapes estilo 90s */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primaryEnd opacity-20 rounded-full blur-3xl -z-10 animate-blob-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primaryMid opacity-15 rounded-full blur-2xl -z-10 animate-blob-pulse" />

      {/* Título de sección destacado */}
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primaryStart via-primaryMid to-primaryEnd drop-shadow-lg mb-2">
          Habilidades
        </h2>
        <p className="text-neutralLight text-lg text-center max-w-2xl">
          A nivel técnico y soft skills, encontrarás lo siguiente:
        </p>
      </div>

      <CardSection title="" colorClass="text-primaryMid">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {abilitiesData.map(({ abilitie, description }) => (
            <div
              key={abilitie}
              className="bg-neutralDark rounded-2xl shadow-2xl p-8 flex flex-col items-start border border-primaryMid/40 hover:scale-105 transition-transform duration-300 group"
            >
              <div className="flex items-center mb-4">
                <span className="inline-block w-3 h-3 rounded-full bg-primaryStart mr-3 group-hover:scale-125 transition-transform" />
                <h3 className="text-2xl font-bold text-primaryMid group-hover:text-primaryStart transition-colors">
                  {abilitie}
                </h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed text-bg-primaryStart">
                {description}
              </p>
            </div>
          ))}
        </div>
      </CardSection>
    </section>
  );
}
