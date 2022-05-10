import styled from 'styled-components'

export const LandingContainer = styled.div`
    width : 100%;
    height : 100%;
    display : grid;
    flex-direction : column;
    justify-items : center;
    align-content : center;
    background-color : #f5f5f5;
    `;

export const Section1 = styled.div`
    min-width : 100%;
    background-color : #001E6C;
    margin-bottom : 1rem;
    height : 700px;
    display : grid;
    grid-template-columns : 1fr;
    grid-template-rows : 1fr;
    justify-items : center;
    align-items : center;

    `;

export const Search = styled.input`
    height : 50px;
    width : 700px;
    border : none;
    border-radius : 10px;
    background-color : #f5f5f5;
    font-size : 1.5rem;
    color : black;
    outline : none;
    `;

export const SearchButton = styled.button`
    height : 50px;
    width : 100px;
    margin-left : 10px;
    border : none;
    border-radius : 10px;
    background-color : #B9F8D3;
    color : black;
    font-size : 1.5rem;
    outline : none;
    cursor : pointer;

    `;

export const TextBox = styled.div`
    font-size : 2rem;
    font-weight : bold;
    color : #fff;
    text-align : center;
    width : 100%;
    // background-color : red;
    `;

export const Section2 = styled.div`
    width : 98%;
    margin-bottom : 1rem;
    display : grid;
    grid-template-columns : 1fr;
    grid-template-rows : 60px 1fr;
    justify-items : center;
    align-items : center;
    border-radius : 10px;
    background-color : white;
    `;

export const NavBox = styled.div`
    width :98%;
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    border-bottom : 2px solid #f5f5f5;
`;

export const LocationBox =  styled.div`
    height : 60px;
    display : flex;
    flex-direction : row;
    justify-content : flex-start;
    align-items : center;
    position : relative;
    // background-color : red; 
    `;

export const LocationName = styled.h1`
    font-size : 1.5rem;
    font-weight : bold;
    margin : 0px;
    padding : 0px;
    `;

export const LocationIcon = styled.img`
    width : 30px;
    height : 30px;
    margin-left : 10px;
    `;

export const LocationSearch = styled.input`
    height : 30px;
    border : none;
    font-size : 1.5rem;
    color : black;
    outline : none;
    `;

export const LocationSearchDropdown = styled.div`
    border : none;
    outline : none;
    background-color : #f5f5f5;
    display : flex;
    flex-direction : column;
    position : absolute;
    top : 60px;
    left : 0px;
    z-index : 1;
    overflow-y : scroll;
    `;

export const LocationSearchDropdownItem = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : flex-start;
    align-items : center;
    border-bottom : 1px solid black;
    cursor : pointer;
    overflow : hidden;
    padding : 10px;
    `;

export const LocationButton = styled.button`
    height : 30px;
    width : 100px;
    border : none;
    border-radius : 10px;
    background-color : #FFAA4C;
    color : #fff;
    font-size : 1.5rem;
    outline : none;
    cursor : pointer;
    `;

export const OptionsBox = styled.div`
    height : 60px;
    display : flex;
    flex-direction : row;
    justify-content : flex-end;
    align-items : center;
    `;

export const Option = styled.button`
    height : 40px;
    border : none;
    color : black;
    font-size : 1.2rem;
    outline : none;
    cursor : pointer;
    margin : 20px;
    background-color : white;
    `;
export const OptionExplore = styled.button`
    height : 40px;
    border : none;
    color : #FFAA4C;
    font-size : 1.2rem;
    outline : none;
    cursor : pointer;
    margin : 20px;
    background-color : white;
    `;

export const OptionDropdown = styled.select`
    width : 100px;
    font-size : 1.2rem;
    text-align : center;
    display : flex;
    flex-direction : column;
    border : none;
    justify-content : center;
    align-items : center;
    `;

export const OptionDropdownItem = styled.option`
    height : 40px;
    width : 100px;
    border : none;
    color : black;
    font-size : 1.2rem;
    outline : none;
    cursor : pointer;
    margin : 20px;
    background-color : white;
    `;



export const ContentBox = styled.div`
    width : 100%;
    height : 100%;
    display : grid;
    grid-template-columns : 1fr 1fr 1fr 1fr;
    justify-items : center;
    align-items : top;
    `;

export const ContentCard = styled.div`
    background-color : #fff;
    width : 270px;
    height : 370px;
    margin : 10px;
    display : grid;
    grid-template-rows : 0.6fr 0.1fr 0.2fr 0.1fr 0.1fr;
    // background-color : red;
    padding : 10px;

    &:hover{
        cursor : pointer;
        outline : 1px solid black;
        // box-shadow : 0px 0px 10px black;
    }
    `;

export const ContentImage = styled.img`
    width : 100%;
    height : 100%;
    `;

export const ContentTitle = styled.h1`
    font-size : 1.5rem;
    font-weight : bold;
    margin : 0px;
    padding : 0px;
    text-align : left;
    // background-color : blue;
    `;

export const ContentDescription = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    align-items : top;
    // background-color : red;
    `;

export const ContentServiceImg = styled.img`
    width : 30px;
    height : 30px;
    margin-right : 10px;
    `;

export const ContentLocation = styled.p`
    font-size : 1rem;
    font-weight : bold;
    margin : 0px;
    padding : 0px;
    text-align : left;
    // background-color : pink;
    `;

export const ContentView = styled.button`
    display : none;

    ${ContentCard}:hover & {
        display : block;
        font-size : 1.2rem;
        margin : 0px;
        padding : 0px;
        text-align : center;
        color : #0AA1DD;
        border : none;
        background-color : white;
        z-index : 1;
    }
    `;



