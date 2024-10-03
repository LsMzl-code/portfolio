import { Spotlight } from "@/components/ui/Spotlight";


import Link from "next/link";
import { MousePointerClick } from "lucide-react";
import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { BackgroundBeams } from "../ui/background-beams";
import ShinyButton from "../ui/shiny-button";

const Hero = () => {
   return (
      <>
         <section className="lg:pb-10 pt-16 lg:pt-36 w-full relative" id="accueil">
            {/* Logo */}
            <Image src={'/svg/mzl.svg'} alt="MZL" width={50} height={50} className="absolute top-2 -left-3" />

            {/* Neon */}
            <div>
               <Spotlight
                  className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                  fill="white"
               />
               <Spotlight
                  className="top-10 left-full h-[80vh] w-[50vw]"
                  fill="purple"
               />
               <Spotlight
                  className="top-28 left-80 h-[80vh] w-[50vw]"
                  fill="blue"
               />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 relative my-10 z-10 w-full">
               <div className="flex flex-col items-center justify-center lg:items-start lg:col-span-3 order-2 lg:order-1">
                  <p className="font-medium text-xl">Bonjour, je suis Louis Mazzella 👋🏻</p>
                  <TextGenerateEffect
                     className="text-center lg:text-start text-[35px] md:text-5xl lg:text-6xl"
                     words="Transformons vos idées en solutions digitales sur mesure."
                  />

                  <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-start">
                     Développeur web spécialisé en TypeScript, Next.js et NestJS, je conçois des applications performantes et intuitives.
                  </p>
                  {/* Projects Button */}
                  <Link href={"#projets"} title="Mes projets">
                     <ShinyButton icon={<MousePointerClick />} position="right">Projets</ShinyButton>
                  </Link>
               </div>

               {/* Profile Image */}
               <div className="h-40 w-40 lg:h-72 lg:w-72 relative order-1 lg:order-2 self-center lg:col-span-1 place-self-center inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-xl font-medium text-white backdrop-blur-3xl">
                     <Image
                        src={"/img/profile-pic.webp"}
                        alt="Photo de Louis Mazzella"
                        fill
                        sizes="100%"
                        className="object-cover"
                        priority
                     />
                  </span>
               </div>
            </div>
            {/* Quadrillage */}

         </section>
         <BackgroundBeams />
      </>
   );
};

export default Hero;
