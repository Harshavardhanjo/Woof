import React from 'react'
import { useStateValue } from '../../StateProvider';
import { ProfileBox1, Section1, Section2, Section3, VendorBox, VendorContainer,ProfilePhotoBox,ProfilePhoto, ProfileName, ProfileDescription, ProfileContentBox, ProfileServiceBox, ProfilePets, ProfileService, ProfileButton, ProfilePostsBox, PostPhotoBox, PostPhoto, PostOptionsBox, PostOptions, PostOptionsButton, PostBox, ProfileButtonBox, ProfileOffersBox, Section4, ProfileServiceImg, ProfilePetImg, ProfilePetName, ProfilePetImgBox, ProfileServiceImgBox, ProfileServiceName, TopBar, TopBarExpand, TopBarButton, List } from './VendorElements';
import { db } from '../../Firebase';
import { useEffect } from 'react';
import Book from '../../Components/Book/Book';

const Vendor = () => {

    const [{selectedVendor,pet_images,service_images}, dispatch] = useStateValue();
    const [vendor, setVendor] = React.useState(null);
    const [side, setSide] = React.useState(false);
    const [boxvalue, setBoxvalue] = React.useState('0.9fr 0.1fr');
    const [sidebar, setSidebar] = React.useState('1/2');
    const [display, setDisplay] = React.useState(null);
    const [posts, setPosts] = React.useState([1,2,3,4,5,7,9,10]);

    const fetchVendor = async (v) => {
        console.log('fetching data');
        v = v.trim();
        await db.collection('Vendors').doc(v).get().then(snapshot => {
            var data = snapshot.data();
            setVendor(data);
            console.log(data);
            dispatch({
                type: 'SET_SELECTED_VENDOR',
                selectedVendor: data
            });
        });
    }

    useEffect(() => {
      console.log('selectedVendor', selectedVendor);
        fetchVendor(selectedVendor);
    }, []);

  
    const toggleSide = () => {
        
        if(side == false){
            setSide(!side);
            setBoxvalue('none');
            setSidebar('1/-1');
        }

        else{
            setSide(!side);
            var ans = window.confirm('Any changes made will be lost. Are you sure you want to continue?');

            if(ans == true){
              setBoxvalue('0.9fr 0.1fr');
              setSidebar('1/2');
            }
        }
    }

    

  return (
    <>
      {console.log('side', side)}
      {vendor ? <VendorContainer>
        <VendorBox box = {boxvalue} isSelected = {side}>
        {!side ? <Section1>
            <ProfilePhotoBox>
              <ProfilePhoto src = 'https://www.w3schools.com/howto/img_avatar.png'/>
            </ProfilePhotoBox>
            <ProfileContentBox>
              <ProfileName>{vendor.Name}</ProfileName>
              <ProfileDescription> awd akjwnd akwdjawhjdklaw asdnmb asnmbajs dujkash kjahsdjkasjkdasjk hjkasd jkashd jkash djk ashjkhaskj asjkdhajksdhhjkas hdkjashdjkashdjk ashjk</ProfileDescription>
            </ProfileContentBox>
            <ProfileServiceBox>
              <ProfilePets>
                {Object.keys(pet_images).map((key,index) => {
                  return <ProfilePetImgBox>
                    <ProfilePetImg src = {pet_images[key]}/>
                    {/* <ProfilePetName>{key}</ProfilePetName> */}
                  </ProfilePetImgBox>
                })}
              </ProfilePets>
              <ProfileService>
                {Object.keys(service_images).map((key,index) => {
                  return <ProfileServiceImgBox>
                    <ProfileServiceImg src = {service_images[key]} key = {index}/>
                    {/* <ProfileServiceName>{key}</ProfileServiceName> */}
                  </ProfileServiceImgBox>
                })}
              </ProfileService>
            </ProfileServiceBox> 
          </Section1>: null}



          {!side ? <Section3>
            <ProfilePostsBox>
              {posts.map((post,index) => {
                return <PostBox>
                  <PostPhotoBox>
                    <PostPhoto src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                  </PostPhotoBox>
                  </PostBox>
              })}
              
              
              <PostBox>
                <PostPhotoBox>
                  <PostPhoto src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                </PostPhotoBox>
              </PostBox>
               
            </ProfilePostsBox> 
          </Section3>: null}

          {/* <Section4 gridRow = {sidebar}>
            
            <TopBar>
              <TopBarExpand src = 'https://www.w3schools.com/howto/img_avatar.png' onClick = {()=>toggleSide()}/>
            </TopBar>
            {side ? <Book/> : <List>
              <TopBarButton primaryColor = 'green' onClick = {()=>toggleSide()}>Book</TopBarButton>
              <TopBarButton primaryColor = '#2189c4' onClick = {()=>toggleSide()}>Follow</TopBarButton>
              <TopBarButton primaryColor = '#d4c111' onClick = {()=>toggleSide()}>Message</TopBarButton>
              <TopBarButton primaryColor = '#d4112e' onClick = {()=>toggleSide()}>Report</TopBarButton>
              </List>}
          </Section4> */}

          {side ? <Section4 gridRow = {sidebar}>
            <TopBar>
              <TopBarExpand src = 'https://www.w3schools.com/howto/img_avatar.png' onClick = {()=>toggleSide()}/>
            </TopBar>
            <Book/>
          </Section4> :
          <Section4 gridRow = {sidebar}>
            <div></div>
            <List>
              <TopBarButton primaryColor = 'green' onClick = {()=>toggleSide()}>Book</TopBarButton>
              <TopBarButton primaryColor = '#2189c4' onClick = {()=>toggleSide()}>Follow</TopBarButton>
              <TopBarButton primaryColor = '#d4c111' onClick = {()=>toggleSide()}>Message</TopBarButton>
              <TopBarButton primaryColor = '#d4112e' onClick = {()=>toggleSide()}>Report</TopBarButton>
              </List>
            </Section4>}
        </VendorBox>
      </VendorContainer> : <h1>Loading</h1>}
    </>
  )
}

export default Vendor