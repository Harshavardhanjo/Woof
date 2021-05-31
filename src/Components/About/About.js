import { SettingsBrightnessOutlined } from '@material-ui/icons'
import React,{useEffect} from 'react'
import { useState } from 'react'
import { StateContext, useStateValue } from '../../StateProvider'
import { AboutBox, AboutContainer, AboutEditText, AboutImg, AboutText, EditButton, EditContent } from './AboutElements'
import {auth,db} from '../../firebase'

const About = () => {


    const [edit,setEdit] = useState(false);
    const [bio1,setBio1] = useState();

    const [{bio,CurrentAuthUser,name,website},dispatch] = useStateValue()

    

    useEffect(() => {
            dispatch({
            type : "SET_USER",
            Bio: bio1,
        })

        console.log("Bio is",bio)
        },[bio1])

    const EditBio = () =>
    {
        setEdit(!edit);

        async function Addbio()
        {
            let user = await CurrentAuthUser
            if(user,bio == null)
            {
                console.log("Do nothing")
            }

            else
            {

                console.log("Entered else")

                

                let Database = db.collection("User Details").doc(CurrentAuthUser.email)

                Database.get().then(res =>
                    {
                        setBio1(res.data().Bio)
                    })

                    dispatch({
                        type : "SET_USER",
            
                        Bio : bio1,
            
                    })
                Database.set({
                    Bio : bio,
                },{merge : true}).then(function(docRef) {
                    console.log("Document written");
                   })
                   .catch(function(error) {
                     console.error("Error adding document: ", error);
                   });

                   
            }
            
            
        }

        Addbio()
    }

    return (
        <div>
            <AboutContainer>
                <AboutBox>
                    <AboutImg src = "https://cdn.pixabay.com/photo/2018/04/14/11/05/online-3318772__340.jpg"/>

                    {edit ? (<AboutEditText placeholder = "write about yourself" onChange= {e => setBio1(e.target.value)} ></AboutEditText>) : (<AboutText>{bio1}</AboutText>)}

                    <EditButton onClick = {() => EditBio()}>
                        {edit ? (<EditContent>Done</EditContent>) : (<EditContent>Edit</EditContent>)}
                    </EditButton>
                </AboutBox>

            </AboutContainer>
        </div>
    )
}

export default About
