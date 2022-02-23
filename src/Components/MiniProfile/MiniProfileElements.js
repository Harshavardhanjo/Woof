import styled from "styled-components";

export const MiniProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60rem;
    height: 100%;
    max-height: 100vh;
    overflow-y: scroll;
    transition: all 0.5s ease-in-out;

    ::-webkit-scrollbar {
        width: 0rem;
        height: 0.2rem;
    }
    `;

export const MiniprofileTopBar = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem;
    background-color: #f5f5f5;
    border-bottom: 1px solid #e3e3e3;
    `;

export const MiniprofileTopBarLeft = styled.div`
    display: flex;  
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem;
    background-color: #f5f5f5;
    `;

export const MiniprofileTopBarRight = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem;
    background-color: #f5f5f5;
    `;
    
    
export const MiniProfileTopIcon = styled.img`
    height: 1.2rem;
    width: 1.2rem;
    padding: 0.1rem;
    margin-right: 0.5rem;

    &:hover {
        cursor: pointer;
    }
    `;


export const MiniProfileCoverTab= styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50%;
    align-items: center;
    `;

export const MiniProfileCoverPhoto = styled.img`
    width: 100%;
    height : 30rem;
    object-fit: cover;
    `;

export const MiniProfileCarousel = styled.div`
    width: 50%;
    height : 10%;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    `;

export const MiniProfileCarouselIcon = styled.img`
    width: 2rem;
    height: 2rem;
    `;

export const MiniProfileIconsTab = styled.div`
    display: flex;
    flex-direction: row;
    width : 10rem;
    height : 2.7rem;
    background-color: transparent;
    position: absolute;
    `;
export const MiniProfileIcons = styled.img`
    width : 2rem;
    height : 2rem;
    `;

export const MiniProfileHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 10%;
    justify-content: space-between;
    `;

export const MiniProfileHeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width : 50%;
    border-bottom : 1px solid #e3e3e3;
    `;

export const MiniProfileHeaderName = styled.p`
    font-size: 2rem;
    font-weight: bold;
    margin: 0.5rem;
    `;
export const MiniProfileHeaderRating = styled.p`
    font-size: 1.5rem;
    margin: 0.5rem;
    `;

export const MiniProfileButtonHolder = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width : 25rem;
    height : 3rem;
    justify-content: space-between;
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    `;

export const MiniProfileButton = styled.button`
    width : 7rem;
    height : 2rem;
    border : none;
    background-color : #f5f5f5;
    margin-right: 0.5rem;
    background-color: #31bde8;
    font-size: 1rem;
    color: white;
    font-style: normal;
    border-radius: 0.5rem;

    &:hover {
        cursor: pointer;
        width : 7rem;
        height : 2.5rem;
    }

    transition: all 0.2s ease-in-out;
    `;

export const MiniProfileBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: flex-start;
    `;

export const MiniProfileBodyContent = styled.div`
    font-size: 1.5rem;
    margin: 0.5rem;
    `;

export const MiniProfileServiceHolder = styled.div`
    display: flex;
    flex-direction: row;
    height: 3rem;
    width: 100%;
    align-items: center;
    `;

