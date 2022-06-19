import React from 'react'
import { useStateValue } from '../../StateProvider';
import { ProfileBox1, Section1, Section2, Section3, VendorBox, VendorContainer,ProfilePhotoBox,ProfilePhoto, ProfileName, ProfileDescription, ProfileContentBox, ProfileServiceBox, ProfilePets, ProfileService, ProfileButton, ProfilePostsBox, PostPhotoBox, PostPhoto, PostOptionsBox, PostOptions, PostOptionsButton, PostBox, ProfileButtonBox, ProfileOffersBox, Section4, ProfileServiceImg, ProfilePetImg, ProfilePetName, ProfilePetImgBox, ProfileServiceImgBox, ProfileServiceName, TopBar, TopBarExpand } from './VendorElements';
import { db } from '../../Firebase';
import { useEffect } from 'react';
import Book from '../../Components/Book/Book';

const Vendor = () => {

    const [{selectedVendor,pet_images,service_images}, dispatch] = useStateValue();
    const [vendor, setVendor] = React.useState(null);
    const [side, setSide] = React.useState(true);
    const [boxvalue, setBoxvalue] = React.useState('');
    const [display, setDisplay] = React.useState(null);

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
        toggleSide();
    }, []);

  
    const toggleSide = () => {
        setSide(!side);
        if(side == false){

            setBoxvalue('none');
        }

        else{
            setBoxvalue('0.8fr 0.2fr');
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
              <PostBox>
                <PostPhotoBox>
                  <PostPhoto src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                </PostPhotoBox>
              </PostBox>

              <PostBox>
                <PostPhotoBox>
                  <PostPhoto src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                </PostPhotoBox>
              </PostBox>

              <PostBox>
                <PostPhotoBox>
                  <PostPhoto src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                </PostPhotoBox>
              </PostBox>

              <PostBox>
                <PostPhotoBox>
                  <PostPhoto src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                </PostPhotoBox>
              </PostBox>

              <PostBox>
                <PostPhotoBox>
                  <PostPhoto src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                </PostPhotoBox>
              </PostBox>

              <PostBox>
                <PostPhotoBox>
                  <PostPhoto src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                </PostPhotoBox>
              </PostBox>
               
            </ProfilePostsBox> 
          </Section3>: null}

          <Section4>
            <TopBar>
              <TopBarExpand src = 'https://www.w3schools.com/howto/img_avatar.png' onClick = {()=>toggleSide()}/>
            </TopBar>
            {side ? <Book/> : 'close to render'}
          </Section4>
        </VendorBox>
      </VendorContainer> : <h1>Loading</h1>}
    </>
  )
}

export default Vendor