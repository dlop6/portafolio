// src/components/sections/Contacto/ContactameForm.jsx
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'; // <- IMPORT CORREGIDO: debe incluir la arroba "@"

export default function ContactameForm() {
  const formRef = useRef();
  const [statusMessage, setStatusMessage] = useState('');
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();               // <- agregar los paréntesis
    setSending(true);                 // <- activar estado "sending"
    setStatusMessage('Enviando...');

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
      .then(
        (result) => {
          console.log('Éxito:', result.text);
          setStatusMessage('¡Mensaje enviado con éxito!');
          setSending(false);
          formRef.current.reset();
        },
        (error) => {
          console.error('Error:', error.text);
          setStatusMessage('Error al enviar el mensaje. Inténtalo de nuevo más tarde.');
          setSending(false);
        }
      );
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto p-6 bg-neutralDark rounded-lg shadow-md space-y-6"
    >
      <div>
        <label htmlFor="from_name" className="block text-sm font-medium text-textGray mb-1">
          Nombre
        </label>
        <input
          type="text"
          id="from_name"
          name="from_name"
          required
          className="w-full bg-neutralLight text-neutralBlack px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primaryMid"
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label htmlFor="reply_to" className="block text-sm font-medium text-textGray mb-1">
          Correo Electrónico
        </label>
        <input
          type="email"
          id="reply_to"
          name="reply_to"
          required
          className="w-full bg-neutralLight text-neutralBlack px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primaryMid"
          placeholder="tu@correo.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-textGray mb-1">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows="5"
          className="w-full bg-neutralLight text-neutralBlack px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primaryMid"
          placeholder="Escribe tu mensaje aquí"
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className={`
          w-full flex justify-center items-center
          ${sending ? 'bg-primaryMid/50 cursor-not-allowed' : 'bg-primaryStart hover:bg-primaryMid cursor-pointer'}
          text-neutralBlack font-semibold px-6 py-2 rounded transition-colors
          shadow-[0_0_8px_#ff8c00]
        `}
      >
        {sending ? 'Enviando...' : 'Enviar Mensaje'}
      </button>

      {statusMessage && (
        <p className="mt-4 text-center text-sm text-textGray">{statusMessage}</p>
      )}
    </form>
  );
}
