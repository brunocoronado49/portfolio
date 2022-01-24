import React, { useState } from 'react'
import { motion } from "framer-motion";
import ProjectCard from './ProjectCard';
import { variants } from '../Variants';
import {projects} from '../Sources/Projects';
import './Projects.css'

const ListProjects = () => {
    return (
        <motion.div 
            className="container d-flex h-100 align-items-center"
            variants={variants}
            initial="hidden"
            animate="show"
        >
            <div className="row">
                {
                    projects.map(project => (
                        <div className="col-sm-4 p-2" key={project.id}>
                            <ProjectCard
                                id={project.id}
                                title={project.title}
                                description={project.description}
                                image={project.image} 
                                link={project.link}
                            />
                            <hr />
                        </div>
                    ))
                }
            </div>
        </motion.div>
    )
}

export default ListProjects
