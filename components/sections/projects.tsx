import { ProjectCard } from '../project-card'
import { projects } from '@/constants'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Projects = () => {
  return (
    <section id='projets' className='mt-10'>
      <h1 className="heading">
        Une sélection de mes{" "}
        <span className="text-indigo-500">projets récents</span>
      </h1>

      {/* Carousel */}
      <Carousel className="w-full">
        <CarouselContent>
          {projects.map(({ title, description, imageUrl, imageAlt, link, github, iconLists }) => (
            <CarouselItem key={title} className="md:basis-1/2 xl:basis-1/3" >
              <ProjectCard title={title} description={description} imageUrl={imageUrl} imageAlt={imageAlt} link={link} github={github} iconLists={iconLists} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}

export default Projects