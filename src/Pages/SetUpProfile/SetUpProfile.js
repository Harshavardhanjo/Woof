import React,{useState} from 'react'
import {auth} from '../../firebase'
import './SetUpProfile.css'
import { useStateValue } from '../../StateProvider'
import MyProfile from '../MyProfile/MyProfile'
import {TagsAddButton, TagsAddContainer, TagsAddSearch, TagsAddTagContainer, TagsAddTagContents, TagsAddTagIcon, TagsAddTagName, TagsContainer, TagsHeader, TagsMain1, TagsMain2} from './SetUpProfileElements'


function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }


const Tags = () => {

    const [tags1,setTags1] = useState('')
    const [tag,setTag] = useState({tags : [], selected : [true,false]})

    const [{CurrentAuthUser},dispatch] = useStateValue();
    console.log("Reducer User",CurrentAuthUser)
    var i = 0;

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

        }

        
    }


    return (
        <div>
            {CurrentAuthUser ? 
                <div>
                    <TagsContainer>
                        <TagsMain1>
                            <TagsHeader>Who Are You?</TagsHeader>
                            
                            <TagsAddContainer>
                                <TagsAddSearch type = 'text' value = {tags1} placeholder = 'doctor, groomer, owner, event' onChange = {(e) => setTags1(e.target.value)} onKeyDown = {(e) => AddTag(e)}></TagsAddSearch>
                                <TagsAddButton onClick = {(e) => AddTag(e)}>AddTag</TagsAddButton>
                            </TagsAddContainer>
                            <TagsAddTagContents>
                            {Array.from({ length: tag.tags.length }, (_, k) => (
                                <TagsAddTagIcon>{tag.tags[k]}</TagsAddTagIcon>
                            ))}
                            </TagsAddTagContents>

                            
                        </TagsMain1>

                        <TagsMain2>
                            <MyProfile/>
                        </TagsMain2>

                        <TagsMain2></TagsMain2>
                    </TagsContainer>
                </div> : <h1>No user</h1>}
        </div>
    )
}

export default Tags
