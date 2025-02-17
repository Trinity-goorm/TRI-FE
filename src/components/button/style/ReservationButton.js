import styled from "styled-components";

export const ButtonContainer = styled.div`
    width: ${props => props.width || "350px"};
    height: ${props => props.height || "55px"};
    border-radius: 10px;
    background-color: ${props => props.backcolor || "gold"};
    font-size: 16px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.namecolor || "white"};
    border: ${props => props.border || "none"};
    
`;