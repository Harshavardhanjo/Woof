import styled from "styled-components";

export const BookingHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    width : 100%;
    max-width: 100vw;
    height : 15%;
    `;

export const BookingsHeader = styled.h1`
    font-size: 4rem;
    font-weight: bold;
    color: black;
    text-align: center;
    margin-top: 1rem;
    padding-top: 1rem;
    padding-left: 1rem;
    
    `;

export const BookingsCard = styled.div`
    width : 100%;
    height : 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid black;
    margin-top: 1rem;
    `;

export const BookingsCardHeaderContainer = styled.div`
    width : 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    `;

export const BookingCardHeader = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    color: black;
    text-align: center;
    padding-left: 1rem;
    `;

export const BookingCardDate = styled.div`
    font-size: 1.3rem;
    font-weight: bold;
    color: black;
    text-align: center;
    margin-left: 1rem;
    `;

export const BookingCardBody = styled.div`
    width : 100%;
    height : 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    `;

export const BookingCardBodyBox = styled.div`
    width : 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
    `;

export const BookingCardBodyText = styled.div`
    font-size: 1.3rem;
    color: black;
    font-weight: bold;
    text-align: center;
    padding-left: 3rem;
    `;
export const BookingCardBodyText2 = styled.div`
    font-size: 1.2rem;
    color: black;
    text-align: center;
    margin-left: 1rem;
    `;
