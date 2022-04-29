import logo from './logo.svg';
import { Routes, Route} from  'react-router-dom'
import {useStateValue} from './StateProvider';
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
import Landing from './Pages/Landing/Landing';

import { createGlobalStyle } from "styled-components";
import VendorProfile from './Components/VendorProfile/VendorProfile';
import Feed from './Pages/Feed/Feed';
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;1,300&family=Ms+Madi&family=Plus+Jakarta+Sans&display=swap');
  body {
    font-family: 'Montserrat', sans-serif;
  }
`


function App() {
  const [{user}, dispatch] = useStateValue('');
  return (
    <div className='App'>
      <Navbar/>
        <Routes>
          <Route exact path = '/' element = {<Landing/>}/>

          <Route exact path = '/Profile' element ={<Profile/>}/>

          <Route exact path = '/Vendors' element ={<DisplayVendors/>}/>
          
          <Route exact path = '/home' element ={<Home/>}/>

          <Route exact path = '/Favourites' element ={<Favourites/>}/>

          <Route exact path = '/Settings' element ={<Settings/>}/>

          <Route exact path = '/RegisterEnterprise' element ={<RegisterEnterprise/>}/>

          <Route exact path = '/VendorProfile' element = {<VendorProfile/>}/>

          <Route exact path = '/Feed' element = {<Feed/>}/>
            
        </Routes>
    </div>
  );
}

export default App;
