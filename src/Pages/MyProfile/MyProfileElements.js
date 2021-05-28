import styled from 'styled-components'

export const MyProfileContainer = styled.div`
    display : flex;
    flex-direction : row;
    background-color : blue;
    width : 100%;
    flex-wrap : wrap;
`

export const MyProfileTopContainer = styled.div`
    display : flex;
    width : 100%;
    background-color : red;
    flex-direction : row;
    height : 10%;
`

export const MyProfilePostsContainer = styled.div`
    display : flex;
    width : 70%;
    background-color : green;
`

export const MyProfileUtilContainer = styled.div`
    display : flex;
    width : 30%;
    background-color : pink;
`

export const MyProfileProfileImg = styled.img`
    width : 20%;
    height : 20rem;
    border : 3px solid black;
    padding : 10px;
    background-color : cyan;
`

export const MyProfilePetIcon = styled.img`
    width : 2rem;
    height : 2rem;
    border-radius : 100%;
    padding : 1rem;

    &:hover
    {
        transition : 0.2s ease-in-out;
        transform : scale(1.09)
    }
`

export const MyProfileCoverImg = styled.img`
    width : 80%;
    height : 20rem;
    border : 3px solid black;
    padding : 10px;
    background-color : cyan;
`

export const MyprofileNavContainer = styled.div`
    display : flex;
    flex-direction : row;
    width : 100%;
    justify-content : space-between;

`

export const MyProfileNav = styled.nav`
    display : flex;
    flex-direction : row;
    padding : 10px;
`
export const MyProfileNavContents = styled.li`
    list-style : none;
    height : 1rem;
    padding : 20px;
    color : white;

    &:hover
    {
        transition : 0.2 ease-in-out;
        border-bottom : 2px solid green;
    }
`

export const MyProfilePetsNav = styled.nav`
    display : flex;
    flex-direction : row;
    padding : 10px;

`