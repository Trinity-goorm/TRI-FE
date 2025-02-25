import styled from "styled-components";
import CategoryList from "../../components/onbording/CategoryList";
import { useEffect } from "react";

const OnboardingCategory = ({ category, setCategory, setIsFormValid }) => {
  useEffect(() => {
    setIsFormValid(category.length === 3);
  }, [category, setIsFormValid]);

  return (
    <>
      <OnboardingContainer>
        <div>
          <Title>어떤 음식을 좋아하세요?</Title>
          <Description>
            더 나은 경험을 위해 3개의 카테고리를 골라주세요!
          </Description>
        </div>
        <CategoryList category={category} setCategory={setCategory} />
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
  gap: 40px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

const Description = styled.div`
  font-size: 14px;
  color: #595c62;
  font-weight: 600;
  padding: 8px 12px;
  border-radius: 8px;
  display: inline-block;
  background-color: #f8f8f8;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export default OnboardingCategory;
