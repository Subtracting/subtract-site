'use client'

import ProjectCard from './ProjectCard'
import { projects } from '@/app/data/projects'

export default function Projects() {
  return (
  <div>
    <div id="projects">
      <h1 className="bg-white/90 text-black text-3xl font-black tracking-tighter m-8 pl-2 w-45">
        PROJECTS
      </h1>
    </div>
    <div className="w-full p-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-screen-xl mx-auto">
        {projects.map((project, index) => (
            <ProjectCard
              index={index}
              project={project}
              key={project.title}
            />
        ))}
      </div>
    </div>
  </div>
  )
}
