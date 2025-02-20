import styled, { keyframes } from "styled-components";
import onboardingImg from "../../assets/img/onboardingImg.jpg";

const OnboardingInfo = () => {
  return (
    <OnboardingInfoContainer>
      <LogoWrapper>logo</LogoWrapper>
      <Image src={onboardingImg} style={{ width: "300px", height: "300px" }} />
      <Info>
        <Title>환영합니다!</Title>
        <SubTitleContainer>
          <SubTitle>고객님의 만족스러운 식사를 위해</SubTitle>
          <SubTitle>
            취향과 정보를 반영하여 최적의 식당을 추천 해드릴게요.
          </SubTitle>
        </SubTitleContainer>
      </Info>
    </OnboardingInfoContainer>
  );
};

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const OnboardingInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  justify-content: flex-start;
  margin-top: -60px;
  padding: 0px 30px;
`;

const LogoWrapper = styled.div`
  align-self: flex-start;
  font-size: 24px;
  font-weight: bold;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  animation: ${fadeInUp} 1s ease-out;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 26px;
`;

const SubTitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #909090;
  line-height: 1.6;
`;

const SubTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default OnboardingInfo;
