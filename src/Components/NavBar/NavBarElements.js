import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    height : 60px;
    background-color: black;
`

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