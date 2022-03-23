import styled from "styled-components";


export const PostBox = styled.div`
    width: 50%;
    height: 100%;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
`;

export const PostImg = styled.img`
    width: 90%;
    height: 90%;
`;

export const PostsBottomBox = styled.div`
    width: 60%;
    height: 7%;
    display: flex;
    flex-direction: row;
    margin-top: 0.5rem;
    justify-content: space-around;
    align-items: center;
    border-radius: 2rem;
    `;

export const PostsLikeButton = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    
    `;

export const PostsCommentButton = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    `;

export const PostsShareButton = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    `;