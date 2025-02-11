import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const KakaoCallback = () => {
  const nav = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    console.log(code);
    if (!code) throw new Error("인가 코드가 없습니다");

    // const fetchAccessToken = async () => {
    //   try {
    //     const res = await axios.post(`http://localhost:8000/login`, {
    //       code: code,
    //     });
    //     nav("/");
    //   } catch (error) {
    //     console.error("카카오 로그인 에러:", error);
    //   }
    // };

    // fetchAccessToken();

    nav("/");
  }, []);

  return <div>로그인 중입니다.</div>;
};

export default KakaoCallback;
