import React, { Component } from 'react'
import getAudio from '../audio/audio'
import './drum-machine.css'
import {useEffect} from 'react';

const audio1 = require("../audio/Cev_H2.mp3");
const audio2 = require("../audio/Dsc_Oh.mp3");
const audio3 = require("../audio/Heater-1.mp3");
const audio4 = require("../audio/Heater-2.mp3");
const audio5 = require("../audio/Heater-3.mp3");
const audio6 = require("../audio/Heater-4_1.mp3");
const audio7 = require("../audio/Heater-6.mp3");
const audio8 = require("../audio/Kick_n_Hat.mp3");
const audio9 = require("../audio/RP4_KICK_1.mp3");
const drum = require("./drum.jpg")



class DrumMachine extends Component {
  constructor(props){
    super(props)
    this.state = {
      audios:[
      {
        audio : new Audio(audio1),
        key: "Q",
        sound:"bim"
      },
      {
        audio : new Audio(audio2),
        key: "W",
        sound:"bam"
      },
      {
        audio : new Audio(audio3),
        key: "E",
        sound:"bom"
      },
       {
        audio : new Audio(audio4),
        key: "A",
        sound:"zim"
      },
      {
        audio : new Audio(audio5),
        key: "S",
        sound:"zam"
      },
       {
        audio : new Audio(audio6),
        key: "D",
        sound:"zom"
      },
       {
        audio : new Audio(audio7),
        key: "Z",
        sound:"ts"
      },
      {
        audio : new Audio(audio8),
        key: "X",
        sound:"ks"
      },
       {
        audio : new Audio(audio9),
        key: "C",
        sound:"ss"
      },
    ],
    currentKey: "",
      } 

     

  }

//    <button className="drum-pad" id='C' onClick={() => this.togglePlay(this.state.audios.audio9)} >C</button> is a working button

  handleKeyDown = (event) =>{
  console.log(event.key.toUpperCase())
  let audioPlay = document.getElementById(event.key.toUpperCase()).play();
  //console.log(audioPlay);
  if(audioPlay !== undefined){
    audioPlay.then(function() {
    }).catch(function(error) {

    })
  }
  this.setState(()=>({
    currentKey: event.key.toUpperCase(),     
  }))
}

  togglePlay = (key) => {
    let audioPlay = document.getElementById(key).play();
    console.log(audioPlay);
    if(audioPlay !== undefined){
      audioPlay.then(function() {
      }).catch(function(error) {

      })
    }
    this.setState(()=>({
      currentKey: key,     
    }))
      
  }


  render() { 
    return (
    <div id="container" tabIndex={0} onKeyDown={this.handleKeyDown}>
    <div id='drum-machine'> 
    <img id="drum-image" src={drum}></img>
    <p id="drum-name">Drum Machine</p>
      {this.state.audios.map((drum)=>(

        <button onClick={()=> this.togglePlay(drum.key)}  className='drum-pad' id={drum.sound} key={drum.sound} >{drum.key}<audio preload  className='clip' id={drum.key}  src={drum.audio.src}  ></audio>
        </button>

      ))}
      <div id='display'>
        {this.state.currentKey}
      </div>
      </div>
      </div>
      
    );
  }
}
 
export default DrumMachine;