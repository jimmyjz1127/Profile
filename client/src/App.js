import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Components
import NavBar from "./Components/Modals/NavBar/NavBar";
import HomePage from './Components/Pages/HomePage/HomePage';


import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
