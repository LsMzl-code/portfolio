import React from 'react'
import { ProjectCard } from '../project-card'
import { projects } from '@/constants'

const Projects = () => {
  return (
    <section>
      <h1 className="heading">
        Une sélection de mes{" "}
        <span className="text-indigo-500">projets récents</span>
      </h1>
      <div className="flex flex-wrap items-center justify-between">
        {projects.map(({ title, description, imageUrl, imageAlt, link, github, iconLists }) => (
          <ProjectCard title={title} description={description} imageUrl={imageUrl} imageAlt={imageAlt} link={link} github={github} iconLists={iconLists} key={title}/>
        ))}
      </div>
    </section>
  )
}

export default Projects