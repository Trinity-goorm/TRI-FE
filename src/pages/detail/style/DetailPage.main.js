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
    height: 50px;
    position:fixed;
    bottom: 0;
  background-color: pink;

`;
export const InnerContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    width: 100%;
    max-width: 480px;

    
    padding-bottom: 50px;
    overflow-y: auto;
`;

export const ImageSliderContainer = styled.div`
    width: 100%;
    height: 250px;
    background-color: gold;
     overflow-x: auto;
  white-space: nowrap;
  display: flex;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
`;
export const SlideImage = styled.img`
  width: 480px;
  
  flex: 0 0 auto;
  background-color: beige;
  overflow-: hidden;
`;
export const ReservationCountComponent = styled.div``;
export const MainInfoContainer = styled.div`
    width: 100%;
    height:250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;



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
  font-size: 28px;

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
`;
export const LocationIcon = styled.div`
  margin-right: 10px;
`;


export const AveragePriceContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
`;
export const PriceIcon = styled.div`
  margin-right: 10px;

`

export const TimeContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  
`;

export const MenuContainer = styled.div`
    width: 100%;
    height:630px;
    background-color: lightskyblue;
`;
export const LocationContainer = styled.div`
    width: 100%;
    height: 350px;
    background-color: lightyellow;
`;

export const DetailInfoContainer = styled.div`
    width: 100%;
    height: 300px;
    background-color: lightgreen;
`;