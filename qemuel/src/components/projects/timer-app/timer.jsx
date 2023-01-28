import React, { Component } from 'react';
import './timer.css'
const UP = require('./icons/up.png');
const DOWN = require('./icons/down.png');
const RESET = require('./icons/reset.png');
const PLAY = require('./icons/play.png');
const PAUSE = require('./icons/pause.png');
const alarm = require('./alarm.mp3')


let timerId;
let breakId;
let audio = new Audio(alarm);
let sound = document.getElementById('beep');

class Timer extends Component {
    constructor(props){
        super(props)
        this.state = { 
            breakLength: 5,
            breakMinute: 5,
            breakSecond:0,
            breakState: false,
            sessionLength: 25,
            sessionMinute:25,
            second: 0,
            timerState: false,
            timerName: ['Session', 'Break'],
            currentTimer: "Session", //creating a timer current state to switch pause button and start button
            timerLock: false,
        
         } 
    }
    
    startTimer = () =>{
        
        if(this.state.sessionLength <= 0 && this.state.sessionMinute <= 0){
            this.setState(({
                sessionLength: 1,
                sessionMinute: 1,
                second:0,
                timerState: false,
                currentTimer: "Session",
            }))
        }
        this.setState((state) => ({
            timerLock: true,
            timerState: true,
        }))
             timerId = setInterval(() =>{ 
                if(this.state.sessionMinute == 0 && this.state.second == 0){
                    
                    clearInterval(timerId);
                    this.setState((state)=> ({
                        timerState: false,
                        breakMinute: state.breakLength,
                        breakSecond: 0,
                        currentTimer: "Break",
                    }))
                    document.getElementById('beep').play(); 
                    this.startBreak()
                    
                }

                if(this.state.second > 0){
                this.setState((state)=> ({
                    second: state.second - 1,
                }))
                }else if(this.state.sessionMinute > 0){
                    this.setState((state)=> ({
                        sessionMinute: state.sessionMinute - 1,
                        second: 59,
                    }))
                }

        
            }, 1000);
    }
    stopTimer = () =>{
        console.log("timer stopped")
        this.setState((state) => ({
            timerState: false,
        }))
          clearInterval(timerId);
        
    }
    startBreak = () =>{
        if(this.state.breakLength <= 0 && this.state.breakMinute <= 0){
            this.setState(({
                breakLength: 1,
                breakMinute: 1,
                breakSecond:0,
                breakState: false,
                currentTimer: "Break",
            }))
        }
        this.setState((state) => ({
            breakState: true,
        }))
             breakId = setInterval(() =>{ 
                if(this.state.breakMinute == 0 && this.state.breakSecond == 0){

                    clearInterval(breakId);
                    this.setState((state)=> ({
                        breakState: false,
                        sessionMinute: state.sessionLength,
                        sessionSecond: 0,
                        currentTimer: "Session",
                    }))
                    document.getElementById('beep').play(); 
                    this.startTimer()
                }

                if(this.state.breakSecond > 0){
                this.setState((state)=> ({
                    breakSecond: state.breakSecond - 1,
                }))
                }else if(this.state.breakMinute > 0){
                    this.setState((state)=> ({
                        breakMinute: state.breakMinute - 1,
                        breakSecond: 59,
                    }))
                }

        
            }, 1000);
    }
    stopBreak = () =>{
        console.log("break stopped")
        this.setState((state) => ({
            breakState: false,
        }))
          clearInterval(breakId);
        
    }





    addMinute =(timer)=>{
        if(this.state.timerLock == true) return;
        if(timer == "session" && this.state.timerState != true && this.state.breakState != true){
            this.setState((state)=>({
                
                sessionLength: state.sessionLength + 1,
                sessionMinute: state.sessionMinute + 1,
            }))
        }else if(timer == "break" && this.state.breakState != true && this.state.timerState != true){
            this.setState((state)=>({
                breakLength: state.breakLength + 1,
                breakMinute: state.breakMinute + 1,

            }))
        }
    }

