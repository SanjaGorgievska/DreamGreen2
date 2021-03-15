import React from 'react'
import moment from 'moment'

const SodrzinaZaProekt = ({project}) => {
  return (
    <div className="card z-depth-0 project-summary" id ="sorzina_proekt">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title" id="naslov">{project.title}</span>
        <p>Објавено од {project.authorFirstName} {project.authorLastName}</p>
      <p className="grey-text">{moment(project).calendar}</p>
      </div>
    </div>
  )
}

export default SodrzinaZaProekt