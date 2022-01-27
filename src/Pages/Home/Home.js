import React from 'react';
import Services from '../../Components/Services/Services';
import { Container, CoverImg, CoverTab, IconsTab, Search, SearchBar, Section1, Section2, TabHolder,Location, HeroText,PetTab } from './HomeElements';
import Pets from '../../Components/Pets/Pets';

const Home = () => {
  
  const [lattitude, setLattitude] = React.useState(0);
  const [longitude, setLongitude] = React.useState(0);

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setLattitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      error => {
        console.log(error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    console.log(lattitude, longitude);
    
  }, []);

  const getLocation = (e) => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setLattitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      error => {
        console.log(error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    console.log(lattitude);
    console.log(longitude);

  };
  


  return <div>
      <Container>
        <CoverTab>
          <HeroText>Wiggly tails is all we want</HeroText>
          <TabHolder>
            <Location onClick={e => getLocation(e)}>Where do you live?</Location>
            <SearchBar/>
            <Search>Search</Search>
          </TabHolder>
        </CoverTab>
          <Section1>
              <PetTab>
                <h1>Which angle do you have?</h1>
                  <Pets/>
              </PetTab>
              <IconsTab>
                <h1>Services and Products</h1>
                  <Services/>
              </IconsTab>
            </Section1>
      </Container>
  </div>;
};

export default Home;
