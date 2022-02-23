import React, { useEffect } from 'react';
import { useStateValue } from '../../StateProvider';
import { Container, Logo, Name, NavItems, NavSection1, NavSection2,NavLink, NavBarDropDown, NavBarDropDownItem } from './NavBarElements';
import { auth,firebase } from "../../Firebase";
import {useNavigate } from "react-router-dom";
import './NavBar.css';


const Navbar = () => {
    const [lattitude, setLattitude] = React.useState(0);
    const [longitude, setLongitude] = React.useState(0);
    const [{user,pet,location,city}, dispatch] = useStateValue('');
    const [toggle, setToggle] = React.useState(false);
    const navigate = useNavigate();

    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          position => {
            setLattitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          error => {
            console.log(error);
          },
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
        
      }, []);

      const handleToggle = (e) => {
        setToggle(!toggle);
      }

      const getLocation = (e) => {
        navigator.geolocation.getCurrentPosition(
          position => {
            setLattitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          error => {
            console.log(error);
          },
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
        let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lattitude},${longitude}&key=AIzaSyArGBLH2peMqqkooSiSWa-DrAovVQ4ydeA`;
        fetch(url)
          .then(res => res.json())
          .then(data => {
            let city = data['plus_code']['compound_code'].split(',')[0].split(' ')[1];
            let loc = data['results'][0]['formatted_address'];
            dispatch({
              type: "SET_LOCATION",
              lattitude: lattitude,
              longitude: longitude,
              city : city,
              location: loc,
            });
          })
          .catch(err => console.log(err));
    
        
    
      };
    const routeChange = (e,path) =>{
        navigate(path);
      }

      

    const handleLogin = () => {
        if(user)
        {
            console.log("Logout");
            auth.signOut();
            navigate('/');
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

  return <div className='navbar'>
          <NavSection1 >
              <Name onClick = {e => routeChange(e,'/')}>WOOF</Name>
              {city? <NavItems>{city}</NavItems> : <NavItems onClick = {e => getLocation(e)}>Choose your location</NavItems>}
          </NavSection1>

          <NavSection2>
                <NavItems onClick={e => routeChange(e,'/RegisterEnterprise')}>Register your Enterprise</NavItems>
                <NavItems>Need Help?</NavItems>
                {user ? <>
                  <NavItems onClick = {e => routeChange(e,'/Profile')}>Profile</NavItems>
                  <NavItems onClick={e => routeChange(e,'/Favourites')}>Favourites</NavItems>
                  <NavItems onClick={e => routeChange(e,'/Bookings')}>Bookings</NavItems>
                  </> : null}
                <NavItems onClick = {(e) => handleLogin(e)}>{user? 'Logout' : 'Login'}</NavItems>
                
                
          </NavSection2>
  </div>;
};

export default Navbar;
