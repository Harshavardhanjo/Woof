import React from 'react';
import { MiniProfileButtonHolder,MiniProfileButton, MiniProfileContainer, MiniProfileCoverPhoto, MiniProfileCoverTab, MiniProfileHeader, MiniProfileHeaderName, MiniProfileIconsTab, MiniProfileCarousel, MiniProfileHeaderWrapper, MiniProfileBody, MiniProfileBodyContent, MiniProfileIcons, MiniprofileTopBar, MiniprofileTopBarLeft, MiniProfileTopIcon, MiniprofileTopBarRight, MiniProfileHeaderRating, MiniProfileServiceHolder } from './MiniProfileElements';
import { useStateValue } from '../../StateProvider';
import close from '../../img/close.png';
import star_after from '../../img/star_after.png';
import star_before from '../../img/star_before.png';
import warning from '../../img/warning.png';
const MiniProfile = ({data}) => {

  const [{selectedVendor},dispatch] = useStateValue();

  const setVendor = (e) => {
    e.preventDefault();
    dispatch({
      type : 'SET_SELECTED_VENDOR',
      selectedVendor : null,
    });
  }
  return <div>
    {console.log('data',data)}
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
                      <MiniProfileButton>book</MiniProfileButton>
                    <MiniProfileButton>message</MiniProfileButton>
                    <MiniProfileButton>GMaps</MiniProfileButton>
                  </MiniProfileButtonHolder>
              </MiniProfileHeader>

              <MiniProfileBody>
                  <MiniProfileBodyContent>address:</MiniProfileBodyContent>
                  <MiniProfileBodyContent>open:</MiniProfileBodyContent>
                  <MiniProfileBodyContent>other services:</MiniProfileBodyContent>
                  <MiniProfileServiceHolder>{data[selectedVendor].Services.map((service,index) => {
                    return <MiniProfileButton key = {index}>{service}</MiniProfileButton>})}</MiniProfileServiceHolder>
                  
              </MiniProfileBody>

              
          
      </MiniProfileContainer>
  </div>;
};

export default MiniProfile;
