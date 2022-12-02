import React, { Component } from 'react';
import './home.css';
const myImage = require('./me.jpg')

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div id="home">
            <ul id='navbar'>
                <li className='navbar-item'>Home</li>
                <li className='navbar-item'>Projects</li>
                <li className='navbar-item'>About Me</li>
            </ul>

                <h1> I am a Web Developer</h1>
                <div id='img-container'>
                    <img id='my-image' src={myImage}></img>
                    <div>

                    </div>
                </div>
            </div>
        );
    }
}
 
export default Home;