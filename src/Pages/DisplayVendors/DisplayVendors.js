import React from 'react';
import Vendor from '../../Components/Vendor/Vendor';
import MiniProfile from '../../Components/MiniProfile/MiniProfile';
import { DisplayVendorContainer, DisplayVendorLoading, DisplayVendorLoadingImg, DisplayVendorLoadingText, DisplayVendorResult, DisplayVendorResultButton, DisplayVendorSelectedService, DisplayVendorServiceDropdown, DisplayVendorServiceDropdownOption, DisplayVendorTopBar, DisplayVendorTopBarLeft, DisplayVendorTopBarRight } from './DisplayVendorElements';
import { useStateValue } from '../../StateProvider';
import { useEffect,useState } from 'react';
import './DisplayVendor.css'
import axios from 'axios';
import loading2 from '../../img/loading2.gif';

const DisplayVendors = () => {

  const [{all_services,all_pets,service,pet,selectedVendor,all_sort,sort,mini},dispatch] = useStateValue();
  
  const toVendorStart = () => {
    var details = {
      service: service,
      lattitude: localStorage.getItem('lattitude'),
      longitude: localStorage.getItem('longitude'),
      location: localStorage.getItem('location'),
      city : localStorage.getItem('city').toLowerCase(),
      pet : pet,
      sort : sort,
    }
    axios.post('http://127.0.0.1:5000/fetchVendors', details).then(function(response){
      var tempdata = []
      for(var i=0;i<Object.keys(response.data).length;i++){
        tempdata.push(response.data[i]);
      }
      dispatch({
        type : "SET_MINI",
        mini : tempdata,
      })
    }).catch(function(error){
        console.log(error);
      });
      
    }

  useEffect(() => {
    toVendorStart();
  }, []);

  const toVendorService = (e) => {
    localStorage.setItem('service',e);
    var details = {
      service: e,
      lattitude: localStorage.getItem('lattitude'),
      longitude: localStorage.getItem('longitude'),
      location: localStorage.getItem('location'),
      city : localStorage.getItem('city').toLowerCase(),
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
      }
      dispatch({
        type : "SET_MINI",
        mini : tempdata,
      })
    }).catch(function(error){
        console.log(error);
      });
      
    }
    const toVendorPet = (e) => {
      localStorage.setItem('pet',e);
      var details = {
        service: service,
        lattitude: localStorage.getItem('lattitude'),
        longitude: localStorage.getItem('longitude'),
        location: localStorage.getItem('location'),
        city : localStorage.getItem('city').toLowerCase(),
        pet : pet,
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
        }
        dispatch({
          type : "SET_MINI",
          mini : tempdata,
        })
      }).catch(function(error){
          console.log(error);
        });
        
      }
      const toVendorSort = (e) => {
        localStorage.setItem('sort',e);
        var details = {
          service: service,
          lattitude: localStorage.getItem('lattitude'),
          longitude: localStorage.getItem('longitude'),
          location: localStorage.getItem('location'),
          city : localStorage.getItem('city').toLowerCase(),
          pet : pet,
          sort : sort,
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
          }
          dispatch({
            type : "SET_MINI",
            mini : tempdata,
          })
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
      {mini != null ?<div className='vendor'>{mini != null ? <Vendor className='vendor'/> : <div >Loading</div>}</div> : <DisplayVendorLoading>
        <DisplayVendorLoadingImg src = {loading2}/></DisplayVendorLoading>}
      { selectedVendor != null ? <div className='mini'>{mini != null || mini != [] ? <MiniProfile className='mini'/> : null}</div> : null}
    </DisplayVendorContainer>
  </div>;
};

export default DisplayVendors;
