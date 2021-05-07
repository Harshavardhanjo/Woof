import logo from './logo.svg';
import './App.css';
import SignIn from './SignIn/SignIn'
import SignUp from './Signup/SignUp'
import Home from './Home/Home'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignInSide from './SignIn/SignIn';
import {useStateValue} from './StateProvider'
import {auth} from './firebase'
import {useEffect} from 'react'

function App() {

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
          user: [],
        })
      }
    });
  },[]);


  console.log("User is",user);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = '/pets'>
          </Route>

          <Route exact path = '/SignIn'>
            <SignIn/>
          </Route>

          <Route exact path = '/SignUp'>
            <SignUp/>
          </Route>

          <Route exact path = '/Home'>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
