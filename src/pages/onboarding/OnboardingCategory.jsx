import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProgressBar from "../../components/onbording/ProgressBar";
import OnboardingButton from "../../components/onbording/OnboardingButton";

const OnboardingCategory = () => {
  const nav = useNavigate();

  return (
    <>
      <ProgressBar />
      <OnboardingContainer>
        <TitleContainer>
          <Title>음식 카테고리 선택</Title>
          <div style={{ lineHeight: "1.6" }}>
            원하시는 음식 카테고리를 선택해주세요! <br />
            최소 3개는 선택해주세요!
          </div>
        </TitleContainer>
        <OnboardingButton
          text={"다음"}
          isFormValid={false}
          handleClickButton={() => {
            nav("/");
          }}
        />
      </OnboardingContainer>
    </>
  );
};

const OnboardingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 50px);
  padding: 80px 30px;
  box-sizing: border-box;
  background-color: #fcfcfc;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
`;

export default OnboardingCategory;
