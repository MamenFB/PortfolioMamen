
"use client"
import React, { useState, useEffect } from "react";
import ContactForm from "@/components/ContactForm";

const ClientOnlyContactForm = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Este efecto se ejecutará solo en el cliente.
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? <ContactForm /> : <div>Cargando formulario...</div>}
    </>
  );
};

export default ClientOnlyContactForm;
