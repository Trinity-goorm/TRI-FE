import styled from "styled-components";

export const TopBarContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;

`;



export const RestaurantTitleContainer = styled.div`
    width: 100%;
    height: 45%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

`;
export const GoBackButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left:10px;
    
`;

export const RestaurantTitle = styled.div`
    font-size: 23px;
    font-weight: 600;
    margin-left: 20px;
    
`

export const TimerContainer = styled.div`
    width: 100%;
    height: 55%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #f3f3f3;
    
`;

export const Timer = styled.div`
    width: 80px;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    background-color: ${props => props.isTimeOk ? "#D8EEFF" : "#FFD0D0"};
    color: ${props => props.isTimeOk ? "#40A3FD" : "#FF6868"};
    margin-left: 20px;
    border-radius: 10px;
`;

export const TimerExplain = styled.div`
    font-size: 12px;
    margin-left: 15px;
    font-weight: 400;
`;
