import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const TagsContainer = styled.div`
    display : flex;
    flex-direction : row;
`

export const TagsMain1= styled.div`
    display : flex;
    flex-direction : column;
    background-color : blue;
    height : 300px;
    justify-content : space-evenly;
    width : 600px;
    align-items : center;
    
`

export const TagsMain2 = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-evenly;
    background-color : green;
`

export const TagsHeader = styled.div`
    font-size : 1.5rem;
    color : white;
`

export const TagsAddContainer = styled.div`
    display : flex;
    flex-direction : row;
`

export const TagsAddSearch = styled.input`
    width : 300px;
    height : 40px; 
`

export const TagsAddButton = styled.button`
    width : 100px;
    height : 46px;
    font-size : 1.02rem;
`

export const TagsAddTagContainer = styled.div`
    display : flex;
    flex-direction : row;

`

export const TagsAddTagContents = styled.div`
    display : flex;
    flex-direction : row;
`

export const TagsAddTagName = styled.div`
    height : 20px;
`

export const TagsAddTagIcon = styled.button`
    height : 20px;
`