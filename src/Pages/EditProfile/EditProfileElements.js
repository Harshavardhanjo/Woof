import styled from 'styled-components'

export const EditProfileContainer = styled.div`
    margin-top : 10%;
    display : flex;
    flex-direction : column;
    width : 100%;
    height : 100%;
    justify-content : center;
    align-items : center;
    width : 70%;
    margin-left : 15%;
    background-color : #95DBE5FF;
    border : 1px solid black;
    padding-bottom : 4rem;

`

export const EditProfileUser = styled.div`
    display : flex;
    flex-direction : row;
`

export const EditProfileImg = styled.img`
    width : 30%;
    height : 10%;
    margin-top : 3%;
    border-radius : 500px;
    overflow : hidden;
`

export const EditProfileDetails = styled.div`
    display : flex;
    flex-direction : column;
    width : 70%;
    align-items : space-evenly;
    margin-left : 5%;
    justify-content : space-evenly;
`

export const EditProfileInput = styled.input`
    border : none;
    background-color : white;
    width : 70%;
    height : 2rem;
    font-size : 1.2rem;
    border-radius : 20px;

    &:focus{
        border : none;
        border-bottom : 2px solid #195190FF;
        outline : none;
    }
`

export const EditProfileTags = styled.div`
    display : flex;
    flex-direction : column;
    margin-top : 5%;
    margin-left : 37%;
    width : 60%;
    height : 100%;
    margin-bottom : 5%auto;
    margin-right : 11%;

`

export const EditProfileTagsAddTagContainer = styled.div`
    display : flex;
    flex-direction : row;
    width : 100%;
    height : 100%auto;
    
    justify-content : space-evenly;
    
`

export const EditProfileTagsAddTag = styled.input`
    width : 60%;
    height : 30px;
    border : 0px;
    font-size : 1rem;
    background-color : white;
    border-radius : 20px;

    &:focus
    {
        outline : 0px;
        border : 0px;
        border-bottom : 2px solid #195190FF;

    }

    &::placeholder
    {
        padding-left : 2rem;
    }
`

export const EditProfileTagsButton = styled.button`
width : 20%;
border-radius : 20px;
border : 0px;
outline : 0px;
color : #ADEFD1FF;
background-color : #195190FF;
font-size : 1rem;

&:hover
{
    cursor: pointer;
    transform : scale(1.2);
    transition : 0.2s ease-in-out;
}

`

export const EditProfileAddedTags = styled.div`
    margin-top : 4%;
    margin-left : 2.5%;
    display : flex;
    flex-direction : row;
    flex-wrap : wrap;
    width : 60%;
    margin-left : 7%;
    justify-content : space-between;
`

export const EditProfileAddedTagsIcon = styled.button`
    color : white;
    background-color : #E94B3CFF;
    border-radius : 20px;
    outline : none;
    border : none;
    width : 30%;
    height : 2rem;
    padding-left : 1rem;
    padding-right : 1rem;
    font-size : 1rem;
    margin-top : 2rem;

    &:hover
    {
        cursor: pointer;
        color : white;
        transform : scale(1.09);
        transition : 0.2s ease-in-out;
    }
`