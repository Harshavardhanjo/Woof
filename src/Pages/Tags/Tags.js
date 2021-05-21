import React,{useState} from 'react'
import {auth} from '../../firebase'
import './Tags.css'
import { useStateValue } from '../../StateProvider'
import {TagsAddButton, TagsAddContainer, TagsAddSearch, TagsAddTagContainer, TagsAddTagContents, TagsAddTagIcon, TagsAddTagName, TagsContainer, TagsHeader, TagsMain1, TagsMain2} from './TagsElements'

const Tags = () => {

    const [selected,setSelected] = useState([true,false]);

    const [tag,setTag] = useState({tags : ['woses','padikuranda'], selected : [true,false]})
    const [test,setTest] = useState()

    const [{user},dispatch] = useStateValue();
    var i = 0;

    const mapTags = () =>
    {
        for(i = 0; i< tag.tags.length; i++)
        {
            {<TagsAddTagName>{tag.tags[i]}</TagsAddTagName>}
            {<TagsAddTagIcon>{tag.selected[i]}</TagsAddTagIcon>}
            {<h1>Woses</h1>}
            console.log("Woses")
            
        }
    }
    return (
        <div>
            {console.log(user)}
            {user ? 
                <div>
                    <TagsContainer>
                        <TagsMain1>
                            <TagsHeader>Who Are You?</TagsHeader>
                            
                            <TagsAddContainer>
                                <TagsAddSearch type = 'text'></TagsAddSearch>
                                <TagsAddButton>AddTag</TagsAddButton>
                            </TagsAddContainer>

                            <TagsAddTagContainer>
                                <TagsAddTagContents>
                                    {/* <button onClick = {() => mapTags()}>Show Tags</button> */}
                                    {Array.from({ length: tag.tags.length }, (_, k) => (<div className = "tags"><TagsAddTagName>{tag.tags[k]}</TagsAddTagName>
                                    {tag.selected[k] ? <TagsAddTagIcon>Selected</TagsAddTagIcon> : <TagsAddTagIcon>Not Selected</TagsAddTagIcon>}</div>))}
                                </TagsAddTagContents>
                            </TagsAddTagContainer>
                        </TagsMain1>

                        <TagsMain2></TagsMain2>
                    </TagsContainer>
                </div> : <h1>No user</h1>}
        </div>
    )
}

export default Tags
