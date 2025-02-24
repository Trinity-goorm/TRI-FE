import styled from 'styled-components';


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
    height: 100px;
    position:fixed;
    top: 0;
    z-index: 1000;
    background-color: ${({isScrolled}) => (isScrolled ? "white": "transparent")};
    transition: background 0.3s ease-in-out;
`;

export const BottomBarContainer = styled.div`
    max-width: 480px;
    width: 100%;
  height: 140px;
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
    
    padding-bottom: 160px;
    padding-top: 110px;
    overflow-y: auto;

`;

export const ReservationInfoContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

`;

export const TitleContainer = styled.div`
  width: 90%;
  height: 20%;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 19px;


`;

export const InfoContainer = styled.div`
  width: 90%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #f3f3f3
`;
export const InfoContext = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 16px;
  color: gray;
  font-weight: 500;
  margin-left: 10px;

`;

export const InfoTitle = styled.div`
  font-weight: 500;
  font-size: 17px;
  color: black;
`

export const TicketUseContainer = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid lightgray;
`;
export const TicketUse = styled.div`
  width: 88%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;


`;

export const TicketUseButton = styled.div`
  width: 23px;
  height: 23px;
  margin-right: 10px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isClick ? "#FD6048" : "lightgray")};
  
`;

export const TicketUseButtonInside = styled.div`
  width: 11px;
  height: 11px;
  border-radius: 50px;
  background-color: white;
`
export const TicketExplain = styled.div`
  width:88%;
  font-size: 12px;
  font-weight: 600;
  color: gray;
  background-color: white;
  margin-bottom: 10px;

`;

export const TicketRefundExplain = styled.div`
  width:90%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 600;
  color: #FF6868;
  background-color: #F1F1F1;
  margin-top: 10px;
`

export const AgreeContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 20px;
`;

export const AllAgreeContainer = styled.div`
  width: 90%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid lightgray;
  border-radius: 10px;
  font-weight: bold;
  font-size: 17px;
  margin-bottom: 10px;
`;

export const RuleContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  font-size: 15px;
  color: gray;
  margin-top: 20px;
  
`;

export const CheckButton = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${props => (props.isCheck ? "#FD6048" : "lightgray")};
  margin-left: 10px;
  margin-right: 10px;

`;

export const RefundRuleContainer = styled.div`
  width: 70%;
  height: 70px;
  background-color: #f3f3f3;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 13px;
  color: gray;
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

