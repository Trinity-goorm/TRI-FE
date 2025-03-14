import { useEffect } from "react";
import styled from "styled-components";
//import { IoCheckmarkDoneOutline } from "react-icons/io5";

const OnboardingUserInfo = ({
  gender,
  setGender,
  age,
  setAge,
  phoneNum,
  setPhoneNum,
  name,
  setName,
  setIsFormValid,
}) => {
  const isGreenName = name === null ? null : name.length >= 2;
  const isGreenAge = age === null ? null : !isNaN(age) && age.length === 8;
  const isGreenPhone = phoneNum === null ? null : phoneNum.length === 13;

  useEffect(() => {
    setIsFormValid(isGreenName && isGreenAge && isGreenPhone);
  }, [isGreenName, isGreenAge, isGreenPhone, setIsFormValid]);

  const formatPhoneNum = (value) => {
    const numbers = value.replace(/\D/g, "");

    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 7)
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(
      7,
      11
    )}`;
  };

  const handlePhoneNumChange = (e) => {
    const rawValue = e.target.value;
    const formattedValue = formatPhoneNum(rawValue);
    setPhoneNum(formattedValue);
  };

  return (
    <>
      <OnboardingContainer>
        <Title>필요한 정보를 입력하고 시작해볼까요?</Title>

        <ComentInputWrapper>
          <Coment>성별</Coment>
          <GenderContainer>
            <GenderLabel $checked={gender === "MALE"}>
              <HiddenRadio
                type="radio"
                name="gender"
                value="MALE"
                checked={gender === "MALE"}
                onChange={() => setGender("MALE")}
              />
              남성
            </GenderLabel>
            <GenderLabel $checked={gender === "FEMALE"}>
              <HiddenRadio
                type="radio"
                name="gender"
                value="FEMALE"
                checked={gender === "FEMALE"}
                onChange={() => setGender("FEMALE")}
              />
              여성
            </GenderLabel>
          </GenderContainer>
        </ComentInputWrapper>

        <ComentInputWrapper>
          <Coment>이름</Coment>
          <InputContainer>
            <OnBoardingInput
              value={name ?? ""}
              onChange={(e) => setName(e.target.value)}
              $isGreen={isGreenName}
              placeholder="홍길동"
            />
            {/*<CheckIcon $isGreen={isGreenName} />*/}
          </InputContainer>
        </ComentInputWrapper>

        <ComentInputWrapper>
          <Coment>생년월일</Coment>
          <InputContainer>
            <OnBoardingInput
              value={age ?? ""}
              onChange={(e) => setAge(e.target.value)}
              $isGreen={isGreenAge}
              placeholder="생년월일 8자리 (YYYYMMDD)"
            />
            {/*<CheckIcon $isGreen={isGreenAge} />*/}
          </InputContainer>
        </ComentInputWrapper>

        <ComentInputWrapper>
          <Coment>전화번호</Coment>
          <InputContainer>
            <OnBoardingInput
              value={phoneNum ?? ""}
              onChange={handlePhoneNumChange}
              $isGreen={isGreenPhone}
              placeholder="010-1234-5678"
            />
            {/*<CheckIcon $isGreen={isGreenPhone} />*/}
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
  gap: 27px;
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

/*const CheckIcon = styled(IoCheckmarkDoneOutline)`
  position: absolute;
  right: 20px;
  top: 10px;
  color: #22b379;
  font-size: 25px;
  opacity: ${({ $isGreen }) => ($isGreen ? 1 : 0)};
  transform: ${({ $isGreen }) => ($isGreen ? "scale(1)" : "scale(0.5)")};
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
`;*/

export default OnboardingUserInfo;
