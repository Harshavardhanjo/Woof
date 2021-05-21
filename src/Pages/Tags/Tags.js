import React,{useState} from 'react'
import {auth} from '../../firebase'
import { useStateValue } from '../../StateProvider'
import {TagsAddButton, TagsAddContainer, TagsAddSearch, TagsAddTagContainer, TagsAddTagContents, TagsAddTagIcon, TagsAddTagName, TagsContainer, TagsHeader, TagsMain1, TagsMain2} from './TagsElements'

const Tags = () => {

    const [selected,setSelected] = useState([]);

    const [tags,setTags] = useState([])

    const [{user},dispatch] = useStateValue();

    const handleSelect = () =>
    {
        
    }
    return (
        <div>
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
                                    <TagsAddTagName>Tag</TagsAddTagName>
                                    {selected ? <TagsAddTagIcon onClick = {() => handleSelect()}>Selected</TagsAddTagIcon> : <TagsAddTagIcon onClick = {() => handleSelect()}>Not Selected</TagsAddTagIcon>}
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
