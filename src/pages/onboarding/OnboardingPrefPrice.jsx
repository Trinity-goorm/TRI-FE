import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressInfo from "../../components/onbording/ProgressInfo";
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
      <ProgressInfo step={3} />
      <OnboardingContainer>
        <TitleContainer>
          <Title>선호 가격대 선택</Title>
          <div style={{ lineHeight: "1.6" }}>
            원하시는 선호 가격대를 선택해주세요!
          </div>
        </TitleContainer>

        <PriceComContainer>
          <PriceWrapper>
            {rangeMinValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
            &nbsp; ~ &nbsp;{" "}
            {rangeMaxValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
          </PriceWrapper>

          <div>
            <CommentContainer>
              <p>10,000원 ~</p>
              <p>~ 500,000원</p>
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

        <OnboardingButton
          text={"완료"}
          isFormValid={true}
          handleClickButton={() => {
            nav("/", { replace: true });
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
  gap: 167px;
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

const PriceComContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  gap: 50px;
  margin-bottom: 50px;
`;

const PriceWrapper = styled.div`
  font-size: 25px;
  font-weight: 900;
  text-align: center;
`;

const CommentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  bottom: 10px;
  margin-bottom: 10px;
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
    border: 2px solid #b0b0b0;
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
    border: 2px solid #b0b0b0;
    background-color: white;
    -webkit-appearance: none;
    pointer-events: auto;
  }
`;

export default OnboardingPrefPrice;
