// No changes needed, 'use client' is not valid in this file type
"use client"

import React, { useState, useEffect } from "react";
import emailjs from 'emailjs-com'; 

const ContactForm = () => {
  // Estado para manejar los inputs
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Manejar cambios en los inputs
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Enviar el formulario
  const sendMail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evitar recarga de la página
    emailjs
      .send("service_s4ju1yv", "template_qoy3u04", formValues)
      .then(
        (result) => {
          alert("Mensaje enviado con éxito!");
          console.log(result.text);
        },
        (error) => {
          alert("Error al enviar mensaje");
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    emailjs.init("bD0Wc4OdHZ6YPa0TH"); // Tu clave pública aquí
  }, []);

  return (
    <form onSubmit={sendMail}>
      <h2 className="text-2xl font-bold mb-5 text-white">¿Contactamos?</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Nombre"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          className="w-full px-3 py-2 text-sm text-gray-800 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          className="w-full px-3 py-2 text-sm text-gray-800 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Tu mensaje"
          name="message"
          value={formValues.message}
          onChange={handleChange}
          className="w-full px-3 py-2 text-sm text-gray-800 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <button type="submit" className="px-6 mb-10 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-purple-800">
       Enviar
      </button>
    </form>
  );
};

export default ContactForm;
