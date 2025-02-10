const SocialKakao = () => {
  const Rest_api_key = "1a29e3c946385e9bbb1d7d370c86155e";
  const redirect_uri = "http://localhost:5173/auth";
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <>
      <button onClick={handleLogin}>카카오 로그인</button>
    </>
  );
};

export default SocialKakao;
