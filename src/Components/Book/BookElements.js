import styled from 'styled-components';

export const BookContainer = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 0.4fr 0.6fr;
    grid-gap: 10px;
    height: 100%;
    `;

export const BookBox = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-wrap: 1fr;
    grid-gap: 10px;
    padding: 10px;
`;

export const ServiceBox = styled.div`
    display: grid;
    border-bottom : 1px solid black;
    border-radius: 10px;
    padding: 10px;
    grid-gap: 10px;
    &:hover {
        cursor: pointer;
    }

    &:focus {
        display: grid;
        grid-template-rows: 0.2fr 0.9fr 0.2fr;
        grid-gap: 10px;
        border : 1px solid black;
        overflow-y: scroll;

        ::-webkit-scrollbar {
            width: 10px;
            height: 10px;
        }
    }
    

    `;

export const ServiceTop = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 0.7fr 0.3fr;
    padding: 10px;
    `;

export const ServiceBody = styled.div`
    ${ServiceBox}:focus & {
        display: grid;
        grid-gap: 10px;
        height: 100%;
        width: 100%;
        justify-items: center;
    }
    display: none;
    `;

export const ServiceDescription = styled.div`
    display : block;
    text-align: left;
    padding: 10px;
    font-size: 1.5rem;
    width: 100%;
    `;

export const ServicePets = styled.div`
    display : flex;
    max-height: 100%;
    width: 100%;
    overflow-y: scroll;
    border-radius: 10px;
    ::-webkit-scrollbar {
        display: none;
    }
    `;

export const ServicePetImg = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    margin: 10px;
    `;

export const ServiceName = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    `;

export const ServicePrice = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    text-align: right;
    `;

export const ServiceBook = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    `;

export const BookButton = styled.button`
    
    ${ServiceBox}:focus & {
        display: block;
        background-color: green;
        border-radius: 10px;
        border: none;
        color: white;
        padding: 10px;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        cursor: pointer;
        width: 50%;
        height: 100%;
    }
    display : none;
    `;


export const InterfaceBox = styled.div`
    display: grid;
    grid-template-rows: 0.1fr 0.5fr 0.2fr auto;
    justify-items: left;
    align-items: top;
    border: 1px solid black;
    padding: 10px;
    grid-gap: 10px;
    height: 400px;
    border-radius: 10px;
    position: sticky;
    top : 50px;
    `;

export const InterfaceHeading = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    text-align: left;
    font-size: 2rem;
    font-weight: bold;
    min-width: 100%;
    min-height: 100%;
    `;

export const InterfaceContent = styled.div`
    display: flex;
    justify-content: left;
    align-items: top;
    text-align: left;
    min-width: 100%;
    min-height: 100%;
    `;

export const InterfacePets = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    text-align: left;
    min-width: 100%;
    min-height: 100%;
    `;

export const InterfacePetsImg = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 10px;
    `;


