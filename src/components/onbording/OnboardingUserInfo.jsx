import styled from "styled-components";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

const OnboardingUserInfo = () => {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState(null);
  const [isGreenAge, setIsGreenAge] = useState(false);
  const [phoneNum, setPhoneNum] = useState();
  const [isGreenPhone, setIsGreenPhone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isNaN(age) && age === "") {
        setIsGreenAge(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [age]);

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <>
      <TitleContainer>
        <Title>환영합니다!</Title>
        <div style={{ lineHeight: "1.6" }}>
          ~은 고객님의 활기찬 식사를 위해 <br />
          성별, 나이, 전화번호, 선호 메뉴 카테고리, 가격대 등 <br />
          정보를 수집하여 최적의 식당을 추천 해드려요.
        </div>
      </TitleContainer>

      <div>
        <Coment>고객님의 성별을 선택해주세요!</Coment>
        <GenderContainer>
          <GenderLabel checked={gender === "male"}>
            <HiddenRadio
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onClick={() => setGender("male")}
            />
            남성
          </GenderLabel>
          <GenderLabel checked={gender === "female"}>
            <HiddenRadio
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onClick={() => setGender("female")}
            />
            여성
          </GenderLabel>
        </GenderContainer>
      </div>

      <div>
        <Coment>고객님의 나이를 입력해주세요!</Coment>
        <InputContainer>
          <Input
            value={age}
            onChange={handleAgeChange}
            onFocus={() => {
              if (age === null) setAge("");
            }}
            isGreen={isGreenAge}
            age={age}
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
        <Input
          value={phoneNum}
          onChange={(e) => {
            setPhoneNum(e.target.value);
          }}
        />
      </div>
    </>
  );
};

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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

// bfbfbf
const Input = styled.input`
  border: none;
  border-bottom: 1.3px solid
    ${({ isGreen, age }) => {
      if (age === null) {
        return "#bfbfbf";
      } else {
        return isGreen ? "#22B379" : "#fc8383";
      }
    }};
  width: 100%;
  padding: 10px 5px;
  outline: none;
  box-sizing: border-box;
  font-size: 18px;
`;

const Input2 = styled.input`
  border: none;
  border-bottom: 1.4px solid #bfbfbf;
  width: 100%;
  padding: 10px 5px;
  outline: none;
  box-sizing: border-box;
  font-size: 18px;
  animation: none;
  caret-color: transparent;
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
  border: 1.3px solid ${({ checked }) => (checked ? "#22B379" : "#bfbfbf")};
  color: ${({ checked }) => (checked ? "#22B379" : "#bfbfbf")};
  text-align: center;
`;

const HiddenRadio = styled.input`
  display: none;
`;

export default OnboardingUserInfo;
