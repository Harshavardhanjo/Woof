import styled from 'styled-components'

export const MyProfileContainer = styled.div`
    display : flex;
    flex-direction : row;
    width : 100%;
    flex-wrap : wrap;
    height : 100%;
`

export const MyProfileTopContainer = styled.div`
    display : flex;
    width : 100%;
    background-color : white;
    flex-direction : row;
    height : 10%;
    
`

export const MyProfilePostsContainer = styled.div`
    display : flex;
    flex-direction : column;
    width : 70%;
    background-color : black;
    padding : 10px;
    margin-top : 5%;
`

export const MyProfileUtilContainer = styled.div`
    display : flex;
    width : 28.5%;
    margin-top : 5%;
    background-color : whitesmoke;
`

export const MyProfileProfileImg = styled.img`
    width : 10%;
    height : 10rem;
    border : 3px solid white;
    border-radius : 20rem;
    background-color : cyan;
    z-index : 2;
    position : absolute;
    margin-left : 5%;
    margin-top : 20%;
    
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
    width : 100%;
    height : 25rem;
    border : 3px solid white;
    background-color : cyan;
    z-index : 1;
    align-items : stretch;
    object-fit : cover;
`

export const MyprofileNavContainer = styled.div`
    display : flex;
    flex-direction : row;
    width : 100%;
    justify-content : space-between;
    background-color : #12a4d9;
    position : fixed;
    z-index : 3;
    margin-top : -1rem;

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
    font-size : 1.2rem;

    &:hover
    {
        transition : 0.2 ease-in-out;
        border-bottom : 3px solid #e2d810;
    }
`

export const MyProfilePetsNav = styled.nav`
    display : flex;
    flex-direction : row;
    padding : 10px;
    

`

export const MyProfileLogo = styled.text`
    font-size : 2rem;
    color : white;
    margin-top : 1.2rem;
    margin-left : 1rem;
    font-family : Georgia, 'Times New Roman', Times, serif;
`