import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const NavContainer = styled.div`
    display: grid;
    grid-template-columns: 0.7fr 0.5fr 0.7fr;
    width: 100%;
    max-width: 100%;
    height : 60px;
    position: absolute;
    background-color: black;
    top : 0px;
`;
export const NavSection1 = styled.div`
    display: flex;
    justify-content: flex-start;
`
export const Logo = styled.img`
    width: 100%;
    height: 100%;
    padding: 10px;
`

export const Name = styled.h1`
    font-size: 2rem;
    color: white;
    font-weight: bold;
    margin-left: 40px;
`

export const NavSection2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

export const NavItems = styled.button`
    font-size: 1.2rem;
    color: white;
    border: none;
    background-color: transparent;
    display: inline-block; 

    &:hover {
        cursor: pointer;
        border-bottom: 2px solid white;
    }
`

export const NavLink = styled(LinkR)`
    font-size: 1rem;
    font-weight: bold;
    color: white;
    margin: 10px;
    `;

export const NavBarDropDown = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    right: 100px;
    color: black;
    border-radius: 5px;
    z-index: 1;
    transition: 0.5s all ease-in-out;
    margin:0
    padding: 0;
    &:hover {
        cursor: pointer;
        color: black;
        transition: 0.5s;
    }
    
`

export const NavSection3 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    `;

export const NavBarDropDownContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    color: white;
    width: 100%;
    margin:0
    padding: 0;
    &:hover {
        cursor: pointer;
        color: black;
        transition: 0.5s;
    }
    
`;

export const NavBarDropDownItem = styled.button`
    font-size: 1rem;
    font-weight: bold;
    color: white;
    min-width: 100px;
    border: none;
    outline: none;
    display: flex;
    align-self: center;
    justify-content: center;
    background-color: transparent;
    height: 40px;
    margin: 10px;
    padding-top: 10px;
    &:hover {
        cursor: pointer;
        transition: 0.5s;
        background-color: white;
        color: black;
        border-radius: 5px;
    }
`;