import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../components/onbording/ProgressBar";
import OnboardingButton from "../../components/onbording/OnboardingButton";

const fixedMinPrice = 10000;
const fixedMaxPrice = 500000;
const priceGap = 10000;

const OnboardingPrefPrice = () => {
  const nav = useNavigate();
  const [rangeMinValue, setRangeMinValue] = useState(fixedMinPrice);
  const [rangeMaxValue, setRangeMaxValue] = useState(fixedMaxPrice);
  const [rangeMinPercent, setRangeMinPercent] = useState(0);
  const [rangeMaxPercent, setRangeMaxPercent] = useState(0);

  const priceRangeMinValueHandler = (e) => {
    setRangeMinValue(parseInt(e.target.value));
  };

  const priceRangeMaxValueHandler = (e) => {
    setRangeMaxValue(parseInt(e.target.value));
  };

  const twoRangeHandler = () => {
    if (rangeMaxValue - rangeMinValue < priceGap) {
      setRangeMinValue((rangeMinValue) => rangeMinValue - priceGap);
      setRangeMaxValue((rangeMaxValue) => rangeMaxValue + priceGap);
    } else {
      setRangeMinPercent(() => (rangeMinValue / fixedMaxPrice) * 100);
      setRangeMaxPercent(() => 100 - (rangeMaxValue / fixedMaxPrice) * 100);
    }
  };

  return (
    <>
      <ProgressBar />
      <OnboardingContainer>
        <TitleContainer>
          <Title>선호 가격대 선택</Title>
          <div style={{ lineHeight: "1.6" }}>
            원하시는 선호 가격대를 선택해주세요!
          </div>
        </TitleContainer>

        <SliderWrapper>
          <FilterPriceSlide>
            <FilterPriceSlideInner
              $rangeMinPercent={rangeMinPercent}
              $rangeMaxPercent={rangeMaxPercent}
            />
          </FilterPriceSlide>

          <FilterPriceRangeMin
            type="range"
            min={fixedMinPrice}
            max={fixedMaxPrice - priceGap}
            step="10000"
            value={rangeMinValue}
            onChange={(e) => {
              priceRangeMinValueHandler(e);
              twoRangeHandler();
            }}
          />
          <FilterPriceRangeMax
            type="range"
            min={fixedMinPrice + priceGap}
            max={fixedMaxPrice}
            step="10000"
            value={rangeMaxValue}
            onChange={(e) => {
              priceRangeMaxValueHandler(e);
              twoRangeHandler();
            }}
          />
        </SliderWrapper>

        <OnboardingButton
          text={"다음"}
          isFormValid={false}
          handleClickButton={() => {
            nav("/");
          }}
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

const SliderWrapper = styled.div`
  position: relative;
`;

const FilterPriceSlide = styled.div`
  position: relative;
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background-color: #dddddd;
`;
const FilterPriceSlideInner = styled.div`
  position: absolute;
  left: ${({ $rangeMinPercent }) => $rangeMinPercent}%;
  right: ${({ $rangeMaxPercent }) => $rangeMaxPercent}%;
  height: 4px;
  border-radius: 10px;
  background-color: #b0b0b0;
`;

const FilterPriceRangeMin = styled.input`
  pointer-events: none;
  position: absolute;
  top: -15px;
  right: 1px;
  width: 100%;
  -webkit-appearance: none;
  background: none;
  &::-webkit-slider-thumb {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 2px solid #b0b0b0;
    background-color: white;
    -webkit-appearance: none;
    pointer-events: auto;
  }
`;

const FilterPriceRangeMax = styled.input`
  pointer-events: none;
  position: absolute;
  top: -15px;
  width: 100%;
  -webkit-appearance: none;
  background: none;
  &::-webkit-slider-thumb {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 2px solid #b0b0b0;
    background-color: white;
    -webkit-appearance: none;
    pointer-events: auto;
  }
`;

export default OnboardingPrefPrice;
