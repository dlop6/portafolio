
import React from 'react';
import ContactameForm from './ContactameForm';

export default function Contacto() {
return (
    <section id="contactame" className="relative bg-neutralBlack text-white py-24 px-6">
        <div className="container mx-auto flex flex-col items-center">
            <h2 className="text-5xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primaryStart via-primaryMid to-primaryEnd font-sans relative py-2 mb-8 ">
                CONTACTAME
                <span className="absolute left-0 -bottom-2 w-32 h-1 bg-primaryStart rounded-sm underline-animate"></span>
            </h2>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
            {/* segmento izquierdo */}
            <div className="w-full md:w-1/2 mb-12 md:mb-0 flex flex-col gap-4">
                <h3 className='text-2xl font-bold mb-0 text-primaryMid'>Platiquemos!</h3>
                <p className="text-lg text-textGray mb-0">
                    Actualmente estoy abierto a nuevas oportunidades laborales y  desarrollo de proyectos interesantes. Si tienes una idea, un proyecto o simplemente quieres charlar, no dudes en contactarme.
                </p>
                <li>
                    <span className="text-primaryMid font-bold">Correo: </span>
                    <a href="mailto:dlopreinoso@gmail.com" className="text-textGray hover:text-primaryMid transition-colors" target="_blank" rel="noopener noreferrer">
                        dlopreinoso@gmail.com
                    </a>
                </li>
                <li>
                    <span className="text-primaryMid font-bold">GitHub: </span>
                    <a href="https://github.com/dlop6/" className="text-textGray hover:text-primaryMid transition-colors" target="_blank" rel="noopener noreferrer">
                        https://github.com/dlop6/
                    </a>
                </li>
            </div>
            {/* segmento derecha, formulario */}
            <div className="w-full md:w-1/2">
                <ContactameForm />
            </div>
        </div>
    </section>
);
}
