import styled from "styled-components";

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 85px;
  background-color: white;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  margin: 5px;
    border: 1px solid #f0f0f0;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    &:hover {
        border: 2px solid #feddd8;
        transform: scale(1.03);
    }
`;
export const ImageContainer = styled.div`
  width: 60px;
  height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color:white;

`;
export const Image = styled.img`
  width: 80%;
  height: 80%;
    background-color:white;
`;

export const Title = styled.div`






  font-size: 16px;
  font-weight: 600;
    color: black


`;
