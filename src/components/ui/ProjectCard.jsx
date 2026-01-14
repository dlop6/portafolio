import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ title, description, src,  technologies, link }) {
    const hasImage = src && src.trim() !== "";

    return(
        <div className="bg-neutralDark p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* Image or Placeholder */}
            {hasImage ? (
                <img src={src} alt={title} className="w-full h-72 object-cover rounded-lg mb-4" />
            ) : (
                <div className="w-full h-72 rounded-lg mb-4 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 flex flex-col items-center justify-center border border-primaryMid/30">
                    <span className="text-4xl mb-2 opacity-60">📦</span>
                    <span className="text-sm text-gray-400 font-mono">Próximamente</span>
                </div>
            )}
            
            <h3 className="text-xl text-primaryMid font-bold mb-3">{title}</h3>
            <p className="text-base text-primaryStart mb-4 leading-loose">{description}</p>
            <div className="flex flex-wrap gap-3 mb-4">
                {technologies.map((tech, index) => (
                    <span key={index} className="bg-primaryMid text-white px-3 py-1 rounded-full text-sm">
                        {tech}
                    </span>
                ))}
            </div>
            <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-primaryEnd text-neutralBlack px-4 py-2 rounded-lg font-bold hover:brightness-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryEnd"
            >
                Ver Proyecto <FaExternalLinkAlt size={14} />
            </a>
        </div>
    )

}