import React from 'react'
import { motion } from "framer-motion";
import Portfolio from '../assets/portfolio.svg';
import Github from '../assets/github.png';
import Instagram from '../assets/instagram.png';
import Twitter from '../assets/twitter.png';
import Linkedin from '../assets/linkedin.png';
import { variants } from './Variants';
import './Style.css'

const About = () => {
    return (
        <motion.div 
            className="p-4"
            variants={variants}
            initial="hidden"
            animate="show"
        >
            <div className="row mt-5">
                <div className="col-sm-6">
                    <img src={Portfolio} alt="portfolio" width="600"/>
                </div>
                <div className="col-sm-6">
                    <h1 className="name">Contacto</h1>
                    <h5 className="info">Hola, soy Francisco desarrollador de software para aplicaciónes web. Desde hace más de dos años me dedico a programación del lado del cliente con <code>React</code>, un poco de <code>backend</code> y apps móviles usando <code>Flutter</code> y <code>nativo</code>.</h5>
                    <h5 className="info">Superando pruebas al aprender nuevas cosas. Encantado de conocer nuevas tecnologías y métodos para el desarrollo de software, creando soluciones creativas y siempre motivado por este trabajo con buenas prácticas.</h5>
                    <p className="info">José Francisco Rangel Coronado | <code>Frontend Developer</code></p>
                </div>
            </div>
            <div class="contact">
                <div className="row">
                    <div className="col-sm-3">
                        <a href="https://www.linkedin.com/in/jfrc117" target="_blank">
                            <img className="png" src={Linkedin} alt="Linkedin" width="50"/>
                        </a>
                    </div>
                    <div className="col-sm-3">
                        <a href="https://github.com/brunocoronado49" target="_blank">
                            <img className="png" src={Github} alt="Github" width="50"/>
                        </a>
                    </div>
                    <div className="col-sm-3">
                        <a href="https://www.instagram.com/braunyy7/" target="_blank">
                            <img className="png" src={Instagram} alt="Instagram" width="50"/>
                        </a>
                    </div>
                    <div className="col-sm-3">
                        <a href="https://twitter.com/Francis37052561" target="_blank">
                            <img className="png" src={Twitter} alt="Twitter" width="50"/>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default About
