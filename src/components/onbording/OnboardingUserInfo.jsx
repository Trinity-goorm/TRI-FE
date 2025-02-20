import { useEffect } from "react";
import styled from "styled-components";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const OnboardingUserInfo = ({
  gender,
  setGender,
  age,
  setAge,
  phoneNum,
  setPhoneNum,
  setIsFormValid,
}) => {
  const isGreenAge = age === null ? null : !isNaN(age) && age !== "";
  const isGreenPhone =
    phoneNum === null ? null : !isNaN(phoneNum) && phoneNum.length === 11;

  useEffect(() => {
    setIsFormValid(isGreenAge && isGreenPhone);
  }, [isGreenAge, isGreenPhone, setIsFormValid]);

  return (
    <>
      <OnboardingContainer>
        <Title>필요한 정보를 입력하고 시작해볼까요?</Title>

        <ComentInputWrapper>
          <Coment>성별</Coment>
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
        </ComentInputWrapper>

        <ComentInputWrapper>
          <Coment>나이</Coment>
          <InputContainer>
            <OnBoardingInput
              value={age ?? ""}
              onChange={(e) => setAge(e.target.value)}
              $isGreen={isGreenAge}
              placeholder="나이를 입력해주세요"
            />
            {isGreenAge ? (
              <IoCheckmarkDoneOutline
                size="25"
                color="#22B379"
                style={{ position: "absolute", right: "20px", top: "10px" }}
              />
            ) : null}
          </InputContainer>
        </ComentInputWrapper>

        <ComentInputWrapper>
          <Coment>전화번호</Coment>
          <InputContainer>
            <OnBoardingInput
              value={phoneNum ?? ""}
              onChange={(e) => setPhoneNum(e.target.value)}
              $isGreen={isGreenPhone}
              placeholder="숫자만 입력해주세요"
            />
            {isGreenPhone ? (
              <IoCheckmarkDoneOutline
                size="25"
                color="#22B379"
                style={{ position: "absolute", right: "20px", top: "10px" }}
              />
            ) : null}
          </InputContainer>
        </ComentInputWrapper>
      </OnboardingContainer>
    </>
  );
};

const OnboardingContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 30px;
  box-sizing: border-box;
  margin-top: 30px;
  gap: 45px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 25px;
  color: #333;
`;

const ComentInputWrapper = styled.div``;

const Coment = styled.div`
  font-size: 15.5px;
  color: #595c62;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 8px;
  display: inline-block;
  margin-bottom: 2px;
  /* background-color: #f8f8f8; */
  /* box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); */
`;

const InputContainer = styled.div`
  position: relative;
`;

const OnBoardingInput = styled.input`
  border: 1.3px solid
    ${({ $isGreen }) => {
      if ($isGreen === null) {
        return "#bfbfbf";
      } else {
        return $isGreen ? "#22b379" : "#ff0000";
      }
    }};
  width: 100%;
  padding: 12px 18px;
  border-radius: 50px;
  outline: none;
  box-sizing: border-box;
  font-size: 17px;
  transition: all 0.3s ease-in-out;

  &::placeholder {
    color: #bfbfbf;
    font-size: 15.5px;
  }
`;

const GenderContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const GenderLabel = styled.label`
  padding: 12px 20px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;
  min-width: 100px;
  text-align: center;
  border: 1.5px solid ${({ $checked }) => ($checked ? "#22b379" : "#bfbfbf")};
  color: ${({ $checked }) => ($checked ? "white" : "#595c62")};
  background-color: ${({ $checked }) => ($checked ? "#22B379" : "white")};
  transition: all 0.3s ease-in-out;
`;

const HiddenRadio = styled.input`
  display: none;
`;

export default OnboardingUserInfo;
