import styled from "styled-components";

export const TotalContainer = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;





`;
export const TitleContainer = styled.div`
    width: 92%;
    margin-top: 10px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;

`;
export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 22px;
    font-weight: bold;
  
    
`;

export const TitleExplain = styled.span`
    font-size: 15px;
    margin-top: 5px;
    color: gray;
`;

export const ContentSlider = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    scroll-behavior: smooth;
    white-space: nowrap;
    width: 90%;
    margin-left: 13px;

    margin-top: 10px;
  
    padding: 10px 0px;
    &::-webkit-scrollbar {
        display: none;
    };


    
`;

