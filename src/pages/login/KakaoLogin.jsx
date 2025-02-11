import styled from "styled-components";
import SocialKakaoButton from "../../components/SocialKakaoButton";

const Login = () => {
  return (
    <>
      <LoginContainer>
        <LogoWrapper>
          <h1>Logo</h1>
          <Info>편안한 식사 문화를 위한 새로운 시작</Info>
        </LogoWrapper>
        <SocialKakaoButton />
      </LoginContainer>
    </>
  );
};

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
  justify-content: space-around;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Info = styled.div`
  font-size: 13px;
  color: #666;
`;

export default Login;
