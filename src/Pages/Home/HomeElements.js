import styled from 'styled-components'
import cover from '../../img/cover.jpg';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: black;
`;

export const Section1 = styled.div`
    display : grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.2fr 1fr;
    grid-gap: 20px;
    align-items: top;
    width: 100%;
    align-items: center;
    justify-items: center;
    // background-color: red;
    margin-bottom: 20px;
`

export const Section2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const HeaderText = styled.h1`
    color : white;
    font-size: 3em;
    font-weight: bold;
    grid-column: 1 / 3;
    text-align: center;
    margin: 0;
    padding: 0;
`;

export const IconsTab = styled.div`
    width: 100%;
    grid-column: 2 / 3;
    width: 90%;
    border : 2px solid white;
    border-radius : 0.5rem;
`

export const PetTab = styled.div`
    width: 100%;
    grid-column: 1 / 2;
    width: 90%;
    border : 2px solid white;
    border-radius : 0.5rem;
`

export const CoverTab = styled.div`
    display : grid;
    grid-template-columns: 1fr;
    width: 100%;
    height: 50vh;
    align-items: center;
`

export const CoverContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
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
    font-family: Garamond, serif;
`

export const Search = styled.button`
    width: 5rem;
    height: 3rem;
    border-radius: 10px;
    border: none;
    background-color: black;
    color: white;
    border : 3px solid green;
    font-size: 1rem;
    margin-left: 10px;
    caret-color: red;

    &:hover {
        cursor: pointer;
        background-color: green;
        color: white;
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
