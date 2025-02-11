import styled from "styled-components";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import OnboardingButton from "../../components/onbording/OnboardingButton";
import ProgressBar from "../../components/onbording/ProgressBar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OnboardingUserInfo = () => {
  const nav = useNavigate();

  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [isGreenAge, setIsGreenAge] = useState(null);
  const [phoneNum, setPhoneNum] = useState("");
  const [isGreenPhone, setIsGreenPhone] = useState(null);

  const handleAgeChange = (e) => {
    setAge(e.target.value);
    setIsGreenAge(!isNaN(e.target.value) && e.target.value !== "");
  };

  const handlePhoneChange = (e) => {
    setPhoneNum(e.target.value);
    setIsGreenPhone(!isNaN(e.target.value) && phoneNum.length === 10);
  };

  const handleClickButton = () => {
    nav("/onboarding/2");
  };

  return (
    <>
      <ProgressBar />
      <OnboardingContainer>
        <TitleContainer>
          <Title>환영합니다!</Title>
          <div style={{ lineHeight: "1.6" }}>
            캐치핑은 고객님의 활기찬 식사를 위해 <br />
            성별, 나이, 전화번호, 선호 메뉴 카테고리, 가격대 등 <br />
            정보를 수집하여 최적의 식당을 추천 해드려요.
          </div>
        </TitleContainer>

        <div>
          <Coment>고객님의 성별을 선택해주세요!</Coment>
          <GenderContainer>
            <GenderLabel $checked={gender === "male"}>
              <HiddenRadio
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={() => setGender("male")}
              />
              남성
            </GenderLabel>
            <GenderLabel $checked={gender === "female"}>
              <HiddenRadio
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={() => setGender("female")}
              />
              여성
            </GenderLabel>
          </GenderContainer>
        </div>

        <div>
          <Coment>고객님의 나이를 입력해주세요!</Coment>
          <InputContainer>
            <OnBoardingInput
              value={age}
              onChange={handleAgeChange}
              onFocus={() => {
                if (isGreenAge === null) setIsGreenAge(false);
              }}
              $isGreen={isGreenAge}
              placeholder="나이 입력"
            />
            {isGreenAge ? (
              <IoCheckmarkDoneOutline
                size="25"
                color="#22B379"
                style={{ position: "absolute", right: "5px", top: "7px" }}
              />
            ) : null}
          </InputContainer>
        </div>

        <div>
          <Coment>고객님의 전화번호를 입력해주세요!</Coment>
          <InputContainer>
            <OnBoardingInput
              value={phoneNum}
              onChange={handlePhoneChange}
              onFocus={() => {
                if (isGreenPhone === null) setIsGreenPhone(false);
              }}
              $isGreen={isGreenPhone}
              placeholder="숫자만 입력해주세요"
            />
            {isGreenPhone ? (
              <IoCheckmarkDoneOutline
                size="25"
                color="#22B379"
                style={{ position: "absolute", right: "5px", top: "7px" }}
              />
            ) : null}
          </InputContainer>
        </div>

        <OnboardingButton
          text={"다음"}
          isFormValid={isGreenAge && isGreenPhone}
          handleClickButton={handleClickButton}
        />
      </OnboardingContainer>
    </>
  );
};

const OnboardingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 50px);
  padding: 80px 30px;
  box-sizing: border-box;
  background-color: #fcfcfc;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
`;

const Coment = styled.div`
  font-size: 14px;
  color: #595c62;
`;

const InputContainer = styled.div`
  position: relative;
`;

const OnBoardingInput = styled.input`
  border: none;
  border-bottom: 1.3px solid
    ${({ $isGreen }) => {
      if ($isGreen === null) {
        return "#bfbfbf";
      } else {
        return $isGreen ? "#22B379" : "#fc8383";
      }
    }};
  width: 100%;
  padding: 10px 5px;
  outline: none;
  box-sizing: border-box;
  font-size: 17px;

  &::placeholder {
    color: #bfbfbf;
  }
`;

const GenderContainer = styled.div`
  display: flex;
  gap: 12px;
  margin: 17px 0px;
`;

const GenderLabel = styled.label`
  padding: 13px 0px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  border: 1.3px solid ${({ $checked }) => ($checked ? "#22B379" : "#bfbfbf")};
  color: ${({ $checked }) => ($checked ? "#22B379" : "#bfbfbf")};
  text-align: center;
`;

const HiddenRadio = styled.input`
  display: none;
`;

export default OnboardingUserInfo;
