import styled from "styled-components";

export const TotalContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:flex-start;


`;

export const TimeSlotTotalContainer = styled.div`
    width: 430px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    overflow-y: auto;
    white-space: nowrap;
    padding: 5px;
    margin-top: 15px;
  
    
    &::-webkit-scrollbar {
        display: none;
    }
   
`;
export const TimeSlotEachContainer = styled.div`
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  
    border-radius: 10px;
    border: ${(props) => props.isSelect ? " " : "1px solid #717171"};
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.isSelect ? "#FFCBC2" : "#717171"};
    margin-right: 10px;
    flex-shrink: 0;
    background-color: ${(props) => props.isSelect ? "#FF6868" : "" }}

`;

export const SeatTotalContainer = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 10px;
`;

export const SeatEachContainer = styled.div`
    width: 130px;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;

    background-color: #FF6868;


    &:hover {
        background-color: #FF4500 ;

    }
`;
export const NoSeatEachContainer = styled.div`
    width: 130px;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 1px solid #717171;


    &:hover {
        background-color: lightgray;
        border: none;

    }
`;
export const SeatEachTitle = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 700;
    color: #FFCBC2;

`;
export const NoSeatEachTitle = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 700;
    color: #717171;

`;

export const SeatCountContainer = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 600;
    color: #FFCBC2;
   
`;
export const NoSeatCountContainer = styled.div`
    width: 65%;
    height: 40%;
    display: flex;
    align-items: center;   
    justify-content: space-around;
    font-size: 14px;
    font-weight: 600;
    color: #717171;
   
`;