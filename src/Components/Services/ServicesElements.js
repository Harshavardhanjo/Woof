import styled from 'styled-components'

export const Container = styled.div`
    height: 20rem;
    width: 100%;
    background-color: transparent;
    border-radius: 10%;
`

// export const Row1 = styled.div`
//     display: flex;
//     flex-direction: row;
//     flex-wrap: wrap;
//     align-items: center;
//     align-self: left;
//     justify-content: space-between;
//     width: 100%;
//     height: 100%;
//     background-color: #f5f5f5;
//     box-shadow: 0px 0px 5px grey;
//     border-radius: 10px;
//     overflow-y: scroll;

//     ::-webkit-scrollbar {
//         width: 0.5rem;
//         height: 0.2rem;
//     }

//     ::-after {
//         flex : auto;
//         content: "";
// `

export const Row1 = styled.div`
    display : grid;
    gap : 1rem;
    grid-template-columns : 1fr 1fr 1fr 1fr;
    box-shadow: 0px 0px 5px grey;
    border-radius: 10px;
    overflow-y: scroll;
    width: 100%;
    height: 100%;

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
    width: 70%;
    height: 70%;
    

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
    background-color: #d6d6d6;
    border-radius: 10%;
    ;
`


export const Icon = styled.img`
    width: 40%;
    height: 50%;
`

export const Name = styled.h1`
    font-size: 1rem;
    `

