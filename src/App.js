import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from  'react-router-dom'
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Components/NavBar/Navbar';
import React, {useEffect,useState} from 'react';
import DisplayVendors from './Pages/DisplayVendors/DisplayVendors';
import RegisterEnterprise from './Pages/RegisterEnterprise/RegisterEnterprise';
import Profile from './Pages/Profile/Profile';
import Bookings from './Pages/Bookings/Bookings';
import Favourites from './Pages/Favourites/Favourites';
import Settings from './Pages/Settings/Settings';

function App() {
  
  return (
    <div className='App'>
      <Navbar/>
        <Routes>
          <Route exact path = '/' element = {<Home/>}/>

          <Route exact path = '/Profile' element ={<Profile/>}/>

          <Route exact path = '/Vendors' element ={<DisplayVendors/>}/>
          
          <Route exact path = '/Bookings' element ={<Bookings/>}/>

          <Route exact path = '/Favourites' element ={<Favourites/>}/>

          <Route exact path = '/Settings' element ={<Settings/>}/>

          <Route exact path = '/RegisterEnterprise' element ={<RegisterEnterprise/>}/>
            
        </Routes>
    </div>
  );
}

export default App;
