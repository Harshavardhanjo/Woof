import React from 'react';
import { VendorCard, Vendorheader, VendorName, VendorType,VendorRating, VendorCarousel, VendorCarouselImg, VendorCarouselTab, VendorCarouselButton, VendorButtonTab,VendorButton, VendorContainer } from './VendorElements';
import axios from 'axios';
import {useStateValue} from '../../StateProvider'
import { useState,useEffect } from "react";


const Vendor= () => {

  const [{SelectedVendor,mini},dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type : 'SET_SELECTED_VENDOR',
      selectedVendor : null,
    });
  },[])

  const setVendor = (e,v) => {
    console.log('v',v)
    e.preventDefault();
    dispatch({
      type: "SET_SELECTED_VENDOR",
      selectedVendor: v,
    });
  }
  return <div>
    <VendorContainer>
    {mini != null ? mini.map(function(name,index) {
      return <div>
      <VendorCard key={index} onClick = {(e) =>setVendor(e,index)}>
        <Vendorheader>
          <VendorName>{mini[index].Name}</VendorName>
          <VendorType>{mini[index].Distance} miles</VendorType>
          <VendorRating>{mini[index].Rating}</VendorRating>
        </Vendorheader>
        <VendorCarousel>
          <VendorCarouselImg src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </VendorCarousel>

      </VendorCard>

      <VendorCard key={index} onClick = {(e) =>setVendor(e,index)}>
        <Vendorheader>
          <VendorName>{mini[index].Name}</VendorName>
          <VendorType>{mini[index].Distance} miles</VendorType>
          <VendorRating>{mini[index].Rating}</VendorRating>
        </Vendorheader>
        <VendorCarousel>
          <VendorCarouselImg src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </VendorCarousel>

      </VendorCard>

      <VendorCard key={index} onClick = {(e) =>setVendor(e,index)}>
        <Vendorheader>
          <VendorName>{mini[index].Name}</VendorName>
          <VendorType>{mini[index].Distance} miles</VendorType>
          <VendorRating>{mini[index].Rating}</VendorRating>
        </Vendorheader>
        <VendorCarousel>
          <VendorCarouselImg src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </VendorCarousel>

      </VendorCard>
      </div>
    }) : <h1>Woses</h1>}

    
    
    </VendorContainer>
  </div>;
};

export default Vendor;
