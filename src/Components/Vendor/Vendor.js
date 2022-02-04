import React from 'react';
import { VendorCard, Vendorheader, VendorName, VendorType,VendorRating, VendorCarousel, VendorCarouselImg, VendorCarouselTab, VendorCarouselButton, VendorButtonTab,VendorButton, VendorContainer } from './VendorElements';
import axios from 'axios';
import {useStateValue} from '../../StateProvider'
import { useState,useEffect } from "react";


const Card = ({data}) => {

  const [{SelectedVendor},dispatch] = useStateValue();

  const setVendor = (e,v) => {
    e.preventDefault();
    console.log('vendorindex',v);
    dispatch({
      type: "SET_SELECTED_VENDOR",
      selectedVendor: v,
    });
  }
  return <div>
    <VendorContainer>
    {console.log('vendornames',data)}
    {console.log('type',typeof(data))}
    {data != null ? data.map(function(name,index) {
      return <div>
      <VendorCard key={index} onClick = {(e) =>setVendor(e,index)}>
        <Vendorheader>
          <VendorName>{data[index].Name}</VendorName>
          <VendorType>notSet</VendorType>
          <VendorRating>{data[index].Rating}</VendorRating>
        </Vendorheader>
        <VendorCarousel>
          <VendorCarouselImg src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          <VendorCarouselTab>
            <VendorCarouselButton src = 'https://cdn.iconscout.com/icon/premium/png-256-thumb/next-back-arrow-navigation-direction-right-38179.png'/>
            <VendorCarouselButton src = 'https://cdn.iconscout.com/icon/premium/png-256-thumb/next-back-arrow-navigation-direction-right-38179.png'/>
          </VendorCarouselTab>
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
