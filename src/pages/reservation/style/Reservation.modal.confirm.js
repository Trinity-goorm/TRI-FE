import styled from 'styled-components';

export const Background = styled.div`
    position: fixed;  /* 화면 고정 */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);  /* 검은색 반투명 */
    display: flex;
    align-items: flex-end;
    justify-content: center;
    z-index: 1000;  /* 다른 요소 위로 */
`;

export const TotalContainer = styled.div`
    width: 450px;
    height: 470px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: white; /* 모달 내용 */
    border-radius: 20px 20px 0px 0px;
    padding: 15px;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* 부드러운 그림자 */
`;

export const TitleContainer = styled.div`
    width: 95%;
    height: 40px;
    border-bottom: 2px solid #FFCBC2;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: flex-start;

`;

export const TicketInfoContainer = styled.div`
    width: 95%;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin-top: 15px;
    border: 1px solid #F1F1F1;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

`;
export const FirstInfoContainer = styled.div`
    width:90%;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;

`;


export const SecondInfoContainer = styled.div`
    width:90%;
    font-size: 12px;
    font-weight: 600;
    color: gray;
    background-color: white;
    margin-bottom: 10px;
`;

export const ThirdInfoContainer = styled.div`
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
`;


export const RefundInfoContainer = styled.div`
    width:85%;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-color: #F2F2F2;
    padding: 20px;
    border-radius: 5px;
    margin-top: 20px;
`;

export const RefundInfoTitle = styled.div`
 
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
`;

export const RefundInfoContent = styled.div`
    font-size: 13px;
    color: gray;
`;

export const ButtonContainer = styled.div`
    width: 95%;
    height: 80px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;
export const ButtonEachContainer = styled.div`
    
`