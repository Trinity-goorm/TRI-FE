import styled from 'styled-components';

export const BackGround = styled.div`
    position: fixed;  /* 화면 고정 */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);  /* 검은색 반투명 */
    display: flex;
    flex-direction: column;
    align-items: ${props=> props.positionx ? props.positionx : "center"};
    justify-content: ${props=> props.positiony ? props.positiony : "flex-end"};
    z-index: 1000;  /* 다른 요소 위로 */
`
export const ModalContainer = styled.div`
    width: ${props => props.width ? props.width : 480}px;
    height: ${props => props.height ? props.height : 300}px;
    background-color: white;
    border-radius: ${props => props.borderRadius ? props.borderRadius : "20px 20px 0px 0px" };

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1),
    0 5px 15px 0 rgba(0, 0, 0, 0.1);
`;

export const MessageContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 10px;
    border-bottom: 1px solid #f3f3f3;

`;
export const Message = styled.div`
    margin-left: 15px;    
    font-size: 17px;
    font-weight: 700;
`

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;


    
`;

export const ButtonEach = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 15px;
    font-weight: bold;
    border: 1px solid lightgray;

`;
export const ButtonConfirm = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 15px;
    color: white;
    font-weight: bold;
    background-color: #FF6868;

`;

export const InnerMessageContainer = styled.div`
    width: 80%;
    height:100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    background: #f3f3f3;
    border-radius: 5px;
    font-weight: bold;

`

