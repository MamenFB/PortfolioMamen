

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <audio src="/audio.mpeg" autoPlay loop>
       
      </audio>
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            Bienvenidxs a mi Portfolio
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
               Soy Mamen
            </span>
          </h1>
          
          <div className="inline-block">
          <div className="my-8">
         
        </div>
          </div>
          
          <p className="text-gray-200 hidden md:block">
            <div>
              <section>
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">Mi pasión por la tecnología.</h2>
                <p>Me impulsa a estar constantemente actualizada con las últimas tendencias e innovaciones, reflejando mi compromiso con el aprendizaje continuo y la excelencia profesional.</p>
              </section>

              <section>
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">Un estilo de vida activo y saludable</h2>
                <p>Además de mi interés en la tecnología, mantengo un estilo de vida activo y saludable a través de mi afición por los deportes de raqueta, la natación y el ciclismo. Estas actividades no solo me proporcionan un equilibrio físico, sino que también fomentan una mentalidad de perseverancia y auto-mejora que aplico en todos los aspectos de mi vida.</p>
              </section>

              <section>
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">La importancia de la familia</h2>
                <p>Uno de mis valores fundamentales es la importancia de la familia. Dedicar tiempo de calidad con mis seres queridos es una prioridad, y disfruto creando momentos memorables juntos. Este compromiso con mis relaciones personales me ha enseñado la importancia de la comunicación, la empatía y el apoyo mutuo, habilidades que considero esenciales tanto en el ámbito personal como profesional.</p>
              </section>

              <section>
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">Mi objetivo profesional y personal</h2>
                <p>Mi objetivo es integrar estas pasiones y valores en mi carrera, buscando oportunidades que me permitan innovar, colaborar y contribuir de manera significativa. Estoy convencida de que el equilibrio entre la vida profesional y personal es clave para el éxito y la satisfacción, y me esfuerzo por vivir de acuerdo a este principio.</p>
              </section>
            </div>
          </p>

                      
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-purple-800 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Skills 
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-trasparent  hover:bg-purple-800 px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Mis proyectos
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-trasparent  hover:bg-purple-800 border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Contactamos?
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          skills
        </Link>

        <Link
          href="/my-projects"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Mis proyectos
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Contactamos?
      
        </Link>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />

        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
       <Image
        src="/mamen.png"
        alt="Mamen"
        height={300} // Ajusta según tus necesidades
        width={300} // Ajusta según tus necesidades
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[15] rounded-lg border-4 border-purple-500"
      />
    </main>
  );
}
