import styled from "styled-components";

export const TotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  background-color: white;
  `;


export const TopBarContainer = styled.div`
    max-width: 480px;
    width: 100%;
    height: 50px;
    position:fixed;
    top: 0;
    z-index: 10;
  background-color: white;

  

`;

export const BottomBarContainer = styled.div`
    max-width: 480px;
    width: 100%;
    height: 50px;
    position:fixed;
    bottom: 0;
  background-color: white;

`;

export const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    width: 100%;
    max-width: 480px;

    padding-top: 100px;
    padding-bottom: 100px;
    overflow-y: auto;

`;

export const TopTitleBarContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 25px;
  font-weight: bold;
`;

export const TopTitle = styled.span`
    font-size: 23px;
    margin-left: 20px;
    
    
`
export const TopMoveBarContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  background-color: white;

`;

export const TopMoveEach = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  font-weight: ${(props) => props.isTopBarClick ? "bold" : "normal"};
    border-bottom: ${props => props.isTopBarClick ? "2px solid #FF6868" : "" }
`