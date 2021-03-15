import React from 'react'
import SodrzinaZaProekt from './SodrzinaZaProekt'
import { Link } from 'react-router-dom'

const ProjectList = ({projects}) => {
  return (
    <div className="project-list section" id="lista_proekti">
      { projects && projects.map(project => {
        return (
          <Link to={'/project/' + project.id} key={project.id}>
            <SodrzinaZaProekt project={project} />
          </Link>
        )
      })}  
    </div>
  )
}

export default ProjectList