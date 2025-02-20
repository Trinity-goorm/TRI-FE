import styled from 'styled-components';

export const BackGround = styled.div`
    position: fixed;  /* 화면 고정 */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);  /* 검은색 반투명 */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;  /* 다른 요소 위로 */
`
export const ModalContainer = styled.div`
    width: ${props => props.width ? props.width : 200}px;
    height: ${props => props.height ? props.height : 200}px;
    background-color: beige;
    border-radius: 10px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1),
    0 5px 15px 0 rgba(0, 0, 0, 0.1);
`;

