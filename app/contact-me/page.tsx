import ContactForm from "@/components/ContactForm";
import React from "react";

const Page = () => {
  return (
    // Div externo con una imagen de fondo a pantalla completa, utilizando clases de Tailwind CSS para el diseño y estilo.
    <div
      style={{ backgroundImage: "url(bg-3.jpg)" }}
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
    >
        {/* // Div interno que actúa como un contenedor de contenido con su propia imagen de fondo. */}
      <div
        style={{ backgroundImage: "url(atombg-comp.webp" }}
        className="h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white"
      >
        <div className="absolute left-20 bottom-16 w-[70%] md:w-[30%]">
          <ContactForm /> 
          {/* // El componente ContactForm se inserta aquí. */}
        </div>
      </div>
    </div>
  );
};

export default Page;
