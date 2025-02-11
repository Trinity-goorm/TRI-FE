import styled from "styled-components";

export const SliderContainer = styled.div`
    width: 91%;
    height: 260px;
    overflow: hidden;
    position: relative;
    border-radius: 10px;

`;

export const Slide = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: ${(props) => (props.active ? 1 : 0)};
    transition: opacity 1s ease-in-out;
    
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`