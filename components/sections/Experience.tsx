
import { workExperience } from "@/constants";
import Image from "next/image";
import { BorderBeam } from "../ui/border-beam";


const Experience = () => {
   return (
      <section className="py-10 lg:py-20" id="experiences">
         <h1 className="heading">
            Mes <span className="text-indigo-500">expériences</span>
         </h1>
         <div className="w-full mt-20 grid lg:grid-cols-2 grid-cols-1 gap-5">
            {workExperience.map((card) => (
               <div
                  className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 border border-gray-950/[.1] dark:border-gray-50/[.1] bg-gray-950/[.01] dark:bg-gray-50/[.10] relative rounded-xl"
                  key={card.id}
               >
                  <Image
                     src={card.thumbnail}
                     alt={card.title}
                     className="lg:w-[100px] w-16"
                     width="35"
                     height="35"
                  />
                  <div className="lg:ms-5">
                     <h2 className="text-start text-xl md:text-2xl font-bold">{card.title}</h2>
                     <p className="font-medium text-xs sm:text-sm">{card.date}</p>
                     <p className="text-start text-white-100 mt-2 sm:mt-3 text-sm md:text-base">{card.desc}</p>
                  </div>
                  <BorderBeam size={250} duration={Math.floor(Math.random() * 10) + 10} delay={9} />
               </div>
            ))}
         </div>
      </section>
   );
};

export default Experience;
