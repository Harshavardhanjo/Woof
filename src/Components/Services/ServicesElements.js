import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20rem;
    background-color: #f5f5f5;
`

export const Row1 = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    box-shadow: 0px 0px 5px grey;
    border-radius: 10px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 0.5rem;
        height: 0.2rem;
    }
`

export const Row2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
`

export const IconTab = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    width: 10rem;
    height: 100px;

    &:hover {
        cursor: pointer;
        background-color: #d6d6d6;
        transition: 0.5s;
        border-radius: 10%;
    }
`

export const IconTabSelected = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 15px;
    width: 7rem;
    height: 100px;
    background-color: #b4dee0;
    border-radius: 10%;
    ;

    &:hover {
        cursor: pointer;
    }
`


export const Icon = styled.img`
    width: 3rem;
    height: 3rem;
`

export const Name = styled.h1`
    font-size: 1rem;
    `

