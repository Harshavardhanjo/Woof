import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const NavSection1 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`
export const Logo = styled.img`
    width: 100px;
    height: 100px;
    padding: 10px;
`

export const Name = styled.h1`
    font-size: 2rem;
    color: white;
    padding: 10px;
`

export const NavSection2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

export const NavItems = styled.button`
    font-size: 1rem;
    font-weight: bold;
    color: white;
    margin: 10px;
    border: none;
    background-color: transparent;
    border-radius: 5px;
    display: flex; 
    align-self: center;
    justify-content: center;
    height: 40px;
    padding-top: 10px;

    &:hover {
        cursor: pointer;
        background-color: white;
        color: black;
        transition: 0.5s;
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
    background-color: black;
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

export const NavBarDropDownItem = styled.li`
    font-size: 1rem;
    font-weight: bold;
    color: white;
    margin: 10px;
    border: none;
    background-color: blue;
    border-radius: 5px;
    display: flex;
    align-self: center;
    justify-content: center;
    height: 40px;
    padding-top: 10px;
`

export const NavBarDropDownLogout = styled.li`
    font-size: 1rem;
    font-weight: bold;
    color: white;
    margin: 10px;
    border: none;
    background-color: transparent;
    border-radius: 5px;
    display: flex;
    align-self: center;
    justify-content: center;
    height: 40px;
    padding-top: 10px;
`