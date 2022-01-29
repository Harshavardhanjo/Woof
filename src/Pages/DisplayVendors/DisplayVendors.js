import React from 'react';
import Vendor from '../../Components/Vendor/Vendor';
import MiniProfile from '../../Components/MiniProfile/MiniProfile';
import { DisplayVendorContainer } from './DisplayVendorElements';

const DisplayVendors = () => {
  return <div>
    <h1>Search Results:</h1>
    <DisplayVendorContainer>
      <Vendor />
      <MiniProfile />
    </DisplayVendorContainer>
  </div>;
};

export default DisplayVendors;
