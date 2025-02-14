import { BiSolidHandLeft } from "react-icons/bi";
import styled from "styled-components";

const OnboardingButton = ({ text, isFormValid, handleClickButton }) => {
  const hadleButtonClick = () => {
    if (isFormValid) {
      handleClickButton();
    }
  };

  return (
    <ButtonContainer $isFormValid={isFormValid} onClick={hadleButtonClick}>
      {text}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  background-color: ${({ $isFormValid }) =>
    $isFormValid ? "#fc8383" : "#ffd4d4"};
  color: white;
  border: none;
  border-radius: 11px;
  height: 50px;
  font-weight: 800;
  font-size: 15px;
`;

export default OnboardingButton;
