import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SocialKakaoButton from "../../components/SocialKakaoButton";

const Login = () => {
  const nav = useNavigate();

  const Rest_api_key = import.meta.env.VITE_APP_API_KEY;
  const redirect_uri = "http://localhost:5173/kakao/callback";
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <>
      <LoginContainer>
        <LogoWrapper>
          <h1>Logo</h1>
          <Info>편안한 식사 문화를 위한 새로운 시작</Info>
        </LogoWrapper>
        <SocialKakaoButton handleLogin={handleLogin} />
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
