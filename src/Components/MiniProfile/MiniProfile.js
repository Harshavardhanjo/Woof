import React from 'react';
import { MiniProfileButtonHolder,MiniProfileButton, MiniProfileContainer, MiniProfileCoverPhoto, MiniProfileCoverTab, MiniProfileHeader, MiniProfileHeaderName, MiniProfileIconsTab, MiniProfileCarousel, MiniProfileHeaderWrapper, MiniProfileBody, MiniProfileBodyContent } from './MiniProfileElements';

const MiniProfile = () => {
  return <div>
      <MiniProfileContainer>
          <MiniProfileCoverTab>
              <MiniProfileIconsTab>hi</MiniProfileIconsTab>
              <MiniProfileCoverPhoto src = 'https://images.unsplash.com/photo-1643240337036-fa77dbc87c13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'/>
              <MiniProfileCarousel>next</MiniProfileCarousel>
            </MiniProfileCoverTab>
            <MiniProfileHeader>
                <MiniProfileHeaderWrapper>
                    <MiniProfileHeaderName>Name</MiniProfileHeaderName>
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
