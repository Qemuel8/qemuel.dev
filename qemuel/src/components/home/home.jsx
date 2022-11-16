import React, { Component } from 'react';
import './home.css';
const myImage = require('./me.jpg')

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div id="home-box">
                <div id='img-container'>
                    <img id='my-image' src={myImage}></img>
                    <div>
                        <p> Welcome to Qemuel.dev!</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Home;