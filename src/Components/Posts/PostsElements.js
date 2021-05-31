import styled from 'styled-components'

export const PostCard = styled.div`
    display : flex;
    flex-direction : column;
    background-color : #2A2B2DFF;
    margin-left : 4rem;
    margin-right : 4rem;
    border : 2px solid black;
    border-radius : 10px;
    margin-bottom : 1.5rem;
    margin-top : 3rem;
`

export const PostTop = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    width : 100%;
    margin-top : 1rem;
`

export const PostProfile = styled.div`
    display : flex;
    flex-direction : row;
`

export const PostProfileImg = styled.img`
    width : 3rem;
    height : 3rem;
    padding : 10px;
    border-radius : 40px;
    overflow : hidden;
    margin-left : 2rem;

`

export const PostProfileDetails = styled.div`
    margin-top : 1rem;
    color : white;
    font-size : 1.2rem;
`

export const PostProfileReport = styled.div`
    padding : 20px;
    transform : scale(1.8);

`

export const PostImg = styled.img`
    width : 90%;
    padding : 1rem;
    margin-left : 1.4rem;
    border : 3px;
    border-radius : 10px;
    object-fit : cover;
`

export const PostBot = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    width : 50%;
    margin-left : 13.5rem;

`

export const PostLike = styled.button`
    
    background-color : #2A2B2DFF;
    width : 3rem;
    height : 1.5rem;
    margin-bottom : 1rem;
    border : none;
    outline : none;
`

export const PostShare = styled.button`
    
    background-color : #2A2B2DFF;
    width : 3rem;
    height : 1.5rem;
    margin-bottom : 1rem;
    border : none;
    outline : none;
`

export const PostComment = styled.button`

    background-color : #2A2B2DFF;
    width : 3rem;
    height : 1.5rem;
    margin-bottom : 1rem;
    border : none;
    outline : none;
`

export const PostAbout = styled.div`
    display : flex;
    justify-content : center;
`

