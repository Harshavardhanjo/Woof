import styled from 'styled-components';


export const FeedContainer = styled.div`
    display: grid;
    grid-template-columns: 0.7fr 2fr 1fr;
    grid-template-rows: 1fr 1fr;
    `;

export const FeedBox1 = styled.div`
    grid-row: 1/2;
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
    justify-content : flex-start;
    align-items : center;
    grid-column : 2/3;
    grid-row : 1/-1;
    flex-direction : column;
    padding : 10px;
    margin : 10px;
    background-color : red;
    height : 90vh;
    `;

export const FeedBox3 = styled.div`
    display : flex;
    grid-row : 1/-1;
    flex-direction : column;
    align-items : center;
    background-color : #f5f5f5;
    border-radius : 10px;
    border : 1px solid #e5e5e5;
    padding : 10px;
    margin : 10px;
    `;

export const FeedBox4 = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    background-color : #f5f5f5;
    border-radius : 10px;
    border : 1px solid #e5e5e5;
    padding : 10px;
    margin : 10px;
    max-height : 40vh;
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
    margin-top : 1rem;
    width : 85%;

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

export const SearchBox = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    width : 100%;
    align-items : center;
    background-color : blue;
    `;

export const SearchFilter = styled.select`
    font-size : 20px;
    font-weight : bold;
    `;

export const SearchFilterOption = styled.option`
    font-size : 20px;
    font-weight : bold;
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

export const FeedPost = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    background-color : #f5f5f5;
    border-radius : 10px;
    width : 100%;
    margin : 10px;
    justify-self : center;
    `;

export const Post = styled.div`
    display : grid;
    grid-template-columns : 1fr;
    grif-template-rows : 1fr 1fr 1fr;
    width : 100%;
    row-gap : 0px;
    min-height : 20vh;
    margin: 10px;
    `;

export const PostTopContainer = styled.div`
    display : grid;
    grid-template-columns : 0.1fr 1fr 1fr;
    justify-items : space-between;
    grid-column : 1/-1
    `;

export const PostPicPet = styled.img`
    width : 50px;
    height : 50px;
    border-radius : 50%;
    margin: 10px;
    `;

export const PostPicUser = styled.img`
    width : 50px;
    height : 50px;
    border-radius : 50%;
    margin: 10px;
    justify-self : end;
    `;
export const PostDetails = styled.div`
    display : grid;
    grid-template-columns : 1fr 1fr;
    align-items : start;
    justify-items : start;
    margin: 10px;
    `;
export const PostDetailsSub = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    align-items : center;
    `;

export const PostUser = styled.div`
    font-size : 20px;
    grid-column : 1/-1;
    `;
export const PostLocation = styled.div`
    font-size : 20px;
    grid-column : 1/2;
    `;

export const PostTime = styled.div`
    font-size : 20px;
    grid-column : 2/-1;
    `;

export const PostPhotoContainer = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    width : 100%;
    background-color : #f5f5f5;
    `;

export const PostPhoto = styled.img`
    max-height : 40vh;
    max-width : 100%;
    border-radius : 10px;
    `;
export const PostPhotoSelect = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    align-items : center;
    position : relative;
    width : 80%;
    height : 100%;
    z-index : 1;
    top : -50%;
    `;

export const PostphotoScroll = styled.button`
    font-size : 20px;
    border : 1px solid #e5e5e5;
    border-radius : 10px;
    height : 50px;
    margin : 10px;
    `;

export const PostBottomContainer = styled.div`
    display : grid;
    grid-template-columns : 1fr 1fr 1fr;
    `;

export const PostAboutContainer = styled.div`
    font-size : 20px;
    text-align : left;
    margin : 10px;
    `;

export const PostButton = styled.button`
    font-size : 20px;
    border : 1px solid #e5e5e5;
    border-radius : 10px;
    margin : 10px;
    height : 50px;
    justify-self : center;
    `;