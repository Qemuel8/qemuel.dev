import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route}
    from 'react-router-dom';
import App from './App';
import Projects from './components/projects/projects';
import Home from './components/home/home';
import 'bootstrap/dist/css/bootstrap.css';
import DrumMachine from './components/projects/drum-machine/components/drum-machine';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);