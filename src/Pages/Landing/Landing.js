import React,{useEffect} from 'react'
import {useNavigate } from "react-router-dom";
import {ContentBox, ContentCard, ContentDescription, ContentImage,Option, ContentLocation, ContentTitle, LandingContainer, LocationBox, LocationIcon, LocationName, NavBox, OptionsBox, Search, SearchBox, SearchButton, Section1, Section2,TextBox, OptionDropdown, OptionDropdownItem, ContentView, ContentQuickView, LocationSearch, OptionExplore, LocationSearchDropdown, LocationButton, LocationSearchDropdownItem } from './LandingElements'
import location from '../../img/location.png';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';
import axios from 'axios';

const Landing = () => {
  const navigate = useNavigate();
  const routeChange = (e,path) =>{
    navigate(path);
  }

  const [location, setLocation] = React.useState('');
  const [toggle, setToggle] = React.useState(false);
  const [result, setResult] = React.useState(['woses','','']);
  const [gmapsLoaded, setGmapsLoaded] = React.useState(false);
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null
  });

  const selectLocation = (res) => {
    console.log('in',res);
    setLocation(res);
    setToggle(!toggle);
    setResult(['','','']);
  }

  useEffect(() => {
    window.initMap = () => setGmapsLoaded(true)
    const gmapScriptEl = document.createElement(`script`)
    gmapScriptEl.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyArGBLH2peMqqkooSiSWa-DrAovVQ4ydeA&libraries=places&callback=initMap`
    document.querySelector(`body`).insertAdjacentElement(`beforeend`, gmapScriptEl)
  }, [])

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setLocation(value.split(',')[0]);
    setCoordinates(latLng);
    setToggle(!toggle);
  };
  return (
    <>
    <LandingContainer>
      <Section1>
        <TextBox>
          <h1>Wiggly tails are all we want</h1>
          <Search placeholder='Search for a service,provider etc..'/>
        </TextBox>
      </Section1>
      
      <Section2>
        <NavBox>
          <LocationBox>
            {/* {toggle ? <LocationName onClick={(e) => setToggle(!toggle)}>{location}</LocationName> : <LocationSearch placeholder = 'select location' onKeyUp={(e) => getLocation(e.target.value)}/>}
            {result[0] != '' ? <LocationButton onClick={() => selectLocation(result[0])}>{result[0]}</LocationButton> : null}
            {result[1] != '' ? <LocationButton onClick={() => selectLocation(result[1])}>{result[1]}</LocationButton> : null}
            {result[2] != '' ? <LocationButton onClick={() => selectLocation(result[2])}>{result[2]}</LocationButton> : null}
            {console.log(toggle)}
            {console.log('out',location)} */}
        {!toggle ? <>
        {gmapsLoaded == true ? <PlacesAutocomplete
        value={location}
        onChange={setLocation}
        onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>

            <LocationSearch {...getInputProps({ placeholder: "Choose Location" })} />

            <div>
            <LocationSearchDropdown>
              {loading ? <div>...loading</div> : null}

              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                };

                return (
                  
                    <LocationSearchDropdownItem {...getSuggestionItemProps(suggestion)}>
                    {suggestion.description}
                  </LocationSearchDropdownItem>
                  
                );
              })}
              </LocationSearchDropdown>
            </div>
          </div>
        )}
      </PlacesAutocomplete> : <p>Loading..</p>}</>  : <LocationName onClick={(e) => setToggle(!toggle)}>{location}</LocationName>}
          </LocationBox>

          <OptionsBox>
          <OptionDropdown>
              <OptionDropdownItem>Closest</OptionDropdownItem>
              <OptionDropdownItem>Best</OptionDropdownItem>
            </OptionDropdown>
            <OptionExplore>Explore More</OptionExplore>
          </OptionsBox>
        </NavBox>
        <ContentBox>
          <ContentCard>
            <ContentImage src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
            <ContentTitle>Title</ContentTitle>
            <ContentDescription>asjkdh adjskh ajksd</ContentDescription>
            <ContentLocation>city</ContentLocation>
            <ContentView>Book</ContentView>
          </ContentCard>
        </ContentBox>
      </Section2>
    </LandingContainer>
    </>
  )
}

export default Landing