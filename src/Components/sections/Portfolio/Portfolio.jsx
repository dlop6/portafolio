import React from 'react';
import { Link } from 'react-scroll';
import ProjectCard from '@/Components/ui/ProjectCard';
import { projectsData } from '@/data/projectsData';

export default function Portfolio() {
  const scrollContainerRef = React.useRef(null);

  const scrollByAmount = (amount) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-neutralBlack text-white py-24 px-6">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-5xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primaryStart via-primaryMid to-primaryEnd font-sans relative py-2 mb-8">
          PORTAFOLIO
          <span className="absolute left-0 -bottom-2 w-32 h-1 bg-primaryStart rounded-sm underline-animate"></span>
        </h2>
      </div>
      <div className="relative container mx-auto">
        {/* Left Arrow */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-neutralDark bg-opacity-60 rounded-full p-2 hover:bg-opacity-90 transition"
          onClick={() => scrollByAmount(-350)}
          aria-label="Scroll left"
          type="button"
        >
          <span className="text-2xl text-primaryStart">&#8592;</span>
        </button>
        {/* Scrollable container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-8 scrollbar-thin scrollbar-thumb-primaryStart scrollbar-track-neutralBlack py-4 px-8"
          style={{ scrollBehavior: 'smooth' }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="min-w-[320px] max-w-xs flex-shrink-0 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                src={project.image}
                technologies={project.technologies}
                link={project.link}
              />
            </div>
          ))}
        </div>
        {/* Right Arrow */}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-neutralDark bg-opacity-60 rounded-full p-2 hover:bg-opacity-90 transition"
          onClick={() => scrollByAmount(350)}
          aria-label="Scroll right"
          type="button"
        >
          <span className="text-2xl text-primaryStart">&#8594;</span>
        </button>
      </div>
    </section>
  );
}
