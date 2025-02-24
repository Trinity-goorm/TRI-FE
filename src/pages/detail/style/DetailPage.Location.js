import styled from "styled-components";

export const TotalContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #f3f3f3;
    border-top: 1px solid #f3f3f3;
`;

export const LocationTitle = styled.div`
    width: 90%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 22px;
    font-weight: 500;
    margin-top: 10px;
`;

export const KakaoMapContainer = styled.div`
    width: 90%;
    height: 200px;
    border-radius: 10px;
    border: 1px solid lightgray;
    
    
`;


export const LocationTextContainer = styled.div`
    width: 90%;
    height: 40px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    
`;
export const LocationText = styled.span`
    margin-left: 6px;
    font-size: 15px;
    color: gray;
    font-weight: 500;
`