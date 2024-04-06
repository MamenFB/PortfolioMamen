import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        {/* Aquí puede ir un logo o cualquier otro elemento que desees */}
      </div>

      <div className="flex flex-row gap-5 mb-2">
        {Socials.map((social) => {
          // Determina el tamaño basado en si el ícono es 'CV' o no
          const size = social.name === "CV" ? 30
          : 50
          ;
          
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={size} // Usa el tamaño determinado por la condición
                height={size} // Usa el tamaño determinado por la condición
                unoptimized={true}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
