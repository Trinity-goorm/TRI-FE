import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PostLogin from "../../api/auth/PostLogin";
import { userState } from "../../atoms/userState";
import { useRecoilState } from "recoil";
import LoadingBar from "../../components/loadingBar/LoadingBar";

// fcm
import { getMessaging, getToken } from "firebase/messaging";
import { initializeApp } from "firebase/app";
import PostFcmToken from "../../api/fcm/PostFcmToken";

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

const KakaoCallback = () => {
  const nav = useNavigate();
  const [user, setUser] = useRecoilState(userState);

  // 서비스 워커 준비 확인 함수
  const waitForServiceWorker = async () => {
    if (!("serviceWorker" in navigator)) {
      throw new Error("서비스 워커를 지원하지 않는 브라우저입니다.");
    }
    const registration = await navigator.serviceWorker.ready;
    console.log(
      "서비스 워커 준비 완료:",
      registration.active ? "활성화됨" : "비활성화됨"
    );
    return registration;
  };

  // FCM 토큰 요청 및 저장
  const getFcmToken = async () => {
    try {
      const registration = await waitForServiceWorker();

      const token = await getToken(messaging, {
        vapidKey: import.meta.env.VITE_VAPID_KEY,
        serviceWorkerRegistration: registration,
      });
      return token;
    } catch (err) {
      console.log("FCM 에러:", err);
    }
  };

  const postFcmTokenData = async (fcmToken) => {
    try {
      await PostFcmToken(fcmToken);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const postCode = async () => {
      const code = new URL(window.location.href).searchParams.get("code");
      console.log(code);
      if (!code) throw new Error("인가 코드가 없습니다.");

      const fcmToken = await getFcmToken();
      if (!fcmToken) throw new Error("fcm 토큰이 없습니다.");

      console.log("PostLogin 호출");
      const response = await PostLogin(code);

      const accessToken = response.headers.get("access");
      const refreshToken = response.headers.get("refresh");
      if (!accessToken || !refreshToken)
        throw new Error("액세스 토큰 또는 리프레시 토큰을 찾을 수 없습니다.");
      setUser({ ...user, fcmToken, accessToken, refreshToken });

      await postFcmTokenData(fcmToken);

      //needOnboarding
      if (response.data.needOnboarding) {
        nav("/onboarding");
      } else {
        localStorage.setItem("FCM_TOKEN", fcmToken);
        localStorage.setItem("ACCESS_TOKEN", accessToken);
        localStorage.setItem("REFRESH_TOKEN", refreshToken);
        // nav("/");
      }
    };

    postCode();
  }, []);

  return <LoadingBar />;
};

export default KakaoCallback;
