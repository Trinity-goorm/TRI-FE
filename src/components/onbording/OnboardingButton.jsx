import styled from "styled-components";

const OnboardingButton = ({ text }) => {
  return <ButtonContainer>{text}</ButtonContainer>;
};

// #fc8383
const ButtonContainer = styled.button`
  background-color: #ffd4d4;
  color: white;
  border: none;
  border-radius: 11px;
  height: 50px;
  font-weight: 800;
  font-size: 15px;
`;

export default OnboardingButton;
