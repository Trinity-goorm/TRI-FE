import styled from "styled-components";

export const TotalContainer = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    


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
    font-size: 20px;
    font-weight: bold;
  
    
`;
export const WatchAll = styled.div`
    font-size: 13px;
    font-weight: 400;
    margin-right: 3px;
    
    
`
export const TitleExplain = styled.span`
    font-size: 15px;
    margin-top: 5px;
`;
export const ContentSlider = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    scroll-behavior: smooth;
    white-space: nowrap;
    width: 100%;
    margin-left: 13px;
  
    padding: 10px 0px;
    &::-webkit-scrollbar {
        display: none;
    }
`;

