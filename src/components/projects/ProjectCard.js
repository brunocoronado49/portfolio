import React from 'react'
import './Projects.css'

const ProjectCard = ({title, description, image, link}) => {
    return (
        <div>
            <div className="overflow">
                <img 
                    src={image} 
                    alt="title" 
                    width="100" 
                    className="card-img-top"
                />
            </div>
            <a href={link} target="_blank" className="linkCard">
                <h2 className="title">{title}</h2>
            </a>
            <p className="description">{description}</p>
        </div>
    )
}

export default ProjectCard
