import React from 'react';
import Vendor from '../../Components/Vendor/Vendor';
import MiniProfile from '../../Components/MiniProfile/MiniProfile';
import { DisplayVendorContainer, DisplayVendorResult, DisplayVendorResultButton, DisplayVendorSelectedService, DisplayVendorServiceDropdown, DisplayVendorServiceDropdownOption, DisplayVendorTopBar, DisplayVendorTopBarLeft, DisplayVendorTopBarRight } from './DisplayVendorElements';
import { useStateValue } from '../../StateProvider';

const DisplayVendors = () => {

  const [{service},dispatch] = useStateValue();
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
      <Vendor />
      <MiniProfile />
    </DisplayVendorContainer>
  </div>;
};

export default DisplayVendors;
