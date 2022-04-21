import styled from 'styled-components';


export const FeedContainer = styled.div`
    display: grid;
    grid-template-columns: 0.7fr 2fr 0.6fr;
    grid-template-rows: 1fr 1fr;
    `;

export const FeedBox1 = styled.div`
    grid-row: 1/2;
    display : flex;
    flex-direction : column;
    justify-content : flex-start;
    align-items : center;
    background-color : #f5f5f5;
    border-radius : 10px;
    padding : 10px;
    margin-top : 30px;
    margin-left : 30px;
    border : 1px solid #e5e5e5;

    &:hover {
        cursor : pointer;
    }
    `;

export const FeedBox2 = styled.div`
    display : grid;
    grid-template-columns : 1fr;
    grid-template-rows : 0.07fr 1fr;
    grid-column : 2/3;
    grid-row : 1/-1;
    margin : 10px;
    height : 90vh;
    justify-content : start;
    align-items : start;
    overflow-y : scroll;

    ::-webkit-scrollbar {
        width: 10px;
    }
    `;

export const FeedBox3 = styled.div`
    display : flex;
    grid-row : 1/2;
    flex-direction : column;
    align-items : center;
    background-color : #f5f5f5;
    border-radius : 10px;
    border : 1px solid #e5e5e5;
    padding : 10px;
    margin-top: 30px;
    margin-right : 30px;
    `;

export const FeedBox4 = styled.div`
    display : flex;
    flex-direction : column;
    grid-row : 2/-1;
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



export const SearchBox = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    margin : 0px;
    width : 100%;
    height : 50px;
    align-items : center;
    `;

export const SearchFilter = styled.select`
    font-size : 20px;
    height : 40px;
    font-weight : bold;
    margin : 0px;
    `;

export const SearchFilterOption = styled.option`
    font-size : 20px;
    font-weight : bold;
    margin : 0px;
    `;

export const SideBarHeaderContainer = styled.div`
    display : grid;
    grid-template-columns : 0.2fr 1fr;
    width : 100%;
    margin-bottom : 10px;
    `;
export const SideBarBackButton = styled.button`
    outline : none;
    border : none;
    font-weight : bold;
    margin : 0px;
    padding : 0px;
    justify-self : flex-start;

    &:hover {
        cursor : pointer;
    }
    `;

export const SideBarHeader = styled.h1`
    font-size : 20px;
    font-weight : bold;
    text-align : left;
    `;

export const SideBarItemsContainer = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : flex-start;
    align-items : flex-start;
    width : 100%;
    `;

export const SideBarItems = styled.div`
    display : flex;
    min-height : 50px;
    width : 100%;
    justify-content : center;
    align-items : center;
    background-color : red;
    margin-bottom : 10px;
    &:hover {
        cursor : pointer;
    }
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
    align-items : center;
    width : 100%;
    height : 100%;
    // overflow-y : scroll;

    ::-webkit-scrollbar {
        width : 0px;
    }
    `;

export const Post = styled.div`
    display : grid;
    grid-template-columns : 1fr;
    grif-template-rows : 1fr 1fr 1fr;
    width : 90%;
    min-height : 20vh;
    height : auto;
    margin: 20px;
    border-radius : 10px;
    border : 1px solid #e5e5e5;
    height : auto;
    background-color : white;
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
    font-weight : bold;
    `;
export const PostLocation = styled.div`
    font-size : 15px;
    grid-column : 1/2;
    margin-right : 10px;
    `;

export const PostTime = styled.div`
    font-size : 15px;
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
    width : 30%;
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
    border-top : 1px solid #e5e5e5;
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
    height : 30px;
    justify-self : center;

    &:hover {
        cursor : pointer;
        background-color : grey;
    }
    `;