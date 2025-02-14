import styled from "styled-components";
import SocialKakaoButton from "../../components/auth/SocialKakaoButton";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import { useEffect } from "react";

const config = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDID,
  appId: import.meta.env.VITE_APP_ID,
};
initializeApp(config);
const messaging = getMessaging();

const Login = () => {
  const Rest_api_key = import.meta.env.VITE_APP_API_KEY;
  const redirect_uri = "http://localhost:5173/kakao/callback";
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  // 알림 권한 설정
  let permission = null;
  useEffect(() => {
    const getPermission = async () => {
      permission = await Notification.requestPermission();
    };
    getPermission();
  }, []);

  // FCM 토큰 요청 및 저장
  const getFcmToken = async () => {
    try {
      if (permission === "granted") {
        const token = await getToken(messaging, {
          vapidKey: import.meta.env.VITE_VAPID_KEY,
        });
        localStorage.setItem("FCM_TOKEN", token); // 토큰을 localStorage에 저장
      }
    } catch (err) {
      console.log("FCM 에러:", err);
    }
  };

  // 로그인 버튼 클릭
  const handleLogin = async () => {
    await getFcmToken();
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
