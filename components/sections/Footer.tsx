import { MousePointerClick } from "lucide-react";
import { socialMedia } from "@/constants";
import Image from "next/image";
import ShinyButton from "../ui/shiny-button";

const Footer = () => {
   return (

      <footer className="w-full lg:pt-20 pb-10 relative pt-20" id="contact">
         <Image
            src="/assets/footer-grid.svg"
            alt="Grid"
            className="opacity-50 absolute -top-14 right-0 left-0"
            width={1000}
            height={1000}
         />
         <div className="flex flex-col items-center">
            <h2 className="heading lg:max-w-[45vw]">
               Prêt à donner <span className="text-indigo-500">vie</span> à vos projets ?
            </h2>
            <p className="text-white-200 md:mt-5 my-5 text-center">
               Collaborons ensemble, je ne suis qu&apos;à un message de distance !
            </p>
            <a href="mailto:louismzl.dev@gmail.com">
               <ShinyButton icon={<MousePointerClick />} position="right">Contact</ShinyButton>
            </a>
         </div>

         <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
            <p className="md:text-base text-sm md:font-normal text-light">
               Copyright © 2024 - Louis Mazzella
            </p>
            <div className="flex items-center md:gap-3 gap-6 max-md:mt-2">
               {socialMedia.map((media) => (
                  <a key={media.id} title={media.title} href={media.href} target="_blank" className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-150 bg-opacity-75 bg-foreground/20 rounded-lg border border-black-300 hover:bg-indigo-500 transition-colors">
                     <Image
                        src={media.img}
                        alt={media.img}
                        width={20}
                        height={20}
                     />
                  </a>
               ))}
            </div>
         </div>
      </footer>

   );
};

export default Footer;
