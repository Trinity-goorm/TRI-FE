import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressInfo from "../../components/onbording/ProgressInfo";
import OnboardingButton from "../../components/onbording/OnboardingButton";
import CategoryList from "../../components/onbording/CategoryList";

const OnboardingCategory = () => {
  const nav = useNavigate();
  const [category, setCategory] = useState([]);

  const addCategory = (id) => {
    setCategory([...category, id]);
  };

  const deleteCategory = (id) => {
    setCategory(category.filter((item) => item !== id));
  };

  return (
    <>
      <ProgressInfo step={2} />
      <OnboardingContainer>
        <TitleContainer>
          <Title>음식 카테고리 선택</Title>
          <div style={{ lineHeight: "1.6" }}>
            원하시는 음식 카테고리를 선택해주세요! <br />
            최소 3개는 선택해주세요!
          </div>
        </TitleContainer>
        <CategoryList
          addCategory={addCategory}
          deleteCategory={deleteCategory}
        />
        <OnboardingButton
          text={"다음"}
          isFormValid={category.length >= 3}
          handleClickButton={() => {
            nav("/onboarding/3");
          }}
        />
      </OnboardingContainer>
    </>
  );
};

const OnboardingContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 90px);
  padding: 30px 30px;
  box-sizing: border-box;
  background-color: #fcfcfc;
  gap: 60px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
`;

export default OnboardingCategory;
