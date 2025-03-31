import styled from 'styled-components';
import SocialKakaoButton from '../../components/button/SocialKakaoButton';
import { useState, useEffect } from 'react';

const Login = () => {
  const Rest_api_key = import.meta.env.VITE_APP_API_KEY;
  const redirect_uri = import.meta.env.VITE_REDIRECT_URI;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code&prompt=login`;
  const [permission, setPermission] = useState(null);
  const [showWarning, setShowWarning] = useState(false);

  // 알림 권한 설정
  useEffect(() => {
    const getPermission = async () => {
      const newPermission = await Notification.requestPermission();
      setPermission(newPermission);
    };
    getPermission();
  }, []);

  // 로그인 버튼 클릭
  const handleLogin = () => {
    if (permission === 'granted') window.location.href = kakaoURL;
    else if (permission === 'denied') setShowWarning(true);
  };

  return (
    <LoginContainer>
      <LogoWrapper>
        <h1>CATCHPING</h1>
        <Info>편안한 식사 문화를 위한 새로운 시작</Info>
      </LogoWrapper>
      <WarningButtonContainer>
        {showWarning && (
          <WarningComment>
            캐치핑은 예약과 빈자리 정보를 알림으로 안내해 드려요. <br />
            설정 &gt; 개인 정보 보호 및 보안 &gt; 사이트 설정에서 권한을 재설정
            해주세요.
          </WarningComment>
        )}
        <SocialKakaoButton handleLogin={handleLogin} />
      </WarningButtonContainer>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
  padding: 80px 20px;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-weight: 700;
`;

const LogoWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Info = styled.div`
  font-size: 13px;
  color: #666;
`;

const WarningButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const WarningComment = styled.div`
  padding: 15px;
  background-color: #fff3f3;
  color: #d32f2f;
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
  line-height: 1.5;
`;

export default Login;
