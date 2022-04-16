import styled from "styled-components";
import cover from "../../img/cover.jpg";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas: "cover" "Section1" "Section2";
    grid-gap: 1rem;
    width: 100%;
    height: 100%;
`;

export const Cover = styled.div`
    grid-area: cover;
    background-image: url(${cover});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeroTextContainer_1 = styled.div`
    text-align: center;
    position: absolute;
    top: 40%;
    left: 80%;
    transform: translate(-50%, -50%);
    color: white;
    background-color: red;
    `;

export const HeroText1_1 = styled.div`
    font-size: 350%;
    font-weight: bold;
    color: #fff;
    `;

export const HeroText2_1 = styled.div`
    font-size: 400%;
    color : white;
    font-weight : bold;
    `;

export const Section1 = styled.div`
    grid-area: Section1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: green;
    width : 100%;
    margin-bottom: 20rem;
    `;
