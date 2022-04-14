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


function App() {
  const [{user}, dispatch] = useStateValue('');
  return (
    <div className='App'>
      <Navbar/>
        <Routes>
          { user ? <Route exact path = '/' element = {<Home/>}/> : <Route exact path = '/' element = {<Landing/>}/>}

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
