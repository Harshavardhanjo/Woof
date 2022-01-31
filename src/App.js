import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from  'react-router-dom'
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Components/NavBar/Navbar';
import React, {useEffect,useState} from 'react';
import DisplayVendors from './Pages/DisplayVendors/DisplayVendors';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route exact path = '/' element = {<Home/>}/>

          <Route exact path = '/Profile' element ={<h1>stedi</h1>}/>

          <Route exact path = '/Vendors' element ={<DisplayVendors/>}/>
            
        </Routes>
    </div>
  );
}

export default App;
