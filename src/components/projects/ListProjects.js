import React, { useState } from 'react'
import { motion } from "framer-motion";
import ProjectCard from './ProjectCard';
import { variants } from '../Variants';
import Cards from '../../assets/ScreenShots/Cards/cards1.png';
import Gallery from '../../assets/ScreenShots/Gallery/gallery1.png';
import KF from '../../assets/ScreenShots/KredFreed/kf1.png';
import Links from '../../assets/ScreenShots/Links/links1.png';
import Movies from '../../assets/ScreenShots/Movies/m1.png';
import Notes from '../../assets/ScreenShots/Notes/notes2.png';
import Tasks from '../../assets/ScreenShots/Tasks/task2.png';
import Todo1 from '../../assets/ScreenShots/TodoApp1/todo5.png';
import Todo2 from '../../assets/ScreenShots/TodoApp2/todo7.png';
import User from '../../assets/ScreenShots/UsersContext/user.png';
import './Projects.css'

const ListProjects = () => {

    const projects = [
        {
            "id":1,
            "title": "Cards",
            "description": "Aplicación de Cartas que direccionan a una dirección de internet hecha con React.",
            "link": "https://github.com/brunocoronado49/cards-react.git",
            "image": Cards
        },
        {
            "id":2,
            "title": "Gallery",
            "description": "Aapp Web hecha con React y DigitalOcean para subir imágenes y mostrarlas.",
            "link": "https://github.com/brunocoronado49/galery.git",
            "image": Gallery
        },
        {
            "id":3,
            "title": "Kred",
            "description": "Un proyecto de ordenación de datos en un formulario.",
            "link": "https://github.com/brunocoronado49/KredFeed.git",
            "image": KF
        },
        {
            "id":4,
            "title": "Links",
            "description": "CRUD hecho con React y Firebase para guardar enlaces de sitios web.",
            "link": "https://github.com/brunocoronado49/reactFire-crud.git",
            "image": Links
        },
        {
            "id":5,
            "title": "Movies",
            "description": "App web hecha con React para buscar series y películas por nombre.",
            "link": "https://github.com/brunocoronado49/movies-app-react.git",
            "image": Movies
        },
        {
            "id":6,
            "title": "Notes",
            "description": "CRUD app para guardar, editar  y borrar notas hecha con React y MongoDB.",
            "link": "https://github.com/brunocoronado49/notes-app-mern.git",
            "image": Notes
        },
        {
            "id":7,
            "title": "Tasks",
            "description": "Interfaz de una aplicación de tareas pendientes.",
            "link": "",
            "image": Tasks
        },
        {
            "id":8,
            "title": "ToDoApp1",
            "description": "CRUD de notas/tareas hecha con MongoDB y NodeJs, cuenta con inicio de sesión y registro.",
            "link": "https://github.com/brunocoronado49/crud-nodeJs-mongodb.git",
            "image": Todo1
        },
        {
            "id":9,
            "title": "ToDoApp2",
            "description": "CRUD de notas/tareas hecha con MongoDB y NodeJs, cuenta con inicio de sesión y registro.",
            "link": "https://github.com/brunocoronado49/crud-node-mongo.git",
            "image": Todo2
        },
        {
            "id":10,
            "title": "UserContext",
            "description": "App sencilla para el uso de createContext de React.",
            "link": "https://github.com/brunocoronado49/react-context-users.git",
            "image": User
        }
    ]

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
