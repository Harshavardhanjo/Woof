import React from 'react'
import { useStateValue } from '../../StateProvider';
import { ProfileBox1, Section1, Section2, Section3, VendorBox, VendorContainer,ProfilePhotoBox,ProfilePhoto, ProfileName, ProfileDescription, ProfileContentBox, ProfileServiceBox, ProfilePets, ProfileService, ProfileButton, ProfilePostsBox, PostPhotoBox, PostPhoto, PostOptionsBox, PostOptions, PostOptionsButton, PostBox, ProfileButtonBox, ProfileOffersBox, ProfileNavigation, ProfileNavigationItem, ProfileNavigationItemImg } from './VendorElements';
import { db } from '../../Firebase';
import { useEffect } from 'react';

const Vendor = () => {

    const [{selectedVendor}, dispatch] = useStateValue();
    const [vendor, setVendor] = React.useState(null);
    const [side, setSide] = React.useState(false);

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
    

  return (
    <div>
      {console.log('side', side)}
      {vendor ? <VendorContainer>
        <VendorBox isSelected = {side}>
          <Section1>
            <ProfilePhotoBox>
              <ProfilePhoto src = 'https://www.w3schools.com/howto/img_avatar.png'/>
            </ProfilePhotoBox>
            <ProfileContentBox>
              <ProfileName>{vendor.Name}</ProfileName>
              <ProfileDescription></ProfileDescription>
            </ProfileContentBox>
            <ProfileServiceBox>
              <ProfilePets>skdajkla</ProfilePets>
              <ProfileService>jkashjkda</ProfileService>
            </ProfileServiceBox>
          </Section1>


          <Section2>
            <ProfileOffersBox>
              <ProfileNavigation>
                <ProfileNavigationItem>
                  <ProfileNavigationItemImg src = 'https://www.w3schools.com/howto/img_avatar.png' onClick = {()=>setSide(!side)}/>
                </ProfileNavigationItem>
              </ProfileNavigation>
            </ProfileOffersBox>
            <ProfileButtonBox>
              <ProfileButton primaryColor = 'white'>Book</ProfileButton>
              <ProfileButton>Favourite</ProfileButton>
              <ProfileButton>Offers</ProfileButton>
              <ProfileButton>View in Maps</ProfileButton>
            </ProfileButtonBox>
          </Section2>



          <Section3>
            <ProfilePostsBox>
              <PostBox>
                <PostPhotoBox>
                  <PostPhoto src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                </PostPhotoBox>
                <PostOptionsBox>
                  <PostOptionsButton src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                  <PostOptionsButton src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                  <PostOptionsButton src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                </PostOptionsBox>
              </PostBox>
              <PostBox>
                <PostPhotoBox>
                  <PostPhoto src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                </PostPhotoBox>
                <PostOptionsBox>
                  <PostOptionsButton src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                  <PostOptionsButton src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                  <PostOptionsButton src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                </PostOptionsBox>
              </PostBox>
              <PostBox>
                <PostPhotoBox>
                  <PostPhoto src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                </PostPhotoBox>
                <PostOptionsBox>
                  <PostOptionsButton src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                  <PostOptionsButton src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                  <PostOptionsButton src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                </PostOptionsBox>
              </PostBox>
              <PostBox>
                <PostPhotoBox>
                  <PostPhoto src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                </PostPhotoBox>
                <PostOptionsBox>
                  <PostOptionsButton src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                  <PostOptionsButton src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                  <PostOptionsButton src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                </PostOptionsBox>
              </PostBox>

              <PostBox>
                <PostPhotoBox>
                  <PostPhoto src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                </PostPhotoBox>
                <PostOptionsBox>
                  <PostOptionsButton src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                  <PostOptionsButton src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                  <PostOptionsButton src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                </PostOptionsBox>
              </PostBox>
              <PostBox>
                <PostPhotoBox>
                  <PostPhoto src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                </PostPhotoBox>
                <PostOptionsBox>
                  <PostOptionsButton src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                  <PostOptionsButton src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                  <PostOptionsButton src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                </PostOptionsBox>
              </PostBox>
              <PostBox>
                <PostPhotoBox>
                  <PostPhoto src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                </PostPhotoBox>
                <PostOptionsBox>
                  <PostOptionsButton src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                  <PostOptionsButton src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                  <PostOptionsButton src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                </PostOptionsBox>
              </PostBox>
              <PostBox>
                <PostPhotoBox>
                  <PostPhoto src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                </PostPhotoBox>
                <PostOptionsBox>
                  <PostOptionsButton src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                  <PostOptionsButton src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                  <PostOptionsButton src = 'https://www.w3schools.com/howto/img_avatar.png'/>
                </PostOptionsBox>
              </PostBox>
            </ProfilePostsBox>
          </Section3>
        </VendorBox>
      </VendorContainer> : <h1>Loading</h1>}
    </div>
  )
}

export default Vendor