import React from 'react';
import Services from '../../Components/Services/Services';
import { Container, CoverImg, CoverTab, IconsTab, Search, SearchBar, Section1, Section2, TabHolder,Location, HeroText,PetTab, CoverContainer } from './HomeElements';
import Pets from '../../Components/Pets/Pets';
import { useHistory } from 'react-router';
import { useStateValue } from '../../StateProvider';

const Home = () => {
  
  const [lattitude, setLattitude] = React.useState(0);
  const [longitude, setLongitude] = React.useState(0);
  const [location,setLocation] = React.useState('');
  const [{pet}, dispatch] = useStateValue('');

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
    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lattitude},${longitude}&key=AIzaSyArGBLH2peMqqkooSiSWa-DrAovVQ4ydeA`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let loc = data['plus_code']['compound_code'].split(',')[0].split(' ')[1];
        setLocation(loc);
        dispatch({
          type: "SET_LOCATION",
          lattitude: lattitude,
          longitude: longitude,
          location: loc,
        });
      })
      .catch(err => console.log(err));
    console.log(lattitude);
    console.log(longitude);
    console.log(location);

    

  };

  
  
  


  return <div>
      <Container>
        <CoverTab>
          <CoverContainer>
            <HeroText>Wiggly tails is all we want</HeroText>
            <TabHolder>
              {console.log('loc',location)}
              {location == '' ? <Location onClick={e => getLocation(e)}>Choose your location</Location> : <Location>{location}</Location>}
              <SearchBar/>
              <Search>Search</Search>
            </TabHolder>
          </CoverContainer>
        </CoverTab>
          <Section1>
              <PetTab>
                <h1>Which angel do you have?</h1>
                  <Pets/>
              </PetTab>
              <IconsTab>
                <h1>{pet}</h1>
                  <Services/>
              </IconsTab>
            </Section1>
      </Container>
  </div>;
};

export default Home;
