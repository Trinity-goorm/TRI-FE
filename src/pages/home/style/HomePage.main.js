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
  border: 1px solid #f3f3f3;

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

    padding-top: 50px;
    padding-bottom: 50px;
    overflow-y: auto;
`;

export const BannerContainer = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;


`;
export const CategoryContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;

  


`;
export const RecommendContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;

  overflow: hidden;

  margin-top: 15px;

`;