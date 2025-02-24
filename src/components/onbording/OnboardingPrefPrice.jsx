import styled from "styled-components";
import { useState } from "react";

const fixedMinPrice = 10000;
const fixedMaxPrice = 500000;
const priceGap = 10000;

const OnboardingPrefPrice = ({
  rangeMinValue,
  setRangeMinValue,
  rangeMaxValue,
  setRangeMaxValue,
  rangeMinPercent,
  setRangeMinPercent,
  rangeMaxPercent,
  setRangeMaxPercent,
}) => {
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
      <OnboardingContainer>
        <Title>식사할 때 선호하는 가격대가 있나요?</Title>

        <PriceComContainer>
          <PriceWrapper>
            {rangeMinValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
            &nbsp; ~ &nbsp;{" "}
            {rangeMaxValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
          </PriceWrapper>

          <div>
            <CommentContainer>
              <p>1만원</p>
              <p>50만원</p>
            </CommentContainer>
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
          </div>
        </PriceComContainer>
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
  gap: 160px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 25px;
  color: #333;
`;

const PriceComContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 14.5px;
  gap: 50px;
`;

const PriceWrapper = styled.div`
  font-size: 25px;
  font-weight: 900;
  text-align: center;
`;

const CommentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 5px;
  margin-bottom: 7px;
  color: #232323;
`;

const SliderWrapper = styled.div`
  position: relative;
`;

const FilterPriceSlide = styled.div`
  position: relative;
  height: 10px;
  width: 100%;
  border-radius: 10px;
  background-color: #dddddd;
`;

const FilterPriceSlideInner = styled.div`
  position: absolute;
  left: ${({ $rangeMinPercent }) => $rangeMinPercent}%;
  right: ${({ $rangeMaxPercent }) => $rangeMaxPercent}%;
  height: 10px;
  border-radius: 10px;
  background-color: #fc8383;
`;

const FilterPriceRangeMin = styled.input`
  pointer-events: none;
  position: absolute;
  top: -10px;
  right: 1px;
  width: 100%;
  -webkit-appearance: none;
  background: none;
  &::-webkit-slider-thumb {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    border: 1.5px solid #c3c3c3;
    background-color: white;
    -webkit-appearance: none;
    pointer-events: auto;
  }
`;

const FilterPriceRangeMax = styled.input`
  pointer-events: none;
  position: absolute;
  top: -10px;
  left: 3px;
  width: 100%;
  -webkit-appearance: none;
  background: none;
  &::-webkit-slider-thumb {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    border: 1.5px solid #c3c3c3;
    background-color: white;
    -webkit-appearance: none;
    pointer-events: auto;
  }
`;

export default OnboardingPrefPrice;
