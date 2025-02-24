import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PostLogin from "../../api/auth/PostLogin";
import { formatLocalDate } from "../../util/formatLocalDate";
import { userState } from "../../atoms/userState";
import { useRecoilState } from "recoil";
import LoadingBar from "../../components/loadingBar/LoadingBar";

const KakaoCallback = () => {
  const nav = useNavigate();
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    const postCode = async () => {
      const code = new URL(window.location.href).searchParams.get("code");
      console.log(code);
      if (!code) throw new Error("인가 코드가 없습니다.");

      const fcmToken = localStorage.getItem("FCM_TOKEN");
      if (!fcmToken) throw new Error("fcm 토큰이 없습니다.");

      const response = await PostLogin(
        code,
        fcmToken,
        formatLocalDate(new Date())
      );

      // 로컬 스토리지 저장
      localStorage.setItem("ACCESS_TOKEN", response.accessToken);
      localStorage.setItem("REFRESH_TOKEN", response.refreshToken);
      localStorage.setItem("userId", response.id);

      // 전역으로 저장
      setUser({ ...user, userId: response.id });

      if (response.newUser) {
        nav("/onboarding");
      } else {
        nav("/");
      }
    };

    postCode();
  }, []);

  return <LoadingBar />;
};

export default KakaoCallback;
