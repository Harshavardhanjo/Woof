import styled from "styled-components";

export const MiniProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60rem;
    height: 80vh;
    overflow-y: scroll;

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
    
export const MiniProfileTopIcon = styled.img`
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid #e3e3e3;
    padding: 0.5rem;
    margin-right: 0.5rem;
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
    height: 90%;
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
    `;

export const MiniProfileHeaderName = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    margin: 0.5rem;
    `;

export const MiniProfileButtonHolder = styled.div`
    display: flex;
    flex-direction: row;
    width : 25rem;
    height : 2rem;
    justify-content: space-between;
    margin-top: 0.5rem;
    `;

export const MiniProfileButton = styled.button`
    width : 7rem;
    height : 2rem;
    border-radius : 10px;
    background-color : #f5f5f5;
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
    font-weight: bold;
    margin: 0.5rem;
    `;

