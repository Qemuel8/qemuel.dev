import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './projects.css';
import DrumMachine from './drum-machine/components/drum-machine';
import Home from '../home/home';
const quoteImg = require('./quote-machine/quote-img.png')




  const Projects = () => {
    return (
        <>

        <div className='projects'>
            <Link to="/projects/quote-box">
                    <button className='projects-button'>
                        Quote Box
                    </button>
                </Link>
                <Link to="/projects/markdown-machine">
                    <button className='projects-button'>
                    Markdown Machine
                    </button>
                </Link>
                <Link to="/projects/drum-machine">
                    <button className='projects-button'>
                        Drum Machine
                    </button>
                </Link>
                <Link to="/projects/calculator">
                    <button className='projects-button'>
                        Calculator
                    </button>
                </Link>
                <Link to="/projects/timer-app">
                    <button className='projects-button'>
                        Timer App
                    </button>
                </Link>
                <Link to="/projects/game-assets">
                    <button className='projects-button'>
                    Game Assets
                    </button>
                </Link>
        </div>
    


        </>
        
    );

  }
     
    export default Projects;