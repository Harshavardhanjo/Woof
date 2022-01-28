import styled from 'styled-components'
import cover from '../../img/cover.jpg';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 130vh;
`

export const Section1 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: space-between;
    width: 100%;
    height: 60%;

`

export const Section2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`

export const IconsTab = styled.div`
    display: flex;
    flex-direction: column;
    width: 50rem;
    align-items: center;
    justify-content: space-around;
    margin: 100px;
`

export const PetTab = styled.div`
    display: flex;
    flex-direction: column;
    width: 37rem;
    align-items: center;
    justify-content: space-around;
    margin: 100px;
`

export const CoverTab = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 70%;
    justify-content: space-around;
    align-items: center;
    background-image: url(${cover});
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-color: black;
`

export const TabHolder = styled.div`
    display: flex;
    flex-direction: row;
`

export const SearchBar = styled.input`
    width: 40rem;
    height: 3rem;
    border-radius: 10px;
    border: none;
    background-color: #f5f5f5;
    font-size: 1rem;
`

export const HeroText = styled.h1`
    font-size: 3rem;
    color: white;
    margin: 10px;
`

export const Search = styled.button`
    width: 5rem;
    height: 3rem;
    border-radius: 10px;
    border: none;
    background-color: green;
    font-size: 1rem;
    margin-left: 10px;
    caret-color: red;

    &:hover {
        cursor: pointer;
        background-color: white;
        color: black;
        transition: 0.5s;
    }

    &:focus {
        outline: none;
        caret-color: red;
    }
`

export const Location = styled.button`
    width : 7rem;
    height : 3rem;
    margin-right: 10px;
    border-radius : 10px;
    border : none;
    background-color : black;
    color : white;
    font-size : 1rem;
    overflow : hidden;
    text-overflow : ellipsis;

    &:hover {
        cursor : pointer;
        background-color : white;
        color : black;
        transition : 0.5s;
    }


`
