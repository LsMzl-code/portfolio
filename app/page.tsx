import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import { NavBar } from "@/components/sections/navBar";
import {Presentation} from "@/components/sections/Presentation";
import Projects from "@/components/sections/projects";
import Technologies from "@/components/sections/technologies";

export default function Home() {
  return (
    
    <main className="relative flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        

        <Hero />

        <NavBar />
        <Presentation />
        <Technologies />
        <Projects />
        <Experience />

        <Footer />
      </div>
    </main>
  );
}
