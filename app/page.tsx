

import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      {/* <audio src="/audio.mpeg" autoPlay ></audio> */}
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-bold text-sm sm:text-lg lg:text-xl xl:text-2xl">
            Bienvenidxs a mi Portfolio
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 text-sm sm:text-lg lg:text-xl xl:text-2xl">
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
                <h2 className="text-[30px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 font-bold text-sm sm:text-lg lg:text-xl xl:text-2xl">Mi pasión por la tecnología.</h2>
                <p>¡Hola! Soy una entusiasta de la tecnología. mi pasión por aprender y experimentar me
                  mantiene en constante evolución.

                  Cuando no estoy sumergida en el trabajo, me encantan los deportes y vivo al ritmo del rock.</p>
              </section>
            </div>
          </p>
        </div>
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
      
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
      
  

    </main>
  );
}
