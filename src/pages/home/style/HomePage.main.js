import styled from "styled-components";

export const TotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  `;


export const TopBarContainer = styled.div`
    max-width: 480px;
    width: 100%;
    height: 50px;
    position:fixed;
    top: 0;
  background-color: gray;
`;

export const BottomBarContainer = styled.div`
    max-width: 480px;
    width: 100%;
    height: 50px;
    position:fixed;
    bottom: 0;
    background-color: pink;
`;

export const InnerContainer = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    max-width: 480px;
    background-color: lightgray;
    margin-top: 50px;
    margin-bottom: 50px;
    overflow-y: auto;
`;