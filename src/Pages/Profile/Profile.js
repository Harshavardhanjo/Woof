import React from 'react'
import { ProfileBio, ProfileBox1,ProfilePets, ProfileBox1Left, ProfileBox1Middle, ProfileBox1Right, ProfileBoxMiddle_1, ProfileBoxMiddle_2, ProfileCity, ProfileFollowButton, ProfileImg, ProfileName, ProfilePetIcon, ProfilePetIconHolder, ProfilePetsHeading, ProfileShareButton, ProfileMessageButton } from './ProfileElements'

const Account = () => {
  const [showPets, setShowPets] = React.useState(false)
  return (
    <div>
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
          <ProfileBio>jkashjkd asjdh asjkdhkasjdsajdh ajkshdjaksh djkash djkashkjas dhjkashd jkas kajs jkasdh asjkd haksj jkas jkash djkas hdkjas hjksagd hgq2jkwodha</ProfileBio>
          <ProfilePets>
            <ProfilePetIcon src = "https://www.w3schools.com/howto/img_avatar.png" />
            <ProfilePetIcon src = "https://www.w3schools.com/howto/img_avatar.png" />
            <ProfilePetIcon src = "https://www.w3schools.com/howto/img_avatar.png" />
          </ProfilePets>
        </ProfileBox1Middle>
      </ProfileBox1>
      
    </div>
  )
}

export default Account
