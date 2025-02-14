import styled from "styled-components";


export const ButtonContainer = styled.div`
    width: ${props => (props.width ? props.width : "40px")};
    height: ${props => (props.height ? props.height : "40px")};
    border-radius: 50px;
    background-color: ${props => props.color || "white"};
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${props => `1px solid ${props.border}` || "white"};
    
`;