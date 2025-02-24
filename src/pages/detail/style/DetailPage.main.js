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
    z-index: 1000;
    background-color: ${({isScrolled}) => (isScrolled ? "white": "transparent")};
    transition: background 0.3s ease-in-out;
`;

export const BottomBarContainer = styled.div`
    max-width: 480px;
    width: 100%;
    height: 70px;
    position:fixed;
    bottom: 0;
  z-index: 1000;
  background-color: white;

`;
export const InnerContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    width: 100%;
    max-width: 480px;
    
    padding-bottom: 80px;
    overflow-y: auto;
  overflow-x: hidden;
`;

export const ImageSliderContainer = styled.div`
  width: 480px;
  height: 270px;
  overflow-x: auto;
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  position: relative;
  ::-webkit-scrollbar{
    display: none;
    background-color: transparent;
  }
`;



export const ImgDiv = styled.div`
  width: 480px;
  min-width: 480px;
  max-width: 480px;
  height: 270px;
  background-image: ${({ $imgUrl }) => `url(${$imgUrl})`};
  background-size: cover; /* 요소 크기에 맞게 비율 유지하며 확대 */
  background-position: center; /* 중앙 정렬 */
  background-repeat: no-repeat; /* 반복 방지 */
  flex-shrink: 0;
`;

export const ReservationCountComponent = styled.div``;
export const MainInfoContainer = styled.div`
    width: 100%;
    height:250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #f3f3f3;



`;

export const MainInfoFirstContainer = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;


  border-bottom: 1px solid #f3f3f3;
`;
export const CategoryContainer = styled.div`
  width: 100%;
  height: 17%;
  font-size: 14px;
  color: gray;

`;
export const NameContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 600;
  font-size: 23px;

`;
export const StarContainer = styled.div`
  height: 100%;

  display: flex;
  align-items: center;

  margin-right: 10px;
  
`
export const StarScoreContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  

`;

export const MainInfoSecondContainer = styled.div`
  width: 90%;
  height: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

`;
export const LocationFirstContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  font-size: 14px;
`;
export const LocationIcon = styled.div`
  margin-right: 10px;
`;


export const AveragePriceContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  font-size: 14px;
`;
export const PriceIcon = styled.div`
  margin-right: 10px;

`

export const TimeContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  font-size: 14px;
  
`;

export const MenuContainer = styled.div`
    width: 100%;
  margin-top: 10px;
`;

export const MenuTitle = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  font-size: 22px;
  font-weight: 500;
`;

export const MenuButton = styled.div`
  width: 40px;
  height: 25px;
  border-radius: 20px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: gray;
  margin-left: 290px;
`;
export const LocationContainer = styled.div`
    width: 100%;
    max-height: 360px;
  margin-top: 20px;
 

`;

export const DetailInfoContainer = styled.div`
    width: 100%;
`;