import React from 'react';
import Vendor from '../../Components/Vendor/Vendor';
import MiniProfile from '../../Components/MiniProfile/MiniProfile';
import { DisplayVendorContainer, DisplayVendorResult, DisplayVendorResultButton, DisplayVendorSelectedService, DisplayVendorServiceDropdown, DisplayVendorServiceDropdownOption, DisplayVendorTopBar, DisplayVendorTopBarLeft, DisplayVendorTopBarRight } from './DisplayVendorElements';
import { useStateValue } from '../../StateProvider';
import { useEffect,useState } from 'react';
import './DisplayVendor.css'
import axios from 'axios';

const DisplayVendors = () => {

  const [{service,pet,lattitude,longitude,location,selectedVendor},dispatch] = useStateValue();
  const [data,setData] = useState(null);
  
  const toVendor = () => {
    var details = {
      service: service,
      lattitude: lattitude,
      longitude: longitude,
      location: location.toLowerCase(),
      pet : pet
    }
    console.log('Displayvendor.js',details);
    axios.post('http://127.0.0.1:5000/fetchVendors', details).then(function(response){
      console.log('res',response.data)
      var tempdata = []
      for(var i=0;i<Object.keys(response.data).length;i++){
        tempdata.push(response.data[i]);
        console.log(i,tempdata);
      }
      console.log('tempdata',tempdata);
      setData(tempdata);
    }).catch(function(error){
        console.log(error);
      });
    }

  useEffect(() => {
    toVendor();
  }, []);

 
  return <div>
    <DisplayVendorTopBar>
      <DisplayVendorTopBarLeft>
        <DisplayVendorServiceDropdown>
          <DisplayVendorServiceDropdownOption>All</DisplayVendorServiceDropdownOption>
          <DisplayVendorServiceDropdownOption>Hair</DisplayVendorServiceDropdownOption>
          <DisplayVendorServiceDropdownOption>Nails</DisplayVendorServiceDropdownOption>
          <DisplayVendorServiceDropdownOption>Spa</DisplayVendorServiceDropdownOption>
          <DisplayVendorServiceDropdownOption>Skin</DisplayVendorServiceDropdownOption>
        </DisplayVendorServiceDropdown>
        <DisplayVendorResult placeholder='search'/>
        <DisplayVendorResultButton>Search</DisplayVendorResultButton>
      </DisplayVendorTopBarLeft>

      <DisplayVendorTopBarRight>
        <DisplayVendorSelectedService>Service</DisplayVendorSelectedService>
      </DisplayVendorTopBarRight>
    </DisplayVendorTopBar>
    <DisplayVendorContainer>
      {data != null ?<div className='vendor'>{data != null ? <Vendor className='vendor' data = {data}  /> : <div >Loading</div>}</div> : <div>No services currently available</div>}
      { selectedVendor != null ? <div className='mini'>{selectedVendor != null ? <MiniProfile className='mini' data = {data}  /> : null}</div> : null}
    </DisplayVendorContainer>
  </div>;
};

export default DisplayVendors;
