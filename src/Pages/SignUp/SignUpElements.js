import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const SignUpCardServices = styled.div`
    display : flex;
    /* flex-wrap : wrap; */
    align-items : center;
    width : 25%;
    flex-direction : column;
    outline : rgb(232,233,236) solid;
    outline-width : 2px;
    height : 600px;

`;

export const SignUpCardContainer = styled.div`
    display : flex;
    justify-content : center;
    flex-direction : column;
    align-items : center;
    height : 900px;
    background-color : snow;
    
`

export const SignUpHeader = styled.div`
    font-size : 1rem;
    color : black;
`

export const SignUpContents1 = styled.div`
    display : flex;
    flex-direction : row;
    height : 100px;
    width : 600px;
    justify-content : space-around;
`

export const SignUpContents2 = styled.div`
    display : flex;
    flex-direction : column;
    flex-wrap : wrap;
    align-items : center;
    justify-content : center;
    /* background-color : red; */
    height : 120px;
`
export const GoogleButton = styled.button`
    background-color : 	#4285F4;
    height : 50px;
    border-radius : 40px;
    font-size : 1.05rem;
    color : white;
    border-style : hidden;
    width : 300px;

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
    margin-top : 10px;
    height : 40px;
    width : 200px;
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
    height : 100px;
    width : 200px;
`




