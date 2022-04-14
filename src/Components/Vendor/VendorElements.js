import styled from "styled-components";
import loading_normal from '../../img/loading_normal.gif';

export const VendorContainer = styled.div`
    display : grid;
    grid-template-columns : 1fr 1fr 1fr 1fr;
    margin-top : 2rem;
    margin-left : 2rem;
    grid-gap : 1rem;
    width : 100%;
    height : 100%;
    overflow-y : scroll;
    ::-webkit-scrollbar {
        width: 0rem;
        height: 0.2rem;
    }
`;

export const VendorSelectedContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: top;
    margin-top : 2rem;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 0rem;
        height: 0.2rem;
    }
    
`

export const VendorCard = styled.div`
    width : 20rem;
    height : 20rem;
    border-radius : 10px;
    background-color : #f5f5f5;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : space-around;
    transition : 0.3s;
    &:hover {
        border : 1px solid #f5f5f5;
    }
`;

export const Vendorheader = styled.div`
    width : 100%;
    height : 3rem;
    display : flex;
    flex-direction : row;
    align-items : center;
    justify-content : flex-start;
`;
    
export const VendorName = styled.div`
    font-size : 1.5rem;
    font-weight : bold;
    margin: 0.5rem;
`;

export const VendorType = styled.div`
    font-size : 1rem;
    font-weight : bold;
    margin: 0.5rem;
`;

export const VendorRating = styled.div`
    font-size : 1rem;
    font-weight : bold;
    margin: 0.5rem;
`;

export const VendorCarousel = styled.div`
    width : 80%;
    height : 20rem;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    background : transparent url(${loading_normal});
`;

export const VendorCarouselTab = styled.div`
    width : 100%;
    height : 3rem;
    display : flex;
    flex-direction : row;
    justify-content : space-around;
    `;

export const VendorCarouselImg = styled.img`
    width : 100%;
    height : 100%;
    object-fit : cover;
`;

export const VendorCarouselButton = styled.img`
    width : 2rem;
    height : 2rem;
    `;

export const VendorButtonTab = styled.div`
    width : 100%;
    height : 3rem;
    display : flex;
    flex-direction : row;
    justify-content : right;
    `;

export const VendorButton = styled.button`
    width : 7rem;
    height : 2rem;
    border-radius : 10px;
    background-color : #f5f5f5;
    margin : 0.5rem;
    border : none;
    font-size : 1rem;
    font-weight : bold;
    :hover {
        background-color : #f5f5f5;
    }
`;



