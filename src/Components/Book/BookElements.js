import styled from 'styled-components';

export const BookContainer = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-gap: 10px;
    padding: 10px;
    `;

export const ServiceBox = styled.div`
    display: grid;
    grid-template-columns: 0.7fr 0.2fr 0.1fr;
    padding: 10px;
    border-bottom : 1px solid #e6e6e6;
    border-radius: 10px;

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


