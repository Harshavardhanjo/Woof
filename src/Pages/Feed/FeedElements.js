import styled from 'styled-components';


export const FeedContainer = styled.div`
    display: grid;
    grid-template-columns: 0.7fr 2fr 1fr;
    `;

export const FeedBox1 = styled.div`
    max-height: 30vh;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    background-color : #f5f5f5;
    border-radius : 10px;
    padding : 10px;
    margin : 10px;
    border : 1px solid #e5e5e5;

    &:hover {
        cursor : pointer;
    }
    `;

export const FeedBox2 = styled.div`
    display : flex;
    flex-direction : column;
    align-items : top;
    padding : 10px;
    margin : 10px;
    background-color : red;
    height : 90vh;
    `;

export const FeedBox3 = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    background-color : #f5f5f5;
    border-radius : 10px;
    padding : 10px;
    margin : 10px;
    max-height : 40vh;
    box-shadow : 0px 0px 10px 0px rgba(0,0,0,0.75);
    `;

export const ProfilePic = styled.img`
    width : 100px;
    height : 100px;
    border-radius : 50%;
    `;

export const ProfileName = styled.h1`
    font-size : 20px;
    `;

export const ProfileBio = styled.p`
    font-size : 15px;
    `;

export const ProfileBox = styled.div`
    display : grid;
    grid-template-columns : 1fr 1fr 1fr;
    grif-template-rows : 1fr 1fr;
    width : 100%;
    row-gap : 0px;
    background-color : red;
    `;

export const ProfileData = styled.p`
    font-size : 15px;
    padding : 0px;
    margin : 0px;
    text-align : center;
    font-weight : ${props => props.bold ? 'bold' : 'normal'};
    `;

export const MessageContainer = styled.div`
    display : grid;
    grid-template-columns : 0.2fr 1fr 0.2fr;
    padding : 10px;
    margin-left : 1px;
    margin-right : 1px;
    margin-bottom : 1px;

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
    width : 100%;
    height : 30px;
    border-radius : 10px;
    border : 1px solid #e5e5e5;
    `;

export const FeedPost = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    background-color : #f5f5f5;
    border-radius : 10px;
    padding : 10px;
    margin : 10px;
    box-shadow : 0px 0px 10px 0px rgba(0,0,0,0.75);
    max-height : 20vh;
    `;

export const Post = styled.div`
    display : grid;
    grid-template-columns : 1fr 1fr 1fr;
    grif-template-rows : 1fr 1fr;
    width : 100%;
    row-gap : 0px;
    background-color : blue;
    `;
