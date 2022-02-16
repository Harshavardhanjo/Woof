import React from 'react';
import Vendor from '../../Components/Vendor/Vendor';
import MiniProfile from '../../Components/MiniProfile/MiniProfile';
import { DisplayVendorContainer, DisplayVendorResult, DisplayVendorResultButton, DisplayVendorSelectedService, DisplayVendorServiceDropdown, DisplayVendorServiceDropdownOption, DisplayVendorTopBar, DisplayVendorTopBarLeft, DisplayVendorTopBarRight } from './DisplayVendorElements';
import { useStateValue } from '../../StateProvider';
import { useEffect,useState } from 'react';
import './DisplayVendor.css'
import axios from 'axios';

const DisplayVendors = () => {

  const [{all_services,all_pets,service,pet,lattitude,longitude,location,selectedVendor,city,all_sort,sort},dispatch] = useStateValue();
  const [data,setData] = useState(null);
  
  const toVendorStart = () => {
    console.log('toVendorStart',sort);
    var details = {
      service: service,
      lattitude: lattitude,
      longitude: longitude,
      location: location,
      city : city.toLowerCase(),
      pet : pet,
      sort : sort,
    }
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
    toVendorStart();
  }, []);

  const toVendorService = (e) => {
    console.log('tovendorservice',e);
    var details = {
      service: e,
      lattitude: lattitude,
      longitude: longitude,
      location: location,
      city : city.toLowerCase(),
      pet : pet,
      sort : sort,
    }
    dispatch({
      type : "SET_SERVICE",
      service: e,
    });
    dispatch({
      type : "SET_SELECTED_VENDOR",
      selectedVendor: null,
    });
    axios.post('http://127.0.0.1:5000/fetchVendors', details).then(function(response){
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
    const toVendorPet = (e) => {
      console.log('tovendorservice',e);
      var details = {
        service: service,
        lattitude: lattitude,
        longitude: longitude,
        location: location,
        city : city.toLowerCase(),
        pet : e,
        sort : sort,
      }
      dispatch({
        type : "SET_PET",
        pet: e,
      });
      dispatch({
        type : "SET_SELECTED_VENDOR",
        selectedVendor: null,
      });
      axios.post('http://127.0.0.1:5000/fetchVendors', details).then(function(response){
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
      const toVendorSort = (e) => {
        console.log('tovendorsort called',e);
        var details = {
          service: service,
          lattitude: lattitude,
          longitude: longitude,
          location: location,
          city : city.toLowerCase(),
          pet : pet,
          sort : e,
        }
        dispatch({
          type : "SET_SORT",
          sort: e,
        });
        dispatch({
          type : "SET_SELECTED_VENDOR",
          selectedVendor: null,
        });
        axios.post('http://127.0.0.1:5000/fetchVendors', details).then(function(response){
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

 
  return <div>
    <DisplayVendorTopBar>
      <DisplayVendorTopBarLeft>
        <DisplayVendorServiceDropdown value = {pet} onChange={e => toVendorPet(e.target.value)}>
          {all_pets.map((pet,index) => {
            return <DisplayVendorServiceDropdownOption key={index} value = {pet}>{pet}</DisplayVendorServiceDropdownOption>
          })}
        </DisplayVendorServiceDropdown>


        <DisplayVendorServiceDropdown value = {service} onChange={e => toVendorService(e.target.value)}>
          {all_services.map((service,index) => {
            return <DisplayVendorServiceDropdownOption key={index} value = {service}>{service}</DisplayVendorServiceDropdownOption>
          })}
        </DisplayVendorServiceDropdown>
      </DisplayVendorTopBarLeft>

      <DisplayVendorTopBarRight>
      <DisplayVendorServiceDropdown value = {sort} onChange={e => toVendorSort(e.target.value)}>
      {all_sort.map((sort,index) => {
            return <DisplayVendorServiceDropdownOption key={index} value = {sort}>{sort}</DisplayVendorServiceDropdownOption>
          })}
        </DisplayVendorServiceDropdown>
      </DisplayVendorTopBarRight>
    </DisplayVendorTopBar>
    <DisplayVendorContainer>
      {data != null ?<div className='vendor'>{data != null ? <Vendor className='vendor' data = {data}  /> : <div >Loading</div>}</div> : <div>No services currently available</div>}
      { selectedVendor != null ? <div className='mini'>{selectedVendor != null ? <MiniProfile className='mini' data = {data}  /> : null}</div> : null}
    </DisplayVendorContainer>
  </div>;
};

export default DisplayVendors;
