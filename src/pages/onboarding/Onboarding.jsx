import styled from "styled-components";
import OnboardingUserInfo from "../../components/onbording/OnboardingUserInfo";
import OnboardingButton from "../../components/onbording/OnboardingButton";

const Onboarding = () => {
  return (
    <>
      <Block />
      <OnboardingContainer>
        <OnboardingUserInfo />
        <OnboardingButton text={"다음"} />
      </OnboardingContainer>
    </>
  );
};

const Block = styled.div`
  height: 50px;
  background-color: #fc8383;
`;
const OnboardingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 50px);
  padding: 80px 30px;
  box-sizing: border-box;
  background-color: #fcfcfc;
`;

export default Onboarding;
