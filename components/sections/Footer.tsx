import { MousePointerClick } from "lucide-react";


import { MagicBtn } from "../ui/magic-btn";
import { socialMedia } from "@/constants";
import Image from "next/image";
import ShinyButton from "../ui/shiny-button";

const Footer = () => {
   return (
      <footer className="w-full lg:pt-20 pb-10" id="contact">
         <div className="w-full absolute left-0 bottom-0 min-h-96">
            {/* <img
               src="/assets/footer-grid.svg"
               alt="Grid"
               className="w-full h-full opacity-50"
            /> */}
         </div>
         <div className="flex flex-col items-center">
            <h2 className="heading lg:max-w-[45vw]">
               Ready to take <span className="text-purple">your</span> digital
               presence to the next level ?
            </h2>
            <p className="text-white-200 md:mt-10 my-5 text-center">
               Reach out to me today and let&apos;s discuss hox I can help you
               achieve your goals.
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
                  <div key={media.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-150 bg-opacity-75 bg-foreground/20 rounded-lg border border-black-300">
                     <Image
                        src={media.img}
                        alt={media.img}
                        width={20}
                        height={20}
                     />
                  </div>
               ))}
            </div>
         </div>
      </footer>
   );
};

export default Footer;
