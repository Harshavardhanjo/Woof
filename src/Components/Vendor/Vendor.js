import React from 'react';
import { VendorCard, Vendorheader, VendorName, VendorType,VendorRating, VendorCarousel, VendorCarouselImg, VendorCarouselTab, VendorCarouselButton, VendorButtonTab,VendorButton } from './VendorElements';

const Card = () => {
  return <div>
    <VendorCard>
      <Vendorheader>
        <VendorName>harsha</VendorName>
        <VendorType>enterprise</VendorType>
        <VendorRating>4.5</VendorRating>
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
  </div>;
};

export default Card;
