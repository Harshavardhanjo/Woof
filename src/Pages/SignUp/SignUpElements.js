import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const SignUpCardServices = styled.div`
    display : flex;
    /* flex-wrap : wrap; */
    align-items : center;
    width : 40%;
    flex-direction : column;
    outline : rgb(232,233,236) solid;
    outline-width : 2px;
    height : 100%;
    

`;

export const SignUpCardContainer = styled.div`
    display : flex;
    justify-content : center;
    flex-direction : column;
    align-items : center;
    height : 100%;
    width : 100%;
    background-color : snow;
    
`

export const SignUpHeader = styled.div`
    font-size : 1rem;
    color : black;
`

export const SignUpContents1 = styled.div`
    display : flex;
    flex-direction : row;
    height : 100%;
    width : 100%;
    justify-content : space-around;
`

export const SignUpContents2 = styled.div`
    display : flex;
    flex-direction : column;
    flex-wrap : wrap;
    align-items : center;
    justify-content : center;
    /* background-color : red; */
    height : 10rem;
    width : 80%;
`
export const GoogleButton = styled.button`
    background-color : 	#4285F4;
    height : 2.5rem;
    border-radius : 40px;
    font-size : 1.05rem;
    color : white;
    border-style : hidden;
    width : 70%;
    outline : none;

    &:hover{
        transition : 0.2s all ease-in-out;
        background-color : white;
        color : black;
        cursor: pointer;
    }
`

export const FacebookButton = styled.button`
    background-color : #4267B2;
    height : 50px;
    border-radius : 40px;
    font-size : 1.05rem;
    color : white;
    border-style : hidden;

    &:hover{
        transition : 0.2s all ease-in-out;
        background-color : white;
        color : black;
        cursor: pointer;
    }
`

export const AppleButton = styled.button`
    background-color : #66b447;
    height : 50px;
    border-radius : 40px;
    font-size : 1.05rem;
    color : white;
    border-style : hidden;

    &:hover{
        transition : 0.2s all ease-in-out;
        background-color : white;
        color : black;
        cursor: pointer;
    }
`

export const VerifyButton = styled.button`
    background-color : #0095f6;
    margin-top : 5%;
    height : 35%;
    width : 50%;
    border-radius : 10px;
    font-size : 1.05rem;
    color : white;
    border-style : hidden;

    &:hover{
        transition : 0.2s all ease-in-out;
        background-color : #4bb543;
        cursor: pointer;
    }
`

export const BackgroundImg = styled.img`
    position : absolute;
    z-index : -1;
    display : flex;
    width : 850px;
    height : 750px;

`

export const Logo = styled.img`
    margin-top : -10%;
    height : 20%;
    width : 80%;
`

export const ContinueButton = styled.button`
    background-color : #0095f6;
    margin-top : 5%;
    height : 3rem;
    width : 50%;
    border-radius : 10px;
    font-size : 1.05rem;
    color : white;
    border-style : hidden;

    &:hover{
        transition : 0.2s all ease-in-out;
        background-color : #4bb543;
        cursor: pointer;
    }
`






