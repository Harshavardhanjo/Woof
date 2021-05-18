import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const SignUpCardServices = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    width : 70%;
    background-color : red;
    flex-direction : column;
`;

export const SignUpCardContainer = styled.div`
    display : flex;
    justify-content : center;
    flex-direction : column;
    align-items : center;
    height : 1000px;
    background-color : blue;
`

export const SignUpContents1 = styled.div`
    display : flex;
    flex-direction : row;
    height : 150px;
    width : 800px;
    align-items : center;
    justify-content : space-between;
`

export const SignUpContents2 = styled.div`
    display : flex;
    flex-direction : row;
    height : 150px;
    width : 800px;
    align-items : center;
    justify-content : center;
`
export const GoogleButton = styled.button`
    background-color : 	#4285F4;
    height : 50px;
    border-radius : 40px;
    font-size : 1.05rem;
    color : white;
    border-style : hidden;

    &:hover{
        transition : 0.2s all ease-in-out;
        background-color : white;
        color : black;
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
    }
`

export const VerifyButton = styled.button`
    background-color : 	black;
    height : 50px;
    border-radius : 40px;
    font-size : 1.05rem;
    color : white;
    border-style : hidden;

    &:hover{
        transition : 0.2s all ease-in-out;
        background-color : white;
        color : black;
    }
`




