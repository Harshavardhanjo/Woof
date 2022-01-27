import styled from 'styled-components'
import blue from '../../img/blue.jpg'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 1000px;
`

export const Section1 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: space-between;
    width: 100%;
    height: 100%;

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
    height: 100%;
    justify-content: space-around;
    align-items: center;
    background-image: url(${blue});
    object-fit: cover;
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

    &:hover {
        cursor: pointer;
        background-color: white;
        color: black;
        transition: 0.5s;
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

    &:hover {
        cursor : pointer;
        background-color : white;
        color : black;
        transition : 0.5s;
    }


`
