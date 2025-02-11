import styled from "styled-components";
import kakaoIcon from "../../public/kakaoIcon.png";

const SocialKakaoButton = () => {
  const Rest_api_key = import.meta.env.VITE_APP_API_KEY;
  const redirect_uri = "http://localhost:5173/auth/kakao/callback";
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <>
      <KakaoBtn onClick={handleLogin}>
        <KakaoImg src={kakaoIcon} />
        카카오 로그인
      </KakaoBtn>
    </>
  );
};

const KakaoBtn = styled.button`
  background-color: #f7e600;
  color: #3a1d1d;
  border: none;
  border-radius: 11px;
  width: 100%;
  height: 50px;
  font-weight: 800;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const KakaoImg = styled.img`
  float: left;
  width: 25px;
`;

export default SocialKakaoButton;
