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

        fetchDatabase();

        console.log("UseEffect took place")
            dispatch({
            type : "SET_USER",
            Bio: bio1,
        })

        

        console.log("Bio is",bio)
        },[bio1])
        
    async function fetchDatabase()
    {
        
        let user = await CurrentAuthUser
            // if(user,bio== null)
            // {
            //     console.log("Do nothing")
            //     return null;
            // }


                console.log('Entered Else if')
                let Data  = db.collection("User Details").doc(CurrentAuthUser.email)
                console.log("CurrentAuthUser is",CurrentAuthUser)
                db.collection("User Details").doc(CurrentAuthUser.email).get().then(res =>{
                    setBio1(res.data().Bio)
                    
                })

                console.log("bio1 is",bio1)

                // dispatch({
                //     type : "SET_USER",
        
                //     Bio : bio1,
        
                // })

                console.log("Reducer Bio is",bio)


                
                return Data
                

            

        }

        

        // const updateBio1 = () =>
        // {
        //     console.log("bio1 is (UB)",bio1)
            
        // }

    // const getBio = () =>
    // {

    //     let Database = fetchDatabase();
    //     Database.then(res =>{
    //         console.log("Database res is",res)
    //     })
    //     Database.get().then(res =>
    //         {
    //             setBio1(res.data().Bio)
    //         })

    //         dispatch({
    //             type : "SET_USER",
    
    //             Bio : bio1,
    
    //         })

    // }

    // getBio()

    const EditBio = () =>
    {
        setEdit(!edit);
        // let Database = fetchDatabase();
        // console.log("Database is ",Database)

        // Database.set({
        //     Bio : bio,
        // },{merge : true}).then(function(docRef) {
        //     console.log("Document written");
        //    })
        //    .catch(function(error) {
        //      console.error("Error adding document: ", error);
        //    });

        
    }

    return (
        <div>
            <AboutContainer>
                <AboutBox>
                    <AboutImg src = "https://cdn.pixabay.com/photo/2018/04/14/11/05/online-3318772__340.jpg"/>

                    {edit ? (<AboutEditText placeholder = "write about yourself" onChange= {e => setBio1(e.target.value)} ></AboutEditText>) : (<AboutText>{bio1}</AboutText>)}
                    {console.log("bio1 in jsx is",bio1)}

                    <EditButton onClick = {() => EditBio()}>
                        {edit ? (<EditContent>Done</EditContent>) : (<EditContent>Edit</EditContent>)}
                    </EditButton>
                </AboutBox>

            </AboutContainer>
        </div>
    )
}

export default About
