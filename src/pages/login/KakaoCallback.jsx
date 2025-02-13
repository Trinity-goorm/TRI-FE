import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const KakaoCallback = () => {
  const nav = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const code = new URL(window.location.href).searchParams.get("code");

      if (!code) throw new Error("인가 코드가 없습니다");

      const response = await axios.get(
        `http://localhost:8080/users/kakao/login?code=${code}`
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

    fetchData();
  }, []);

  return <div>로그인 중입니다.</div>;
};

export default KakaoCallback;
