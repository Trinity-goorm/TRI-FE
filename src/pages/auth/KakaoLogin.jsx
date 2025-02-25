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

      if (permission === "denied") {
        alert(
          "캐치핑은 예약과 빈자리 정보를 알림으로 안내해드려요.\n알림을 받으시려면 설정 > 개인 정보 보호 및 보안 > 사이트 설정에서 알림을 허용해주세요."
        );
      }
    };
    getPermission();
  }, []);

  // FCM 토큰 요청 및 저장
  const getFcmToken = async () => {
    try {
      console.log("fcmToken 발급 전");
        console.log("fcmToken 발급 시도");
        const token = await getToken(messaging, {
          vapidKey: import.meta.env.VITE_VAPID_KEY,
        });
        console.log("fcmToken 발급 완료");


        localStorage.setItem("FCM_TOKEN", token);
    } catch (err) {
      console.log("FCM 에러:", err);
    }
  };

  // 로그인 버튼 클릭
  const handleLogin = async () => {
    await getFcmToken();
    const tokenOk = localStorage.getItem("FCM_TOKEN");
    console.log(tokenOk, "토큰 발급 완료");
    window.location.href = kakaoURL;

  };

  return (
    <LoginContainer>
      <LogoWrapper>
        <h1>Logo</h1>
        <Info>편안한 식사 문화를 위한 새로운 시작</Info>
      </LogoWrapper>
      <SocialKakaoButton handleLogin={handleLogin} />
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

export default Login;
