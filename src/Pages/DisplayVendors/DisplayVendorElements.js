import styled from 'styled-components';

export const DisplayVendorContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    `;
export const DisplayVendorTopBar = styled.div`
    display : grid;
    grid-template-columns: repeat(3,0.05fr);
    grid-template-rows: 1fr;
    height: 100%;
    `;

export const DisplayVendorResult = styled.input`
    height : 2rem;
    width : 20rem;
    border-radius : 0.5rem;
    border : 1px solid #e3e3e3;
    padding : 0.5rem;
    margin-right : 0.5rem;
    `;

export const DisplayVendorServiceDropdown = styled.select`
    height : 3rem;
    width : rem;
    font-size : 1rem;
    border : 1px solid #e3e3e3;
    padding : 0.5rem;
    margin : 0.5rem;
    text-align : center;
    `;

export const DisplayVendorServiceDropdownOption = styled.option`
    height : 2rem;
    border-radius : 0.5rem;
    border : 1px solid #e3e3e3;
    padding : 0.5rem;
    margin-right : 0.5rem;
    `;

export const DisplayVendorResultButton = styled.button`
    height : 2rem;
    width : 6rem;
    border-radius : 0.5rem;
    border : 1px solid #e3e3e3;
    padding : 0.5rem;
    margin-right : 0.5rem;
    `;


export const DisplayVendorTopBarRight = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    background-color: #f5f5f5;
    margin-right: 0.5rem;
    `;


export const DisplayVendorSelectedService = styled.h1`
    font-size : 1.5rem;
    font-weight : bold;
    color : black;
    `;

export const DisplayVendorLoading = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    `;

export const DisplayVendorLoadingImg = styled.img`
    width: 50%;
    height: 50%;
    `;

    

