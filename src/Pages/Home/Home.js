import React from 'react';
import Services from '../../Components/Services/Services';
import { Container, CoverImg, CoverTab, IconsTab, Search, SearchBar, Section1, Section2, TabHolder,Location, HeroText,PetTab } from './HomeElements';
import Pets from '../../Components/Pets/Pets';

const Home = () => {
  
  const [lattitude, setLattitude] = React.useState(0);
  const [longitude, setLongitude] = React.useState(0);
  const [location,setLocation] = React.useState('');

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
    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lattitude},${longitude}&key=AIzaSyArGBLH2peMqqkooSiSWa-DrAovVQ4ydeA`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setLocation(data['results'][0]['formatted_address']);
      })

    console.log(location);

  };
  
  


  return <div>
      <Container>
        <CoverTab>
          <HeroText>Wiggly tails is all we want</HeroText>
          <TabHolder>
            {location == '' ? <Location onClick={e => getLocation(e)}>Choose your location?</Location> : <Location>{location.split(" ")[0]}</Location>}
            <SearchBar/>
            <Search>Search</Search>
          </TabHolder>
        </CoverTab>
          <Section1>
              <PetTab>
                <h1>Which angel do you have?</h1>
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
