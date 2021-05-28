import React from 'react'
import {MyProfileContainer,MyProfileUtilContainer,MyProfilePostsContainer,MyProfileTopContainer,MyProfileCoverImg,MyProfileProfileImg,MyProfileNav,MyprofileNavContainer,MyProfilePetsNav,MyProfilePetIcon,MyProfileNavContents} from './MyProfileElements'

const MyProfile = () => {
    return (
        <div>
            <MyProfileContainer>
                <MyProfileTopContainer>
                    <MyProfileProfileImg src = 'https://cdn.pixabay.com/photo/2015/09/02/12/39/woman-918583__340.jpg'/>
                    <MyProfileCoverImg src = 'https://cdn.pixabay.com/photo/2017/06/23/19/16/woman-2435605__340.jpg'/>
                </MyProfileTopContainer>

                <MyprofileNavContainer>

                    <MyProfilePetsNav>
                        <MyProfilePetIcon src = 'https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427__340.jpg'/>
                        <MyProfilePetIcon src = 'https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427__340.jpg'/>
                        <MyProfilePetIcon src = 'https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427__340.jpg'/>
                    </MyProfilePetsNav>


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

                <MyProfilePostsContainer>
                    Posts Left
                </MyProfilePostsContainer>

                <MyProfileUtilContainer>
                    Utils Right
                </MyProfileUtilContainer>
            </MyProfileContainer>
        </div>
    )
}

export default MyProfile
