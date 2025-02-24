import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PostLogin from "../../api/auth/PostLogin";

const KakaoCallback = () => {
  const nav = useNavigate();

  useEffect(() => {
    const postCode = async () => {
      const code = new URL(window.location.href).searchParams.get("code");
      console.log(code);
      if (!code) throw new Error("인가 코드가 없습니다.");

      const fcmToken = localStorage.getItem("FCM_TOKEN");
      console.log(fcmToken);
      if (!fcmToken) throw new Error("fcm 토큰이 없습니다.");

      const response = await PostLogin(code, fcmToken, Date.now());

      localStorage.setItem("ACCESS_TOKEN", response.accessToken);
      localStorage.setItem("REFRESH_TOKEN", response.refreshToken);
      localStorage.setItem("userId", response.id);

      if (response.data.newUser) {
        nav("/onboarding");
      } else {
        nav("/");
      }
    };

    postCode();
  }, []);

  return <div>로그인 중입니다.</div>;
};

export default KakaoCallback;
