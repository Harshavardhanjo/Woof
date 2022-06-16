import React,{useEffect} from 'react'
import {useNavigate } from "react-router-dom";
import { useStateValue } from '../../StateProvider';
import {ContentBox, ContentCard, ContentDescription, ContentImage,Option, ContentLocation, ContentTitle, LandingContainer, LocationBox, LocationIcon, LocationName, NavBox, OptionsBox, Search, SearchBox, SearchButton, Section1, Section2,TextBox, OptionDropdown, OptionDropdownItem, ContentView, ContentQuickView, LocationSearch, OptionExplore, LocationSearchDropdown, LocationButton, LocationSearchDropdownItem, Header, Section3, Section4, ContentImgBox, ContentImg } from './LandingElements'
import location from '../../img/location.png';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';
import axios from 'axios';
import {db} from '../../Firebase';
import loading from '../../img/loading.gif';

const Landing = () => {
  const navigate = useNavigate();
  const routeChange = (e,path,id) =>{
    e.preventDefault();
    navigate(path);

    if(path = '/vendor'){
      dispatch({
        type : "SET_SELECTED_VENDOR",
        selectedVendor: id,
      });
    }
  }

  const [vendors,setVendors] = React.useState([]);
  const [vendorKeys,setVendorKeys] = React.useState([]);
  const [pimages,setPimages] = React.useState([]);
  const [simages,setSimages] = React.useState([]);
  const [{selectedVendor},dispatch] = useStateValue();
  const fetchVendor = async (v) => {
    setVendors([]);
    setVendorKeys([]);
    var keys = Object.keys(v);
    for(let i = 0; i < keys.length; i++){
      let key = keys[i].replace(/\s/g, '');
      let data = await db.collection('Vendors').doc(key).get();
      var x = data.data();
      x.description = v[keys[i]];
      setVendorKeys(vendorKeys => [...vendorKeys,keys[i]]);
      setVendors(vendors => [...vendors,x]);
    }
    
  }

  // fetchVendor('hGzcExo6eYmPMiuc8qEN');
  const fetchSVendors = async () => {
    await db.collection('SVendor').get().then(snapshot => {
      var temp = [];
      snapshot.docs.forEach(doc => {
        var data = doc.data();
        temp.push(data.SVendors[0]);
      });
      if(temp.length === 0){
        // console.log('no data');
      }
      else{
        // console.log('data found');
        // console.log('temp',typeof(temp[0]));
        fetchVendor(temp[0]);
      }
    });
  }

  const fetchImages = async () => {
    await db.collection('Images').doc('pets').get().then(snapshot => {
      var temp = snapshot.data()
      if(temp.length === 0){
        // console.log('no data');
      }
      else{
        // console.log('data found');
        // console.log('temp',typeof(temp));
        // console.log('temp',temp);
        setPimages(temp);
        dispatch({
          type : "SET_PET_IMAGES",
          pet_images : temp,
        });
      }
    });

    await db.collection('Images').doc('services and products').get().then(snapshot => {
      var temp = snapshot.data()
      if(temp.length === 0){
        // console.log('no data');
      }
      else{
        // console.log('data found');
        // console.log('temp',typeof(temp));
        // console.log('temp',temp);
        setSimages(temp);
        dispatch({
          type : "SET_SERVICE_IMAGES",
          service_images : temp,
        });
      }
    });
  }

  // fetchImages();

  

  useEffect(() => {
    fetchSVendors();
    fetchImages();
    dispatch({
      type: 'SET_SELECTED_VENDOR',
      selectedVendor: null
    });
  }, []);

  // const [location, setLocation] = React.useState('');
  // const [toggle, setToggle] = React.useState(false);
  // const [result, setResult] = React.useState(['woses','','']);
  // const [gmapsLoaded, setGmapsLoaded] = React.useState(false);
  // const [coordinates, setCoordinates] = React.useState({
  //   lat: null,
  //   lng: null
  // });

  // const selectLocation = (res) => {
  //   console.log('in',res);
  //   setLocation(res);
  //   setToggle(!toggle);
  //   setResult(['','','']);
  // }

  // useEffect(() => {
  //   window.initMap = () => setGmapsLoaded(true)
  //   const gmapScriptEl = document.createElement(`script`)
  //   gmapScriptEl.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyArGBLH2peMqqkooSiSWa-DrAovVQ4ydeA&libraries=places&callback=initMap`
  //   document.querySelector(`body`).insertAdjacentElement(`beforeend`, gmapScriptEl)
  // }, [])

  // const handleSelect = async value => {
  //   const results = await geocodeByAddress(value);
  //   const latLng = await getLatLng(results[0]);
  //   setLocation(value.split(',')[0]);
  //   setCoordinates(latLng);
  //   setToggle(!toggle);
  // };
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
          {/* <LocationBox>
        {!toggle ? <>
        {gmapsLoaded == true ? <PlacesAutocomplete
        value={location}
        onChange={setLocation}
        onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>

            <LocationSearch {...getInputProps({ placeholder: "Choose Location" })} autoFocus/>

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
          </LocationBox> */}

          {/* <OptionsBox>
          <OptionDropdown>
              <OptionDropdownItem>Closest</OptionDropdownItem>
              <OptionDropdownItem>Popular</OptionDropdownItem>
            </OptionDropdown>
            <OptionExplore>Explore More</OptionExplore>
          </OptionsBox> */}
          <Header>Top Deals Today!</Header>
        </NavBox>
        <ContentBox>
          {vendors.map((vendor,i) => {
            return(
              <ContentCard key={i}>
                <ContentImage src={vendor.image}/>
                <ContentTitle>{vendor.Name}</ContentTitle>
                <ContentDescription>{vendor.description}</ContentDescription>
                <ContentImgBox>
                  {vendor.Services.map((service,j) => {

                    return(
                        <ContentImg src={simages[service]}/>

                    )
                  })}
                </ContentImgBox>
                <ContentImgBox>
                  {vendor.Pets.map((pet,j) => {
                    pet = pet.toLowerCase();
                    return(
                      <ContentImg src={pimages[pet] } />
                    )
                  })}
                </ContentImgBox>
                <ContentView onClick= {(e) => routeChange(e,'/Vendor',vendorKeys[i])}>View</ContentView>
              </ContentCard>
            )
          })}

          
        </ContentBox>
      </Section2>

      <Section3>
        <NavBox>
          <Header>Re-visit</Header>
        </NavBox>
      </Section3>

      <Section4>
        <NavBox>
        <Header>Re-Buy</Header>
        </NavBox>
      </Section4>
    </LandingContainer>
    </>
  )
}

export default Landing