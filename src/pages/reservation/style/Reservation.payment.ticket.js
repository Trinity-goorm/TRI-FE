import styled from "styled-components";

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