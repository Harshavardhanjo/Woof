import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Components/NavBar/Navbar';
import React, {useEffect,useState} from 'react';
import {useStateValue} from './StateProvider'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Switch>
          <Route exact path = ''>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
