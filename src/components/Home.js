import React from 'react'
import { motion } from "framer-motion";
import Programming from '../assets/programming.svg';
import './Style.css'
import { variants } from './Variants';

const Home = () => {
    return (
        <motion.div 
            className="p-4"
            variants={variants}
            initial="hidden"
            animate="show"
        >
            <div className="row mt-5">
                <div className="col-sm-6">
                    <h1 className="name"> Hola, soy Francisco</h1>
                    <h5 className="info">Aquí podrás ver todos mis trabajos que he realizado de manera independiente. Todo esta desarrollado con <code>React</code> y el Stack <code>MERN</code>.</h5>
                    <p className="info">José Francisco Rangel Coronado | <code>Frontend Developer</code></p>
                </div>
                <div className="col-sm-6">
                    <img src={Programming} alt="portfolio" width="600"/>
                </div>
            </div>
        </motion.div>
    )
}

export default Home
