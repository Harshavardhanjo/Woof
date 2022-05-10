import React from 'react';
import Services from '../../Components/Services/Services';
import { Container, CoverImg, CoverTab, IconsTab, Search, SearchBar, Section1, Section2, TabHolder,Location, HeroText,PetTab, CoverContainer, HeaderText } from './HomeElements';
import Pets from '../../Components/Pets/Pets';
import { useHistory } from 'react-router';
import { useStateValue } from '../../StateProvider';

const Home = () => {
  
  const [lattitude, setLattitude] = React.useState(0);
  const [longitude, setLongitude] = React.useState(0);
  const [{user}, dispatch] = useStateValue('');

  return <div>
      <Container>
      <CoverTab>
          <CoverContainer>
            <HeroText>Wiggly tails is all we want</HeroText>
            <TabHolder>
              <SearchBar placeholder='Search for a service, establishment, product etc..'/>
              <Search placeholder='Search For a Vendor'>Search</Search>
            </TabHolder>
          </CoverContainer>
        </CoverTab>
          <Section1>
            <HeaderText>Choose Your Service</HeaderText>
              <PetTab>
                <Pets/>
              </PetTab>
              <IconsTab>
                <Services/>
              </IconsTab>
            </Section1>
      </Container>
  </div>;
};

export default Home;
