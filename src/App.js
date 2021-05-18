import Home  from "./Pages/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import SignUp from './Pages/SignUp/SignUp'

function App() {
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

        </Switch>
      </Router>
    </div>
  );
}

export default App;
