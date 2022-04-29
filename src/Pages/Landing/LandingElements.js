import styled from 'styled-components';

export const LandingContainer = styled.div`
    display : grid;
    grid-template-columns : 1fr 1fr;
    grid-template-rows : 1fr;
    width : 100%;
    height : 100vh;
    overflow : hidden;
    padding : 0px;
    align-items : center;
    background-color : black;
    `;

export const LeftContainer = styled.div`
    margin-top : 80px;
    // background-color : red;
    height : 90%;
    display : flex;
    justify-content : center;
    align-items : center;
    border-right : 1px solid white;
    
    `;

export const RightContainer = styled.div`
    margin-top : 80px;
    height : 90%;
    display : flex;
    justify-content : center;
    align-items : center;
    border-left : 1px solid white;
    `;

export const LeftBox = styled.div`
    display : grid;
    grid-template-columns : 1fr;
    grid-template-rows : 1fr 1fr 1fr;
    justify-items : center;
    align-items : center;
    height : 80%;
    width : 70%;
    // border : 1px solid white;
    `;

export const RightBox = styled.div`
    display : grid;
    grid-template-columns : 1fr;
    grid-template-rows : 1fr 1fr 1fr;
    justify-items : center;
    align-items : center;
    height : 80%;
    width : 70%;
    // border : 1px solid white;
    `;

export const HeroTextContainer = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    `;

export const HeroText = styled.h1`
    font-size : 3rem;
    font-weight : bold;
    color : white;
    `;

export const ServicesContainer = styled.div`
    display : grid;
    grid-template-columns : 1fr 1fr 1fr;
    grid-template-rows : 1fr 1fr;
    height : 10rem;
    width : 100%;
    justify-items : center;
    align-items : center;
    `;

export const ServiceImg = styled.img`
    width : 5rem;
    height : 5rem;
    margin : 20px;
    `;

export const GoButton = styled.button`
    font-size : 2rem;
    font-weight : bold;
    color : white;
    border : 1px solid white;
    background-color : black;
    text-align : center;
    border-radius : 5px;
    outline : none;
    height : 5rem;
    width : 10rem;
    
    &:hover {
        cursor : pointer;
        background-color : white;
        transition :0.5s;
        color : black;
    }
    `;
    
export const RightImg = styled.img`
    width : 10rem;
    height : 10rem;
    margin : 20px;
    `;

