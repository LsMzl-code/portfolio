
import { workExperience } from "@/constants";
import ShineBorder from "../ui/shine-border";
import Image from "next/image";


const Experience = () => {
   return (
      <section className="py-20" id="clients">
         <h1 className="heading">
            Mes <span className="text-indigo-500">expériences</span>
         </h1>
         <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
            {workExperience.map((card) => (
               <ShineBorder
                  className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 bg-foreground/5"
                  color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                  // duration={Math.floor(Math.random() * 5000) + 5000}
                  key={card.id}
                  borderRadius={14}
               >
                  <Image
                     src={card.thumbnail}
                     alt={card.title}
                     className="lg:w-32 md:w-20 w-16"
                     width="40"
                     height="40"
                  />
                  <div className="lg:ms-5">
                     <h2 className="text-start text-xl md:text-2xl font-bold">{card.title}</h2>
                     <p className="text-start text-white-100 mt-3 font-medium">{card.desc}</p>
                  </div>

               </ShineBorder>
            ))}
         </div>
      </section>
   );
};

export default Experience;
