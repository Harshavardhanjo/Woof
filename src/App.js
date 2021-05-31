import Home  from "./Pages/Home/Home";
import React,{useState,useEffect} from 'react'
import firebase from 'firebase'
import { auth,db } from './firebase'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import SignUp from './Pages/SignUp/SignUp'
import Login from './Pages/Login/Login'
import {useStateValue} from './StateProvider'
import EditProfile from "./Pages/EditProfile/EditProfile";
import MyProfile from './Pages/MyProfile/MyProfile'

const  App = () => {

  const [{CurrentAuthUser}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
        if(authUser){
          //User is logged in
          dispatch({
            type: "SET_AUTH_USER",
            data: authUser,
          })
          console.log(authUser);
        }
        else{
          dispatch({
            type: "SET_AUTH_USER",
            data: null,
          })
        }
      });
    },[])

    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path = "/SignUp">
              <SignUp/>
            </Route>
  
            <Route exact path = "/Home">
              <Home/>
            </Route>
  
            <Route exact path = '/Login'>
              <Login/>
            </Route>
  
            <Route exact path = '/EditProfile'>
              <EditProfile/>
            </Route>
  
            <Route exact path = '/MyProfile'>
              <MyProfile/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
            
          
}

export default App;
