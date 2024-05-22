"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (isPlaying && audioRef.current) {
      (audioRef.current as HTMLAudioElement).pause();
    } else if (audioRef.current) {
      (audioRef.current as HTMLAudioElement).play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <main className="w-screen h-screen relative">
      <audio ref={audioRef} src="/audio.mp3"></audio>
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="px-4 sm:px-10 md:pl-20 md:pb-20 flex flex-col gap-5 z-10 max-w-full md:max-w-[750px]">
          <h1 className="text-[32px] sm:text-[40px] md:text-[50px] text-white font-bold">
            Bienvenidxs a mi Portfolio
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-400">
              Soy Mamen
            </span>
          </h1>

          <div className="inline-block my-8">
            <button
              onClick={toggleAudio}
              className="px-4 py-2 bg-purple-800 text-white rounded-lg"
            >
              {isPlaying ? "Pause Audio" : "Play Audio"}
            </button>
          </div>
          
          <div className="text-gray-200 hidden md:block">
            <section>
              <h2 className="text-[24px] sm:text-[30px] text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-red-500 font-bold">
                Mi pasión por la tecnología.
              </h2>
              <p className="mt-2">
                ¡Hola! Soy una entusiasta de la tecnología. Mi pasión por aprender y experimentar me
                mantiene en constante evolución. Cuando no estoy sumergida en el trabajo, me encantan los
                deportes y vivo al ritmo del rock.
              </p>
            </section>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-10">
        <Image
          src="/horse.png"
          alt="horse"
          height={150}
          width={150}
          className="absolute right-10 bottom-28 md:bottom-32 md:right-20 md:h-[200px] md:w-[200px] lg:h-[300px] lg:w-[300px] lg:bottom-44 lg:right-36"
        />
        <Image src="/cliff.webp" alt="cliff" width={240} height={240} className="md:w-[480px] md:h-[480px]" />
      </div>

      <div className="absolute bottom-0 z-5 w-full h-auto">
        {/* Additional background or decorative elements can go here */}
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={150}
        width={150}
        className="absolute top-0 left-0 z-10"
      />
    </main>
  );
}
