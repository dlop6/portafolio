import React from 'react';

export default function Portfolio() {
  return (
    <section className="relative bg-neutralBlack text-white py-24 px-6">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-5xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primaryStart via-primaryMid to-primaryEnd font-sans relative py-2 mb-8 drop-shadow-[0_0_8px_#ff8c00]">
          PORTAFOLIO
          <span className="absolute left-0 -bottom-2 w-32 h-1 bg-primaryStart rounded-sm underline-animate"></span>
        </h2>
      </div>
    </section>
  );
}
