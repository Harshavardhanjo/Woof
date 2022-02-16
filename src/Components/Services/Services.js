import { Container,Icon,IconTab,Name,Row1,Row2 } from "./ServicesElements";
import {FaBeer} from 'react-icons/fa';
import {useStateValue} from '../../StateProvider'
import './Services.css'
import React from 'react';
import { useState,useEffect } from "react";
import {db} from '../../Firebase';
import loading from '../../img/loading.gif';
import {useNavigate} from 'react-router-dom';
import axios from "axios";
const Services = () => {

  const [{pet,lattitude,longitude,location}, dispatch] = useStateValue();
  const [services, setServices] = useState([]);
  const [serviceName, setServiceName] = useState([]);
  let navigate = useNavigate();
  
  const setService = (e,s) => {
    e.preventDefault();
    navigate('/Vendors');
    dispatch({
      type: "SET_SERVICE",
      service: s,
    });
  }

  async function getServiceImages() {
    let serviceimages = null;
    setServices([]);
    setServiceName([]);
    serviceimages = await db.collection('Images').doc(pet).get()
    let data = serviceimages.data();
    var keys = Object.keys(data);
    Object.keys(data).map(function(key,index) {
      setServices(prevState => [...prevState, data[key]])
      setServiceName(prevState => [...prevState, key])
    })
    dispatch({
      type : "SET_SERVICES",
      all_services : keys,
    })
  }

  useEffect(() => {
    getServiceImages();
  }, [pet]);


  return <div className="Services">
    <Container>
      <Row1>
        {services != [] ? services.map((service,index) => {
          return <IconTab key={index} onClick = {e => setService(e,serviceName[index])}>
              <Icon src={services[index]}/>
              <Name>{serviceName[index]}</Name>
          </IconTab>
        }) : <Icon src={loading}/>}
        
      </Row1>
    </Container>
  </div>;
};

export default Services;

