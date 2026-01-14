import React, { useState } from "react";
import ReactDOM from "react-dom";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";

export default function ProjectCard({ title, description, src,  technologies, link }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const hasImage = src && src.trim() !== "";

    const openModal = () => {
        if (hasImage) {
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return(
        <>
            <div className="bg-neutralDark p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Image or Placeholder */}
                {hasImage ? (
                    <button
                        onClick={openModal}
                        className="w-full h-72 rounded-lg mb-4 overflow-hidden cursor-pointer group relative hover:opacity-90 transition-opacity"
                        aria-label={`Ampliar imagen de ${title}`}
                    >
                        <img src={src} alt={title} className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg flex items-center justify-center">
                            <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Ampliar</span>
                        </div>
                    </button>
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

            {/* Modal - Rendered via Portal at document level */}
            {isModalOpen && ReactDOM.createPortal(
                <div 
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999] p-4 animate-fadeIn"
                    onClick={closeModal}
                >
                    <div 
                        className="relative animate-scaleIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img 
                            src={src} 
                            alt={title} 
                            className="max-w-[90vw] max-h-[90vh] w-auto h-auto rounded-lg shadow-2xl"
                        />
                        <button
                            onClick={closeModal}
                            className="absolute -top-12 right-0 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition-all focus:outline-none focus:ring-2 focus:ring-primaryEnd shadow-lg backdrop-blur-sm"
                            aria-label="Cerrar modal"
                        >
                            <FaTimes size={28} />
                        </button>
                    </div>
                </div>,
                document.body
            )}
            
            <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                
                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
                
                .animate-scaleIn {
                    animation: scaleIn 0.3s ease-out;
                }
            `}</style>
        </>
    )

}