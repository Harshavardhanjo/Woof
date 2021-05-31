import React,{useState,useEffect} from 'react'
import {MyProfileContainer,MyProfileUtilContainer,MyProfilePostsContainer,MyProfileTopContainer,MyProfileCoverImg,MyProfileProfileImg,MyProfileNav,MyprofileNavContainer,MyProfilePetsNav,MyProfilePetIcon,MyProfileNavContents, MyProfileLogo, MyProfileName} from './MyProfileElements'
import Posts from '../../Components/Posts/Posts'
import './MyProfile.css'
import  {useStateValue } from '../../StateProvider'
import Utils from '../../Components/Utils/Utils'
import {auth,db} from '../../firebase'
import { StarTwoTone } from '@material-ui/icons'
const MyProfile = () => {

    const [{CurrentAuthUser},dispatch] = useStateValue()
    const [util,setUtil] = useState('default')
    const [username,Setusername] = useState()

    let u = ""

            useEffect(() => {
                    dispatch({
            type : "SET_UTIL",
            data : util,
        })
        },[util])

        async function getUser()
        {
            let user = await CurrentAuthUser
            if(user == null)
            {
                
            }

            else
            {
                var UserDetails = db.collection('User Details').doc(CurrentAuthUser.email).get()
                UserDetails.then(res => {
                Setusername(res.data().User_name)
        })
            }
            
            
        }

        getUser()

        
        
    return (
        <div className = 'MyProfile'>
            <MyProfileContainer>
                
                <MyprofileNavContainer>

                    <MyProfileLogo>WOOF!</MyProfileLogo>

                    <MyProfileName>
                        {username}
                    </MyProfileName>

                    <MyProfileNav>
                        <MyProfileNavContents onClick = {() => setUtil("tags")}>
                            Tags
                        </MyProfileNavContents >

                        <MyProfileNavContents onClick = {() => setUtil("About")}>
                            About
                        </MyProfileNavContents>

                        <MyProfileNavContents onClick = {() => setUtil("Messages")}>
                            Messages
                        </MyProfileNavContents>

                        <MyProfileNavContents onClick = {() => setUtil("Pets")}>
                            Pets
                        </MyProfileNavContents>
                    </MyProfileNav>

                </MyprofileNavContainer>
                <MyProfileTopContainer>
                    <MyProfileProfileImg src = 'https://cdn.pixabay.com/photo/2015/09/02/12/39/woman-918583__340.jpg'/>
                    <MyProfileCoverImg src = 'https://cdn.pixabay.com/photo/2018/05/16/20/07/technology-3406895__340.jpg'/>
                </MyProfileTopContainer>

                <MyProfilePostsContainer>
                    <Posts/>

                    <Posts/>

                    <Posts/>

                    <Posts/>
                </MyProfilePostsContainer>

                <MyProfileUtilContainer>
                    <Utils/>
                </MyProfileUtilContainer>
            </MyProfileContainer>
        </div>
    )
}

export default MyProfile