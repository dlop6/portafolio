import React from "react";

export default function ProjectCard({ title, description, src,  technologies, link }) {
    return(
        <div className="bg-neutralDark p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={src} alt={title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl text-primaryMid font-bold mb-2">{title}</h3>
            <p className="text-primaryStart mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech, index) => (
                    <span key={index} className="bg-primaryMid text-white px-3 py-1 rounded-full text-sm">
                        {tech}
                    </span>
                ))}
            </div>
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-primaryEnd hover:underline">
                Ver Proyecto
            </a>
        </div>
    )

}