import React from 'react';
import { VendorCard, Vendorheader, VendorName, VendorType,VendorRating, VendorCarousel, VendorCarouselImg, VendorCarouselTab, VendorCarouselButton, VendorButtonTab,VendorButton, VendorContainer } from './VendorElements';
import axios from 'axios';
import {useStateValue} from '../../StateProvider'
import { useState,useEffect } from "react";


const Card = ({data}) => {

  const [{SelectedVendor},dispatch] = useStateValue();

  const setVendor = (e,v) => {
    e.preventDefault();
    dispatch({
      type: "SET_SELECTED_VENDOR",
      selectedVendor: v,
    });
  }
  return <div>
    <VendorContainer>
    {data != null ? data.map(function(name,index) {
      return <div>
      <VendorCard key={index} onClick = {(e) =>setVendor(e,index)}>
        <Vendorheader>
          <VendorName>{data[index].Name}</VendorName>
          <VendorType>{data[index].Distance} miles</VendorType>
          <VendorRating>{data[index].Rating}</VendorRating>
        </Vendorheader>
        <VendorCarousel>
          <VendorCarouselImg src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </VendorCarousel>

        <VendorButtonTab>
          <VendorButton>Book</VendorButton>
          <VendorButton>Contact</VendorButton>
        </VendorButtonTab>
      </VendorCard>
      </div>
    }) : <h1>Woses</h1>}

    
    
    </VendorContainer>
  </div>;
};

export default Card;
