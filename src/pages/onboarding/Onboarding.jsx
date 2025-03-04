import { useState, useEffect, act } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import OnboardingInfo from "../../components/onbording/OnboardingInfo";
import OnboardingUserInfo from "../../components/onbording/OnboardingUserInfo";
import OnboardingCategory from "../../components/onbording/OnboardingCategory";
import OnboardingPrefPrice from "../../components/onbording/OnboardingPrefPrice";
import OnboardingButton from "../../components/onbording/OnboardingButton";
import ProgressInfo from "../../components/onbording/ProgressInfo";
import PostOnboarding from "../../api/onboarding/PostOnboarding";
import { formatBirth } from "../../util/formatBirth.js";
import { userState } from "../../atoms/userState.js";
import { useRecoilState } from "recoil";
import PostFcmToken from "../../api/fcm/PostFcmToken.js";

const fixedMinPrice = 10000;
const fixedMaxPrice = 500000;
const buttonText = ["시작하기", "다음", "다음", "완료"];
const Onboarding = () => {
  const [step, setStep] = useState(0);
  const [isFormValid, setIsFormValid] = useState(true);
  const [user, setUser] = useRecoilState(userState);

  // step 1
  const [gender, setGender] = useState("MALE");
  const [age, setAge] = useState(null);
  const [phoneNum, setPhoneNum] = useState(null);
  const [name, setName] = useState(null);

  // step 2
  const [category, setCategory] = useState([]);

  // step 3
  const [rangeMinValue, setRangeMinValue] = useState(fixedMinPrice);
  const [rangeMaxValue, setRangeMaxValue] = useState(fixedMaxPrice);
  const [rangeMinPercent, setRangeMinPercent] = useState(0);
  const [rangeMaxPercent, setRangeMaxPercent] = useState(0);

  const handleNextStep = async () => {
    if (step === 3) {
      if (user) {
        const response = await postOnboardingData();
        localStorage.setItem("FCM_TOKEN", user.fcmToken);
        localStorage.setItem("ACCESS_TOKEN", response.headers.get("access"));
        localStorage.setItem("REFRESH_TOKEN", user.refreshToken);
        postFcmTokenData(user.fcmToken, response.headers.get("access"));
      }
      window.location.href = "/";
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handleBeforeStep = () => {
    setStep((prev) => prev - 1);
  };

  const postOnboardingData = async () => {
    try {
      const response = await PostOnboarding(
        gender,
        name,
        formatBirth(age),
        phoneNum,
        rangeMinValue,
        rangeMaxValue,
        category,
        user.refreshToken,
        user.accessToken
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const postFcmTokenData = async (fcmToken, accessToken) => {
    try {
      await PostFcmToken(fcmToken, accessToken);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <OnboardingContainer>
      <ProgressInfo step={step} handleBeforeStep={handleBeforeStep} />
      {step === 0 && <OnboardingInfo />}

      {step === 1 && (
        <OnboardingUserInfo
          gender={gender}
          setGender={setGender}
          age={age}
          setAge={setAge}
          phoneNum={phoneNum}
          setPhoneNum={setPhoneNum}
          name={name}
          setName={setName}
          setIsFormValid={setIsFormValid}
        />
      )}
      {step === 2 && (
        <OnboardingCategory
          category={category}
          setCategory={setCategory}
          setIsFormValid={setIsFormValid}
        />
      )}
      {step === 3 && (
        <OnboardingPrefPrice
          rangeMinValue={rangeMinValue}
          setRangeMinValue={setRangeMinValue}
          rangeMaxValue={rangeMaxValue}
          setRangeMaxValue={setRangeMaxValue}
          rangeMinPercent={rangeMinPercent}
          setRangeMinPercent={setRangeMinPercent}
          rangeMaxPercent={rangeMaxPercent}
          setRangeMaxPercent={setRangeMaxPercent}
        />
      )}

      <OnboardingButton
        text={buttonText[step]}
        isFormValid={isFormValid}
        handleClickButton={handleNextStep}
      />
    </OnboardingContainer>
  );
};

const OnboardingContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default Onboarding;
