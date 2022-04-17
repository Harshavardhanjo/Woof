import styled from 'styled-components';
export const MessageContainer = styled.div`
    display : grid;
    grid-template-columns : 0.2fr 1fr 0.2fr;
    padding : 10px;
    margin-left : 1px;
    margin-right : 1px;
    margin-top : 1rem;
    width : 85%;
    transition : all 0.5s ease-in-out;

    &:hover {
        cursor : pointer;
        background-color : grey;
    }
    `;

export const MessagePic = styled.img`
    width : 50px;
    height : 50px;
    border-radius : 50%;
    `;

export const MessageBox = styled.div`
    display : flex;
    flex-direction : column;
    `;
export const MessageHeader = styled.h1`
    font-size : 30px;
    font-weight : bold;
    text-align : left;
    `;

export const MessageName = styled.h1`
    font-size : 20px;
    `;

export const Message = styled.p`
    font-size : 20px;
    padding : 0px;
    margin : 0px;
    overflow : hidden;
    `;

export const MessageTime = styled.p`
    font-size : 15px;
    padding : 0px;
    margin : 0px;
    text-align : center;
    `;

export const SearchBar = styled.input`
    width : 90%;
    height : 30px;
    border : 1px solid #e5e5e5;
    font-size : 15px;

    :focus {
        outline : none;
    }

    ::placeholder {
        color : #e5e5e5;
    }
    `;