import React from 'react'
import { ProfileBio, ProfileBox1,ProfilePets, ProfileBox1Left, ProfileBox1Middle, ProfileBox1Right, ProfileBoxMiddle_1, ProfileBoxMiddle_2, ProfileCity, ProfileFollowButton, ProfileImg, ProfileName, ProfilePetIcon, ProfilePetIconHolder, ProfilePetsHeading, ProfileShareButton, ProfileMessageButton, ProfileBox2 } from './ProfileElements'
import './Profile.css'
import Posts from '../../Components/Posts/Posts'
const Account = () => {
  const [showPets, setShowPets] = React.useState(false)
  return (
    <div className='Container'>
      <ProfileBox1>
        <ProfileBox1Left>
          <ProfileImg src="https://www.w3schools.com/howto/img_avatar.png" />
        </ProfileBox1Left>
        <ProfileBox1Middle>
          <ProfileBoxMiddle_1>
            <ProfileName>Sheesh</ProfileName>
            <ProfileCity>Medavakkan,Chennai</ProfileCity>
          </ProfileBoxMiddle_1>
          <ProfileBoxMiddle_2>
            <ProfileFollowButton>Follow</ProfileFollowButton>
            <ProfileMessageButton>Message</ProfileMessageButton>
            <ProfileShareButton>Share</ProfileShareButton>
          </ProfileBoxMiddle_2>
          <ProfileBio>jkashjkd asjdh asjkdhkasjdsajdh ajkshdjaksh djkash djkashkjas dhjkashd jkas kajs jkasdh asjkd haksj jkas jkash djkas hdkjas hjksagd hgq2jkwodha
            dakdhkaw 
            alwjd; skahjlk askjd kaljdklasj dklasj lkasdj laksjdakl kjsdkajs kasj dakl jlkasjd klaj dlakjkaskkk kkkkkkkkkkkkkkkk
          </ProfileBio>
          <ProfilePets>
            <ProfilePetIcon src = "https://www.w3schools.com/howto/img_avatar.png" />
            <ProfilePetIcon src = "https://www.w3schools.com/howto/img_avatar.png" />
            <ProfilePetIcon src = "https://www.w3schools.com/howto/img_avatar.png" />
          </ProfilePets>
        </ProfileBox1Middle>
      </ProfileBox1>

      <ProfileBox2>
        <Posts/>
      </ProfileBox2>
      
    </div>
  )
}

export default Account
