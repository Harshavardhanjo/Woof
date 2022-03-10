import React from 'react';
import { MiniProfileButtonHolder,MiniProfileButton, MiniProfileContainer, MiniProfileCoverPhoto, MiniProfileCoverTab, MiniProfileHeader, MiniProfileHeaderName, MiniProfileIconsTab, MiniProfileCarousel, MiniProfileHeaderWrapper, MiniProfileBody, MiniProfileBodyContent, MiniProfileIcons, MiniprofileTopBar, MiniprofileTopBarLeft, MiniProfileTopIcon, MiniprofileTopBarRight, MiniProfileHeaderRating, MiniProfileServiceHolder, MiniProfileBookButton, MiniProfileMessageButton, MiniProfileMapsButton } from './MiniProfileElements';
import { useStateValue } from '../../StateProvider';
import star_before from '../../img/star_before.png';
import close from '../../img/close.png';
import Posts from '../Posts/Posts';
import warning from '../../img/warning.png';
import {useNavigate } from "react-router-dom";
const MiniProfile = ({data}) => {

  const [{selectedVendor},dispatch] = useStateValue();
  const navigate = useNavigate();

  const setVendor = (e) => {
    e.preventDefault();
    dispatch({
      type : 'SET_SELECTED_VENDOR',
      selectedVendor : null,
    });
  }

  const toVendorProfile = (e) => {
    e.preventDefault();
    navigate(`/vendorprofile/${data[selectedVendor].Name}`);
  }

  return <div>
      <MiniProfileContainer>
        <MiniprofileTopBar>
          <MiniprofileTopBarLeft>
            <MiniProfileTopIcon src ={close} onClick = {(e) => setVendor(e)}/>
          </MiniprofileTopBarLeft>
          <MiniprofileTopBarRight>
            <MiniProfileTopIcon src = {star_before}/>
            <MiniProfileTopIcon src = {warning}/>
          </MiniprofileTopBarRight>
        </MiniprofileTopBar>
          <MiniProfileCoverTab>
              <MiniProfileCoverPhoto src = 'https://images.unsplash.com/photo-1643819179372-1f696a1dfa31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'/>
            </MiniProfileCoverTab>
            <MiniProfileHeader>
                <MiniProfileHeaderWrapper>
                    <MiniProfileHeaderName>{data[selectedVendor].Name}</MiniProfileHeaderName>
                    <MiniProfileHeaderRating>{data[selectedVendor].Rating}/5</MiniProfileHeaderRating>
                </MiniProfileHeaderWrapper>
                  
                  <MiniProfileButtonHolder>
                      <MiniProfileBookButton>Follow</MiniProfileBookButton>
                    <MiniProfileMessageButton onClick={(e) => toVendorProfile(e)}>View Profile</MiniProfileMessageButton>
                    <MiniProfileMapsButton>Maps</MiniProfileMapsButton>
                  </MiniProfileButtonHolder>
              </MiniProfileHeader>

              <MiniProfileBody>
                  <MiniProfileBodyContent>{data[selectedVendor].Address}</MiniProfileBodyContent>
                  <MiniProfileBodyContent>{data[selectedVendor].Open[0]} - {data[selectedVendor].Open[1]}</MiniProfileBodyContent>
                  <MiniProfileBodyContent><b>other services:</b></MiniProfileBodyContent>
                  <MiniProfileServiceHolder>{data[selectedVendor].Services.map((service,index) => {
                    return <MiniProfileButton key = {index}>{service}</MiniProfileButton>})}</MiniProfileServiceHolder>
                     <MiniProfileBodyContent><b>Posts</b></MiniProfileBodyContent>
                  <Posts/>
              </MiniProfileBody>

              
          
      </MiniProfileContainer>
  </div>;
};

export default MiniProfile;
