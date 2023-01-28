import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DrumMachine from './components/projects/drum-machine/components/drum-machine';
import Home from './components/home/home';
import Projects from './components/projects/projects';
import QuoteBox from './components/projects/quote-machine/quoteBox';
import Markdown from './components/projects/markdown-machine/markdown';
import Calculator from './components/projects/calculator/calculator';
import Timer from './components/projects/timer-app/timer';
import GameAssets from './components/projects/game-assets/game-assets';


const Main = () => {
  return (
    <Routes> {/* The Routes decides which component to show based on the current URL.*/}
        <Route exact path='/' element={<Home />} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/projects/drum-machine' element={<DrumMachine/>} />
        <Route path='/projects/quote-box' element={<QuoteBox/>} />
        <Route path='/projects/markdown-machine' element={<Markdown/>} />
        <Route path='/projects/calculator' element={<Calculator/>} />
        <Route path='/projects/timer-app' element={<Timer/>} />
        <Route path='/projects/game-assets' element={<GameAssets/>} />


        


    </Routes>
  );
}

export default Main;