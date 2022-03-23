import {useNavigate} from "react-router-dom";
import React from "react";



const RouteChange = (e,path) =>{
    const navigate = useNavigate();
    console.log('route to',path);
    navigate(path);
  }

export default RouteChange;