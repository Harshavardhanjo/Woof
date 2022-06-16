import styled from 'styled-components';

export const VendorContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // background-color : red;
    overflow: hidden;
    `;

export const VendorBox = styled.div`
    margin-top : 20px;
    width: 98%;
    height : 100%;
    display : grid;
    grid-template-columns: ${props => props.box};
    {console.log(props.box[0])}
    grid-template-rows: 0.3fr 0.7fr;
    justify-items: center;
    grid-gap: 20px;
    align-items: center;
    transition: all 0.3s ease-in-out;
    `;


export const Section1 = styled.div`
    border-radius: 10px;
    width: 100%;
    height: 100%;
    background-color : white;
    display : grid;
    grid-gap: 10px;
    grid-template-columns : 0.2fr 0.8fr;
    grid-template-rows : 0.2fr 0.8fr;
    justify-items: flex-start;
    align-items: center;
    `;

export const ProfilePhotoBox = styled.div`
    width: 100%;
    height: 100%;
    display : flex;
    justify-content: center;
    align-items: center;
    grid-row: 1/-1;
    // background-color : red;

    `;

export const ProfilePhoto = styled.img`
    width: 93%;
    height: 93%;
    border-radius: 10px;
    object-fit: contain;
    `;

export const ProfileContentBox = styled.div`
    width: 100%;
    height: 100%;
    display : grid;
    grid-template-rows : 0.2fr 1fr;
    `;

export const ProfileServiceBox = styled.div`
    width: 100%;
    height: 100%;
    display : grid;
    grid-template-columns : 1fr;
    grid-template-rows : 1fr 1fr;
    grid-column : 2/-1;
    justify-items: start;
    // background-color : pink;
    `;

export const ProfileName = styled.div`
    width: 100%;
    height: 100%;
    font-size: 2rem;
    font-weight: bold;
    display : flex;
    justify-content: flex-start;
    align-items: center;
    color: #001E6C;
    `;

export const ProfileDescription = styled.div`
    width: 100%;
    height: 100%;
    font-size: 1.2rem;
    grid-column : 2/-1;
    margin-left: 10px;
    display : flex;
    justify-content: flex-start;
    `;

export const ProfileService = styled.div`
    width: 100%;
    height: 100%;
    // background-color : red;
    display : flex;
    justify-content: flex-start;
    flex-direction: row;
    overflow-x: scroll;

    ::-webkit-scrollbar {
        height: 10px;
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        background: #888;
    }
    `;

export const ProfileServiceImgBox = styled.div`
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    `;
export const ProfileServiceName = styled.div`
    width: 100%;
    height: 100%;
    font-size: 1rem;
    `;

export const ProfileServiceImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 10px;
    `;

export const ProfilePets = styled.div`
    width: 100%;
    height: 100%;
    // background-color : blue;
    display : flex;
    justify-content: flex-start;
    flex-direction: row;
    overflow-x: scroll;

    ::-webkit-scrollbar {
        display: none;
    }
    `;

export const ProfilePetImgBox = styled.div`
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    `;

export const ProfilePetName = styled.div`
    width: 100%;
    height: 100%;
    font-size: 1rem;
    `;

export const ProfilePetImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 10px;
    `;

export const Section2 = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 10px;
    display : grid;
    grid-template-columns : 0.7fr 0.3fr;
    grid-template-rows : 1fr;
    grid-gap: 10px;
    justify-items: center;
    // grid-row : 1/-1;
    grid-column : 2/-1;
    `;

export const ProfileOffersBox = styled.div`
    width: 100%;
    height: 100%;
    display : grid;
    grid-template-columns : 1fr;
    justify-items: start;
    background-color : pink;
    grid-row : 1/-1;
    `;

export const ProfileButtonBox = styled.div`
    width: 100%;
    height: 100%;
    display : grid;
    grid-template-columns : 1fr;
    grid-template-rows : 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    justify-items: center;
    `;

export const ProfileButton = styled.button`
    width: 100%;
    height: 100%;
    background-color: ${props => props.primaryColor ? props.primaryColor : '#001E6C'};
    border-radius: 10px;
    border: none;
    border-bottom: 2px solid #001E6C;
    outline: none;
    color: white;
    font-size: 1rem;
    font-weight: bold;

    &:hover {
        color: #001E6C;
        cursor: pointer;
        outline: none;
        }
    `;

export const Section3 = styled.div`
    width: 100%;
    height: stretch;
    background-color: white;
    border-radius: 10px;
    grid-column: 1/2;
    display : grid;
    grid-template-columns : 1fr;
    grid-gap: 10px;
    justify-items: center;
    overflow-y: scroll;

    
    ::-webkit-scrollbar {
        width: 10px;
        }
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
        }
    ::-webkit-scrollbar-thumb {
        background: #001E6C;

        }
    `;

export const ProfilePostsBox = styled.div`
    width: 98%;
    display : grid;
    grid-template-columns : 1fr 1fr 1fr 1fr;
    grid-template-rows : 1fr 1fr;
    grid-gap: 10px;
    justify-items: center;
    margin-top: 10px;
    `;

export const PostBox = styled.div`
    display : grid;
    max-width: 100%;
    max-height: 100%;
    grid-template-rows : 0.9fr 0.1fr;
    grid-gap: 10px;
    justify-items: center;
    background-color : #001E6C;
    `;

export const PostPhotoBox = styled.div`
    display : flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    `;

export const PostPhoto = styled.img`
    width: 100%;
    height: 100%;
    `;

export const PostOptionsBox = styled.div`
    width: 90%;
    height: 100%;
    display : flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    // background-color : blue;
    `;

export const PostOptions = styled.div`
    width: 100%;
    height: 100%;
    display : flex;
    justify-content: center;
    align-items: center;
    `;

export const PostOptionsButton = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 10px;

    `;

export const Section4 = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 10px;
    display : grid;
    grid-template-columns : 1fr;
    grid-gap: 10px;
    justify-items: center;
    overflow-y: scroll;
    grid-column : 2/-1;
    grid-row : 1/-1;

    ::-webkit-scrollbar {
        width: 10px;
        }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
        }
    
    ::-webkit-scrollbar-thumb {
        background: #001E6C;
        height: 50px;
        }
    `;

export const TopBar = styled.div`
    width: 100%;
    height : 50px;
    display : flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    background-color: red;
    `;

export const TopBarExpand = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    margin: 10px;
    `;

