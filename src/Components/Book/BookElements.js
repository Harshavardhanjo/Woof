import styled from 'styled-components';

export const BookContainer = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 0.7fr 0.3fr;
    grid-gap: 10px;
    padding: 10px;
    `;

export const BookBox = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-gap: 10px;
    padding: 10px;
    // border: 1px solid black;
`;

export const ServiceBox = styled.div`
    display: grid;
    grid-template-columns: 0.7fr 0.2fr 0.1fr;
    padding: 10px;
    border-bottom : 1px solid #e6e6e6;
    border-radius: 10px;

    &:hover {
        background-color: #e6e6e6;
        cursor: pointer;
    }

    &:active {
        background-color: #e6e6e6;
    }

    &:focus {
        background-color: #e6e6e6;
    }

    &:focus-within {
        background-color: #e6e6e6;
    }
    

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
    justify-content: left;
    align-items: center;
    text-align: center;
    `;

export const ServiceBook = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    `;

export const BookButton = styled.button`
    background-color: green;
    border-radius: 10px;
    border: none;
    color: white;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    width: 100%;
    `;


export const DetailsBox = styled.div`
    display: grid;
    grid-template-rows: 0.1fr 0.5fr 0.2fr auto;
    justify-items: left;
    align-items: top;
    border: 1px solid black;
    padding: 10px;
    grid-gap: 10px;
    max-width: 100%;
    max-height : 300px;
    min-height : 300px;
    border-radius: 10px;
    `;

export const DetailsHeading = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    text-align: left;
    font-size: 2rem;
    font-weight: bold;
    min-width: 100%;
    min-height: 100%;
    `;

export const DetailsContent = styled.div`
    display: flex;
    justify-content: left;
    align-items: top;
    text-align: left;
    min-width: 100%;
    min-height: 100%;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none;
    }
    `;

export const DetailsPets = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    text-align: left;
    min-width: 100%;
    min-height: 100%;
    `;

export const DetailsPetsImg = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 10px;
    `;