    subtractMinute =(timer)=>{
        if(timer == "session" && this.state.sessionLength > 1 && this.state.sessionMinute > 1 && this.state.timerState != true && this.state.breakState != true && this.state.timerLock != true){
            this.setState((state)=>({
                sessionLength: state.sessionLength - 1,
                sessionMinute: state.sessionMinute - 1,

            }))
        }else if(timer == "break" && this.state.breakLength > 1 && this.state.breakMinute > 1 && this.state.breakState != true && this.state.timerState != true && this.state.timerLock != true){
            this.setState((state)=>({
                breakLength: state.breakLength - 1,
                breakMinute: state.breakMinute - 1,

            }))
        }
    }

    resetTimer = () =>{
        this.stopTimer();
        this.stopBreak();
        this.setState(({
            breakLength: 5,
            breakMinute: 5,
            breakSecond: 0,
            breakState: false,
            sessionLength: 25,
            sessionMinute: 25,
            second:0,
            timerState: false,
            currentTimer: "Session",
            timerLock: false,
        }))
        document.getElementById('beep').currentTime = null;
        document.getElementById('beep').pause(); 


    }

    checkState = () =>{

        if(this.state.currentTimer == "Session"){
            if(this.state.timerState == false ){
                this.startTimer();
            }else if(this.state.timerState == true){
                this.stopTimer();
            }
        }else if( this.state.currentTimer == "Break"){
            if(this.state.breakState == false ){
                this.startBreak();
            }else if(this.state.breakState == true){
                this.stopBreak();
            }
        }
     }
     //this.state.breakState == false ? ( (this.state.sessionMinute < 10 ? "0" : "") + this.state.sessionMinute + ":"  + (this.state.second < 10 ? "0" : "") + this.state.second ) :  ( (this.state.breakMinute < 10 ? "0" : "") + this.state.breakMinute + ":"  + (this.state.breakSecond < 10 ? "0" : "") + this.state.breakSecond ) 
     timeLeft = () =>{
        if(this.state.currentTimer == 'Session'){
            return (
               (this.state.sessionMinute < 10 ? "0" : "") + this.state.sessionMinute + ":"  + (this.state.second < 10 ? "0" : "") + this.state.second
            );
        }else if(this.state.currentTimer == 'Break'){
            return(
                 (this.state.breakMinute < 10 ? "0" : "") + this.state.breakMinute + ":"  + (this.state.breakSecond < 10 ? "0" : "") + this.state.breakSecond 
               
            );
        }
     }


    


    render() { 
        return (
                <div id='timer'>
                <h1 id='timer-name'>25 + 5 Clock </h1>

                <div id='timer-settings'>

                <div id='break-label'>
                    Break Length
                </div>

                <button id='break-increment' onClick={this.state.breakLength != 60 ? () =>this.addMinute("break") : null}>
                    <img id='up-icon' src={UP}/>
                </button>
                <div id='break-length'>
                    {this.state.breakLength}
                </div>
                <button id='break-decrement' onClick={this.state.breakLength > 0 ? () =>this.subtractMinute("break") : null}>
                    <img id='down-icon' src={DOWN}/>
                </button>

                <div id='session-label'>
                    Session Length
                </div>               
                <button id='session-increment' onClick={this.state.sessionLength != 60 ? () =>this.addMinute("session") : null}>
                    <img id='up-icon' src={UP}/>
                </button>
                <div id='session-length'>
                    {this.state.sessionLength}
                </div>
                <button id='session-decrement' onClick={this.state.sessionLength > 0 ? () =>this.subtractMinute("session") : null}>
                    <img id='down-icon' src={DOWN}/>
                </button>
                
                </div>
                <div id='timer-box'>
                <div id='timer-label'>
                    {this.state.currentTimer == "Session" ? this.state.timerName[0] : null}
                    {this.state.currentTimer == "Break" ? this.state.timerName[1] : null}
                </div>
                <div id='time-left'>
                    {this.timeLeft()}
                </div>
                <div id='buttons'>
                    <button id='start_stop' onClick={() => this.checkState()}><img id='play-icon' src={PLAY}/></button>
                    <button id='reset' onClick={() => this.resetTimer()}><img id='reset-icon' src={RESET}/></button>
                </div>
                <audio preload="true" id="beep" src={alarm}></audio>
                </div>
                
            <div id='info'>
                Designed and coded by: <br/> Qemuel
            </div>


            </div>
        );
    }
}
 
export default Timer;