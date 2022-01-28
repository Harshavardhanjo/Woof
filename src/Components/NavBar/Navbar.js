import React, { useEffect } from 'react';
import { useStateValue } from '../../StateProvider';
import { Container, Logo, Name, NavItems, NavSection1, NavSection2 } from './NavBarElements';
import { auth,firebase } from "../../Firebase";
import { useHistory} from "react-router-dom";


const Navbar = () => {

    const [{user},dispatch] = useStateValue();
    const history = useHistory();

    const routeChange = (e) =>{ 
        console.log('clicked');
        let path = `/Profile/${user.uid}`;
        window.location.replace(path);
      }

    const handleLogin = () => {
        if(user)
        {
            console.log("Logout");
            auth.signOut();
        }

        else{
            var provider = new firebase.auth.GoogleAuthProvider();
            auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type : "SET_USER",
                    user : result.user
                    })
                })
            }
        }

        useEffect(() => {
            auth.onAuthStateChanged(user => {
                dispatch({
                    type : "SET_USER",
                    user : user
                })
            })
        },[])

  return <div>
      <Container>
          <NavSection1>
              <Logo/>
              <Name>WOOF</Name>
          </NavSection1>

          <NavSection2>
                <NavItems>Register your Enterprise</NavItems>
                <NavItems>Need Help?</NavItems>
                {user ? <NavItems onClick = {e => routeChange(e)}>{user.displayName}</NavItems> : null}
                {!user ? <NavItems onClick = {e => handleLogin(e)}>Login/Sign Up</NavItems> : <NavItems onClick = {e => handleLogin(e)}>Logout</NavItems>}
          </NavSection2>
      </Container>
  </div>;
};

export default Navbar;
