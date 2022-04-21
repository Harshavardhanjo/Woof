import styled from 'styled-components';
export const MessageContainer = styled.div`
    display : grid;
    grid-template-columns : 0.2fr 1fr 0.2fr;
    margin-top : 1rem;
    width : 100%;
    transition : all 0.5s ease-in-out;

    &:hover {
        cursor : pointer;
        background-color : grey;
        border-radius : 10px;
    }
    `;

export const MessagePic = styled.img`
    width : 30px;
    height : 30px;
    border-radius : 50%;
    margin-top : 10px;
    margin-left : 10px;
    `;

export const MessageBox = styled.div`
    display : flex;
    flex-direction : column;
    margin-left : 10px;
    height : 60px;
    `;
export const MessageHeader = styled.h1`
    font-size : 30px;
    font-weight : bold;
    text-align : left;
    margin : 0px;
    padding : 0px;
    `;

export const MessageName = styled.h1`
    font-size : 15px;
    margin : 0px;
    padding : 0px;
    `;

export const Message = styled.p`
    font-size : 15px;
    padding : 0px;
    margin : 0px;
    overflow : hidden;
    `;

export const MessageTime = styled.p`
    font-size : 15px;
    padding : 0px;
    margin-right : 10px;
    text-align : center;
    margin-top : 10px;
    `;

export const SearchBar = styled.input`
    width : 100%;
    height : 30px;
    border : 1px solid #e5e5e5;
    border-radius : 5px;
    font-size : 15px;

    :focus {
        outline : none;
    }

    ::placeholder {
        color : #e5e5e5;
    }
    `;