import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">
          
        </div>
      
      </div>

      <div className="flex flex-row gap-5 mb-2">
        {Socials.map((social) => (
          // Envuelve cada imagen con un enlace
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={social.src}
              alt={social.name}
              width={50}
              height={28}
              // Importante para Image dentro de <a> sin "href"
              unoptimized={true}
            />
          </a>
          
        ))}
      </div>
    </div>
  );
};

export default Navbar;