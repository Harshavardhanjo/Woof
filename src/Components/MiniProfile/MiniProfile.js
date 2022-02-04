import React from 'react';
import { MiniProfileButtonHolder,MiniProfileButton, MiniProfileContainer, MiniProfileCoverPhoto, MiniProfileCoverTab, MiniProfileHeader, MiniProfileHeaderName, MiniProfileIconsTab, MiniProfileCarousel, MiniProfileHeaderWrapper, MiniProfileBody, MiniProfileBodyContent, MiniProfileIcons, MiniprofileTopBar, MiniprofileTopBarLeft, MiniProfileTopIcon } from './MiniProfileElements';
import { useStateValue } from '../../StateProvider';
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
            <MiniProfileTopIcon src = '' onClick = {(e) => setVendor(e)}/>
            <MiniProfileTopIcon src = ''/>
            <MiniProfileTopIcon src = ''/>
          </MiniprofileTopBarLeft>
        </MiniprofileTopBar>
          <MiniProfileCoverTab>
              <MiniProfileIconsTab>
                <MiniProfileIcons src = ''/>
                <MiniProfileIcons src = ''/>
              </MiniProfileIconsTab>
              <MiniProfileCoverPhoto src = 'https://images.unsplash.com/photo-1643819179372-1f696a1dfa31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'/>
              <MiniProfileCarousel>next</MiniProfileCarousel>
            </MiniProfileCoverTab>
            <MiniProfileHeader>
                <MiniProfileHeaderWrapper>
                    <MiniProfileHeaderName>{data[selectedVendor].Name}</MiniProfileHeaderName>
                    <MiniProfileHeaderName>4.5</MiniProfileHeaderName>
                </MiniProfileHeaderWrapper>
                  
                  <MiniProfileButtonHolder>
                      <MiniProfileButton>book</MiniProfileButton>
                    <MiniProfileButton>message</MiniProfileButton>
                    <MiniProfileButton>Open In Maps</MiniProfileButton>
                  </MiniProfileButtonHolder>
              </MiniProfileHeader>

              <MiniProfileBody>
                  <MiniProfileBodyContent>address:</MiniProfileBodyContent>
                  <MiniProfileBodyContent>open:</MiniProfileBodyContent>
                  <MiniProfileBodyContent>other services:</MiniProfileBodyContent>
              </MiniProfileBody>
          
      </MiniProfileContainer>
  </div>;
};

export default MiniProfile;
