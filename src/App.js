import Home  from "./Pages/Home/Home";
import React,{useState,useEffect} from 'react'
import firebase from 'firebase'
import { auth } from './firebase'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import SignUp from './Pages/SignUp/SignUp'
import Login from './Pages/Login/Login'
import Tags from "./Pages/Tags/Tags";
import {useStateValue} from './StateProvider'


const App = () => {

  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
        if(authUser){
          //User is logged in
          dispatch({
            type: "SET_USER",
            user: authUser,
          })
          console.log(authUser);
        }
        else{
          //No one is
          dispatch({
            type: "SET_USER",
            user: null,
          })
        }
      });
    },[]);


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

          <Route exact path = '/Tags'>
            <Tags/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
