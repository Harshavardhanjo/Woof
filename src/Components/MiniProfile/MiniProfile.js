import React from 'react';
import { MiniProfileButtonHolder,MiniProfileButton, MiniProfileContainer, MiniProfileCoverPhoto, MiniProfileCoverTab, MiniProfileHeader, MiniProfileHeaderName, MiniProfileIconsTab, MiniProfileCarousel, MiniProfileHeaderWrapper, MiniProfileBody, MiniProfileBodyContent, MiniProfileIcons, MiniprofileTopBar, MiniprofileTopBarLeft, MiniProfileTopIcon, MiniprofileTopBarRight, MiniProfileHeaderRating, MiniProfileServiceHolder, MiniProfileBookButton, MiniProfileMessageButton, MiniProfileMapsButton, MiniProfileContactHolder, MiniProfileContact } from './MiniProfileElements';
import { useStateValue } from '../../StateProvider';
import star_before from '../../img/star_before.png';
import close from '../../img/close.png';
import Posts from '../Posts/Posts';
import warning from '../../img/warning.png';
import {useNavigate } from "react-router-dom";
import Instagram from '../../img/instagram.png';
import Facebook from '../../img/facebook.png';
import Twitter from '../../img/twitter.png';
import Youtube from '../../img/youtube.png';
import Linkedin from '../../img/linkedin.png';
import Whatsapp from '../../img/whatsapp.png';
const MiniProfile = () => {

  const [{selectedVendor,mini},dispatch] = useStateValue();
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
    navigate(`/vendorprofile/${mini[selectedVendor].Name}`);
  }

  const routeChange = (e,path) => {
    e.preventDefault();
    window.open(path);
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
                    <MiniProfileHeaderName>{mini[selectedVendor].Name}</MiniProfileHeaderName>
                    <MiniProfileHeaderRating>{mini[selectedVendor].Rating}/5</MiniProfileHeaderRating>
                </MiniProfileHeaderWrapper>
                  
                  <MiniProfileButtonHolder>
                      <MiniProfileBookButton>Follow</MiniProfileBookButton>
                    <MiniProfileMessageButton onClick={(e) => toVendorProfile(e)}>View Profile</MiniProfileMessageButton>
                    <MiniProfileMapsButton>Maps</MiniProfileMapsButton>
                  </MiniProfileButtonHolder>
              </MiniProfileHeader>

              <MiniProfileBody>
                  <MiniProfileBodyContent>{mini[selectedVendor].Address}</MiniProfileBodyContent>
                  <MiniProfileBodyContent><b>Open Time: </b>{mini[selectedVendor].Open[0]} - {mini[selectedVendor].Open[1]}</MiniProfileBodyContent>
                  <MiniProfileContactHolder>
                    {mini[selectedVendor].Contact.map((contact,index) => {
                      console.log(contact);
                      if(contact.Name == 'Instagram'){
                        return <MiniProfileContact src = {Instagram} onClick = {e => routeChange(e,contact.Link)}/>
                      }
                      if(contact == 'Facebook'){
                        return <MiniProfileContact src = {Facebook}/>
                      }
                      if(contact == 'Twitter'){
                        return <MiniProfileContact src = {Twitter}/>
                      }
                      if(contact == 'Youtube'){
                        return <MiniProfileContact src = {Youtube}/>
                      }
                      if(contact == 'Linkedin'){
                        return <MiniProfileContact src = {Linkedin}/>
                      }
                      if(contact == 'Whatsapp'){
                        return <MiniProfileContact src = {Whatsapp}/>
                      }
                    })}
                  </MiniProfileContactHolder>
                  <MiniProfileServiceHolder><b>Services :&nbsp;</b>{mini[selectedVendor].Services.map((service,index) => {
                    return <MiniProfileButton key = {index}>{service}</MiniProfileButton>})}</MiniProfileServiceHolder>
                     <MiniProfileBodyContent><b>Posts</b></MiniProfileBodyContent>
                  <Posts/>
              </MiniProfileBody>

              
          
      </MiniProfileContainer>
  </div>;
};

export default MiniProfile;
