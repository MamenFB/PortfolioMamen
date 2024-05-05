"use client"

import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    
    <div
    style={{ backgroundImage: "url(/mountains.jpg)" }}
    className='w-screen h-screen flex flex-col items-center justify-center bg-center bg-cover'>
    
    {/* Text above the grid */}
    <h1 className="text-xl font-bold text-white mb-5">Estos son algunos de mis Proyectos</h1>
      <div className='grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]'>
        {Projects.map((project, index) => (
          <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
              deployUrl={project.deployUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default Page