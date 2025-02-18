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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white; /* 모달 내용 */
    border-radius: 20px 20px 0px 0px;
    padding: 15px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* 부드러운 그림자 */
`;
export const CalendarContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  
    border-bottom: 1px solid lightgray;
`

export const ReservationContainer = styled.div`
    width: 100%;
    height: 200px;

`;

export const CloseButtonContainer = styled.div`
    width: 95%;

`