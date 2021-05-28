import React from 'react'
import {MyProfileContainer,MyProfileUtilContainer,MyProfilePostsContainer,MyProfileTopContainer,MyProfileCoverImg,MyProfileProfileImg,MyProfileNav,MyprofileNavContainer,MyProfilePetsNav,MyProfilePetIcon,MyProfileNavContents, MyProfileLogo} from './MyProfileElements'
import Posts from '../../Components/Posts/Posts'
import './MyProfile.css'
const MyProfile = () => {
    return (
        <div className = 'MyProfile'>
            <MyProfileContainer>
                
                <MyprofileNavContainer>

                    <MyProfileLogo>WOOF!</MyProfileLogo>

                    <MyProfileNav>
                        <MyProfileNavContents>
                            Tags
                        </MyProfileNavContents>

                        <MyProfileNavContents>
                            About
                        </MyProfileNavContents>

                        <MyProfileNavContents>
                            Messages
                        </MyProfileNavContents>
                    </MyProfileNav>

                </MyprofileNavContainer>
                <MyProfileTopContainer>
                    <MyProfileProfileImg src = 'https://cdn.pixabay.com/photo/2015/09/02/12/39/woman-918583__340.jpg'/>
                    <MyProfileCoverImg src = 'https://cdn.pixabay.com/photo/2017/06/23/19/16/woman-2435605__340.jpg'/>
                </MyProfileTopContainer>

                <MyProfilePostsContainer>
                    <Posts/>

                    <Posts/>

                    <Posts/>

                    <Posts/>
                </MyProfilePostsContainer>

                <MyProfileUtilContainer>
                    Utils Right
                </MyProfileUtilContainer>
            </MyProfileContainer>
        </div>
    )
}

export default MyProfile
