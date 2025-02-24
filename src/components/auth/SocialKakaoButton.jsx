import styled from "styled-components";
import kakaoIcon from "../../assets/img/kakaoIcon.png";

const SocialKakaoButton = ({ handleLogin }) => {
  return (
    <>
      <KakaoBtn
        onClick={() => {
          handleLogin();
        }}
      >
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
