"use client"

import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/mountains.jpg)", height: "100vh", overflowY: "auto"}}  
      className='w-screen h-screen flex flex-col items-center justify-center bg-center bg-cover '>
      
      {/* Texto encima de la cuadrícula */}
  
      <h1 className="text-xl font-bold text-white mb-5">Algunos de mis Proyectos</h1>
      
      <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-2 max-w-screen-lg  overflow-x-auto'>
        {Projects.map((project, index) => (
          <div key={index} className="max-w-sm">
            <ProjectCard
              title={project.title}
              text={project.text}
              image={project.src}
              deployUrl={project.deployUrl}
            />
          </div>
        ))}
      </div>
      <h1 className="text-xl font-bold text-white mb-5 md:hidden self-start md:ml-5">
            .
        </h1>
    </div>
  )
}

export default Page
