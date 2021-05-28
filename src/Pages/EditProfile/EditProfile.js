import React,{useState} from 'react'
import { useStateValue } from '../../StateProvider'
import { EditProfileAddedTags, EditProfileAddedTagsIcon, EditProfileContainer, EditProfileDetails, EditProfileImg, EditProfileInput, EditProfileTags, EditProfileTagsAddTag, EditProfileTagsAddTagContainer, EditProfileTagsButton, EditProfileUser } from './EditProfileElements'
import './EditProfile.css'

const EditProfile = () => {
    const [tags1,setTags1] = useState('')
    const [tag,setTag] = useState({tags : [], selected : [true,false]})
    const [value,setValue] = useState()
    const [placeholder,setPlaceholder] = useState('Groomer,Vet,Owner,Product Reatiler etc..')
    const [website,setWebsite] = useState();
    const [name,setName] = useState();
    const [bio,setBio] = useState();

    const [{CurrentAuthUser},dispatch] = useStateValue();
    console.log("Reducer User",CurrentAuthUser)
    var i = 0;

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }

    console.log("Initial",tag.tags)
    const AddTag = (e) =>
    {

        console.log("Woses",tag.tags)

        if((e.target.type == "submit") || (e.key == "Enter"))
        {


            let uniquetags = tag.tags.filter(onlyUnique);
            console.log(uniquetags)

            if(uniquetags.includes(tags1))
            {
                alert("You have already added it")
            }

            else
            {
                let temptag = tag.tags.slice()
                temptag.push(tags1)
                setTag({...tag,tags : temptag})
            }

            console.log("Final",tag.tags)
            setTags1("")
            setValue("")


        }

        
    }

    const Done = () =>
    {
        dispatch({
            type : "SET_USER",
            tags : tag.tags,
            website : website,
            name : name,
            bio : bio
        })
    }

    return (
        <div className = "enclose">
            <EditProfileContainer>
                <EditProfileUser>
                    <EditProfileImg src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
                </EditProfileUser>

                <EditProfileDetails>
                        <EditProfileInput onChange = {e => setName(e.target.value)} placeholder ="UserName"/>
                        <EditProfileInput onChange = {e => setBio(e.target.value)} placeholder = 'Bio'/>
                        <EditProfileInput onChange = {e => setWebsite(e.target.value)} placeholder = 'Website'/>
                </EditProfileDetails>
                    <EditProfileTags>
                        <EditProfileTagsAddTagContainer>
                            <EditProfileTagsAddTag onChange = {e => setTags1(e.target.value)} placeholder = {placeholder} />
                            <EditProfileTagsButton onClick = {(e) => AddTag(e)}>Add tag</EditProfileTagsButton>
                        </EditProfileTagsAddTagContainer>
                            <EditProfileAddedTags>
                            {Array.from({ length: tag.tags.length }, (_, k) => (
                                <EditProfileAddedTagsIcon>{tag.tags[k]}</EditProfileAddedTagsIcon>
                            ))}
                            </EditProfileAddedTags>
                    </EditProfileTags>
            </EditProfileContainer>
        </div>
    )
}

export default EditProfile
