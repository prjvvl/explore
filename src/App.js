import React from 'react';
import './App.css';
import Gallery from './components/Gallery';
import Intro from './components/Intro';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <Intro/>
      <Gallery/>
      
    </>
  );
}

export default App;
