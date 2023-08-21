import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Glossary from './components/Glossary';
import React from 'react';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/glossary" element={<Glossary />}/>
    </Routes>
    </BrowserRouter>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
