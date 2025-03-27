import styled from "styled-components";

export const SliderContainer = styled.div`
    width: 95%;
    height: 280px;
    overflow: hidden;
    position: relative;
    border-radius: 10px;
    background: pink;

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
`;

export const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
    opacity: 0.8;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
    color: white;
`;

export const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
    opacity: 0.8;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
    color: white;
`;