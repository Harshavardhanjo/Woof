import React, { useEffect } from 'react';
import { useStateValue } from '../../StateProvider';
import {NavItems, NavSection1, NavSection2,NavContainer, NavSection3, Logo, Name, NavBarDropDownContainer, NavBarDropDownItem } from './NavBarElements';
import { auth,firebase } from "../../Firebase";
import {useNavigate } from "react-router-dom";
import './NavBar.css';
import axios from 'axios';
import settings from '../../img/settings.png';

const Navbar = () => {
    const [lattitude, setLattitude] = React.useState(0);
    const [longitude, setLongitude] = React.useState(0);
    const [city, setCity] = React.useState(null);
    const [{user}, dispatch] = useStateValue('');
    const [toggle, setToggle] = React.useState(false);
    const navigate = useNavigate();

    // React.useEffect(() => {
    //   if(localStorage.getItem('lattitude') === null){
    //     alert("Please allow access to your location, we need it to show you the nearest vendors");
    //     navigator.geolocation.getCurrentPosition(
    //       position => {
    //         setLattitude(position.coords.latitude);
    //         setLongitude(position.coords.longitude);
    //         localStorage.setItem('lattitude',position.coords.latitude);
    //         localStorage.setItem('longitude',position.coords.longitude);
    //         dispatch({
    //           type: "SET_LOCATION",
    //           lattitude: position.coords.latitude,
    //           longitude: position.coords.longitude,
    //         });

    //       },
    //       error => {
    //         console.log(error);
    //       },
    //       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    //     );
    //   }

    //   else{
    //     setLattitude(localStorage.getItem('lattitude'));
    //     setLongitude(localStorage.getItem('longitude'));
    //     setCity(localStorage.getItem('city'));
    //   }
        
    //   }, []);

    //   const handleToggle = (e) => {
    //     setToggle(!toggle);
    //   }

    //   const getLocation = (e) => {
    //     var details = {
    //       lattitude: lattitude,
    //       longitude: longitude,
    //     }
    //     axios.post('http://127.0.0.1:5000/GetLocation', details).then(function(response){
    //       console.log('res',response.data)
    //       dispatch({
    //         type : "SET_LOCATION",
    //         location: response.data.location,
    //         city: response.data.city,
    //       });
    //       localStorage.setItem('location',response.data.location);
    //       localStorage.setItem('city',response.data.city);
    //       setCity(response.data.city);


    //   }).catch(function(error){
    //       console.log(error);
    //     });
    //   }
    const routeChange = (e,path) =>{
        navigate(path);
      }

    const handleDropdown = (e) => {
        setToggle(!toggle);
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


  return <div>
          {/* <NavSection1 >
          </NavSection1>

          <NavSection2>
                <NavItems onClick={e => routeChange(e,'/RegisterEnterprise')}>Register your Enterprise</NavItems>
                <NavItems onClick={e => routeChange(e,'/Bookings')}>Book an Appointement</NavItems>
                
                {user ? <>
                  <NavItems onClick = {e => routeChange(e,`/Profile`)}>{user.displayName}</NavItems>
                  </> : null}
                  <NavItems>Need Help?</NavItems>
                <NavItems onClick = {(e) => handleLogin(e)}>{user? 'Logout' : 'Login'}</NavItems>
                
                
          </NavSection2> */}
          
          <NavContainer>
            <NavSection1>
              <Name onClick={(e) => routeChange(e,'/')}>WOOF</Name>
            </NavSection1>
            <NavSection2>
              <NavItems>Services</NavItems>
              <NavItems>Your Feed</NavItems>
              <NavItems>Browse</NavItems>
            </NavSection2>
            <NavSection3>
              <NavBarDropDownContainer>
                {toggle ? <><NavBarDropDownItem onClick = {(e) => routeChange(e,'/Profile')}>Profile</NavBarDropDownItem>
                <NavBarDropDownItem>Settings</NavBarDropDownItem>
                <NavBarDropDownItem onClick = {(e) => handleDropdown(e)} >Back</NavBarDropDownItem></> : <NavBarDropDownItem onClick = {(e) => handleDropdown(e)}>Name</NavBarDropDownItem>}
              </NavBarDropDownContainer>
            </NavSection3>
          </NavContainer>
  </div>;
};

export default Navbar;
