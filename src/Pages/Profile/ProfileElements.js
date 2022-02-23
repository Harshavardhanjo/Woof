import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width : 100%;
    max-width: 100vw;
    height : 100vh;
    background-color: #f5f5f5;
    `;

export const SideBar = styled.div`
    width : 2.2%;
    height : 100%;
    background-color: red;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    `;
export const SideBarIcons = styled.div`
    width : 100%;
    height : 3rem;

    &:hover {
        background-color: blue;
        transition: all 0.5s ease;
    }
    `;

export const SideBarImg = styled.img`
    width : 100%;
    height : 100%;
    `;

export const Main = styled.div`
    width : 97%;
    height : 100%;
    `;
