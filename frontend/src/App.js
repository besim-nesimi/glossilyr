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
  );
}

export default App;
