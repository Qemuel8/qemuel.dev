import React, { Component } from 'react';
import './home.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const myImage = require('./me.jpg')
const projectsIcon = require('../../icons/projects-icon.png')
const homeIcon = require('../../icons/home-icon.png')
const infoIcon = require('../../icons/info-icon.png')
const workspace = require('./workspace.jpg')




class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div id="home">
                <h2 id='workspace-text'>This is my workspace</h2>
                <div id='img-container'>
                <div id='headerContainer'>        
                    <h1 > Hi, Im Qemuel</h1>
                </div>
                <img id="workspace-img" src={workspace}></img>
                    <img id='my-image' src={myImage}></img>
                    <div>
                    </div>
                </div>
                 
            </div>
        );
    }
}
 
export default Home;