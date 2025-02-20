import styled from 'styled-components';

export const TotalContainer = styled.div`
    width: 90%;
    height: 160px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1),
    0 5px 15px 0 rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    padding: 10px 0px;
`;

export const TopContainer = styled.div`
    width: 90%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;

export const TopTagContainer = styled.div`
    width: 72px;
    height: 30px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    color: gray;
    background-color: #f3f3f3;
`;

export const CancelContainer = styled.div`
    width: 30px;
    height: 30px;
  
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContentContainer = styled.div`
    width: 90%;
    height: 65%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-top: 10px;
  
`;

export const ContentImageContainer = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    background-color: lightcoral;
`;

export const ContentInfoContainer = styled.div`
    width: 250px;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-left: 20px;



`;

export const ContentInfoTitle = styled.div`
    width: 100%;
    font-size: 20px;
    font-weight: bold;
`;

export const ContentInfoCategory = styled.div`
    width: 100%;
    font-size: 15px;
    color: gray;
`;

export const ContentInfoReservation = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 500;
    color: #FF6868;
`;