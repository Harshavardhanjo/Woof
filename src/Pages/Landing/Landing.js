import React from 'react'
import { Container, Cover, GoButton, HeroText, HeroText1_1, HeroText2_1, HeroTextContainer, HeroTextContainer_1, LandingContainer, LeftContainer,LeftBox, RightContainer, Section1, ServiceImg, ServicesContainer, RightBox, RightImg } from './LandingElements'
import happy from '../../img/happy.png'
import comb from '../../img/comb.png'
import care from '../../img/care.png'
import toys from '../../img/toys.png'
import aquarium from '../../img/aquarium.png'
import stylist from '../../img/stylist.png'
import {useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const routeChange = (e,path) =>{
    navigate(path);
  }
  return (
    <>
      <LandingContainer>
        <LeftContainer>
          <LeftBox>
            <HeroTextContainer>
              <HeroText>Explore the market</HeroText>
            </HeroTextContainer>
            <ServicesContainer>
              <ServiceImg src={comb} />
              <ServiceImg src={care} />
              <ServiceImg src={toys} />
            </ServicesContainer>
            <GoButton onClick={(e)=>routeChange(e,'/home')}>Explore!</GoButton>
          </LeftBox>
        </LeftContainer>

        <RightContainer>
          <RightBox>
            <HeroTextContainer>
                <HeroText>Show off your Pet!</HeroText>
              </HeroTextContainer>
              <RightImg src = {happy} />
              <GoButton onClick={(e)=>routeChange(e,'/feed')}>Lets Go!</GoButton>
            </RightBox>
        </RightContainer>
      </LandingContainer>
    </>
  )
}

export default Landing