import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProjectCard from '@/components/ui/ProjectCard';
import { projectsData } from '@/data/projectsData';

export default function Portfolio() {
  return (
    <section className="relative bg-neutralBlack text-white py-24 px-6">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-5xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primaryStart via-primaryMid to-primaryEnd font-sans relative py-2 mb-8">
          PORTAFOLIO
          <span className="absolute left-0 -bottom-2 w-32 h-1 bg-primaryStart rounded-sm underline-animate"></span>
        </h2>
      </div>
      
      <div className="w-full px-12">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 2.3,
            },
          }}
          navigation={{
            nextEl: '.swiper-button-next-portfolio',
            prevEl: '.swiper-button-prev-portfolio',
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          centeredSlides={false}
          className="portfolio-swiper"
        >
          {projectsData.map((project, index) => (
            <SwiperSlide key={index} className="flex justify-center pb-12">
              <div className="w-full max-w-2xl hover:scale-105 transition-transform duration-300">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  src={project.image}
                  technologies={project.technologies}
                  link={project.link}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button
          className="swiper-button-prev-portfolio absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-neutralDark bg-opacity-60 rounded-full p-2 hover:bg-opacity-90 transition disabled:opacity-50"
          aria-label="Previous project"
        >
          <span className="text-2xl text-primaryStart">&#8592;</span>
        </button>
        <button
          className="swiper-button-next-portfolio absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-neutralDark bg-opacity-60 rounded-full p-2 hover:bg-opacity-90 transition disabled:opacity-50"
          aria-label="Next project"
        >
          <span className="text-2xl text-primaryStart">&#8594;</span>
        </button>
      </div>
    </section>
  );
}
