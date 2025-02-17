import styled from "styled-components";

export const TotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 25%;
    height: 85px;
    background-color: lightgray;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    margin: 5px;
    
`;
export const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;
export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    opacity: 0.7;
`;

export const Title = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* 중앙 정렬 */

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%; /* 텍스트가 긴 경우 중앙 유지 */
    text-align: center;
    white-space: nowrap; /* 텍스트 줄바꿈 방지 */

    color: white;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 700;
    background: rgba(0, 0, 0, 0.4);
    padding: 34px 8px;
`;