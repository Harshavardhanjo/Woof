import styled from "styled-components";

export const ProfileBox1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: top;
    width: 70%;
    height: 50vh;
    background-color: #f5f5f5;
    border-radius: 10px;
    `;

export const ProfileBox1Left = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: top;
    `;

export const ProfileBox1Middle = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    `;
export const ProfileBox1Right = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: top;
    transition: all 0.5s ease-in-out;
    `;
export const ProfileImg = styled.img`
    width: 90%;
    height: 70%;
    border-radius: 100%;
    object-fit: cover;
    margin-top: 10px;

    `;

export const ProfileBoxMiddle_1 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top : 10px;
    `;

export const ProfileName = styled.p`
    font-size: 2em;
    font-weight: bold;
    margin: 10px;
    `;
export const ProfileCity = styled.button`
    width: relative;
    height: 2rem;
    margin: 10px;
    font-size: 1em;
    font-weight: bold;
    margin: 10px;
    `;

export const ProfileBoxMiddle_2 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    `;

export const ProfileFollowButton = styled.button`
    width: 10rem;
    height: 3rem;
    margin: 10px;
    `;
export const ProfileUnfollowButton = styled.button`
    width: 10rem;
    height: 3rem;
    margin: 10px;
    `;

export const ProfileMessageButton = styled.button`
    width: 10rem;
    height: 3rem;
    margin: 10px;
    `;

export const ProfileShareButton = styled.button`
    width: 10rem;
    height: 3rem;
    margin: 10px;
    `;

export const ProfileBio = styled.p`
    font-size: 1.5em;
    height: 100%;
    `;

export const ProfilePetsHeading = styled.p`
    font-size: 2em;
    margin: 10px;
    margin-top : 20px;
    font-weight: bold;
    `;

export const ProfilePetIconHolder = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: top;
    flex-wrap: wrap;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 0px;
    }
    `;


export const ProfilePetIcon = styled.img`
    width: 60px;
    height: 60px;
    margin : 20px;
    margin-top: 1rem;
    border-radius: 100%;
    `;

export const ProfilePets = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: top;
    flex-wrap: wrap;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 0px;
    }
    `;

export const ProfileBox2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: top;
    margin-top: 10px;
    width: 70%;
    height: 50vh;
    `;


