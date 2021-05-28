import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const TagsContainer = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : center;
    width : 100%;
    height :100%;
`

export const TagsMain1= styled.div`
    display : flex;
    flex-direction : column;
    background-color : black;
    height : 700px;
    justify-content : space-evenly;
    width : 100%;
    align-items : center;
    /* justify-content : center; */
    
`

export const TagsMain2 = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-evenly;
    height : 700px;
    width : 30%;
    background-color : green;
`

export const TagsHeader = styled.div`
    font-size : 3rem;
    color : white;
`

export const TagsAddContainer = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    width : 50%;
    height : 50%;
`

export const TagsAddSearch = styled.input`
    width : 70%;
    height :15%;
    border-radius : 50px; 
    outline : 0px;
    border : 0px;
`

export const TagsAddButton = styled.button`
    width : 20%;
    height : 15%;
    font-size : 1.02rem;
    border-radius : 50px;
    outline : 0px;
    border : 0px;
    color : black;

    &:hover
    {
        background-color : yellow;
        transition : 0.2s all ease-in-out;
        color : black;
        cursor: pointer;
    }
`

export const TagsAddTagContainer = styled.div`
    display : flex;
    flex-direction : row;

`

export const TagsAddTagContents = styled.div`
    display : flex;
    flex-direction : row;
    flex-wrap : wrap;
    justify-content : space-around;
    width : 400px;
    
`

export const TagsAddTagName = styled.div`
    height : 20px;
`

export const TagsAddTagIcon = styled.button`
    width : 100px;
    height : 30px;
    font-size : 1.02rem;
    border-radius : 50px;
    outline : 0px;
    border : 0px;

    &:hover
    {
        background-color : green;
        transition : 0.2s all ease-in-out;
    }
`