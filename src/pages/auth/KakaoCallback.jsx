import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const KakaoCallback = () => {
  const nav = useNavigate();

  useEffect(() => {
    const postCode = async () => {
      const code = new URL(window.location.href).searchParams.get("code");
      if (!code) throw new Error("인가 코드가 없습니다.");

      const fcmToken = localStorage.getItem("FCM_TOKEN");
      console.log(fcmToken);
      if (!fcmToken) throw new Error("fcm 토큰이 없습니다.");

      const response = await axios.post(
        `http://localhost:8080/users/kakao/login?code=${code}`,
        {
          fcmToken: fcmToken,
          timestamp: Date.now(),
        }
      );

      if (response.status === 200) {
        localStorage.setItem("ACCESS_TOKEN", response.data.accessToken);
        localStorage.setItem("REFRESH_TOKEN", response.data.refreshToken);
        localStorage.setItem(
          "user",
          JSON.stringify({
            id: response.data.id,
            name: response.data.name,
            normalTicketCount: response.data.normalTicketCount,
            emptyTicketCount: response.data.emptyTicketCount,
            phoneNumber: response.data.phoneNumber,
          })
        );

        if (response.data.newUser) {
          nav("/onboarding/1");
        } else {
          nav("/");
        }
      }
    };

    postCode();
  }, []);

  return <div>로그인 중입니다.</div>;
};

export default KakaoCallback;
