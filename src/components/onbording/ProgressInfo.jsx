import styled from "styled-components";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ProgressInfo = ({ step }) => {
  const nav = useNavigate();

  return (
    <ProgressInfoWrapper>
      {step !== 1 ? (
        <IoChevronBack
          size="25px"
          style={{ position: "absolute", top: "18px", left: "9px" }}
          onClick={() => nav(-1)}
        />
      ) : null}
      <Title>정보 입력</Title>
      <ProgressBarWrapper>
        <ProgressBar $step={step === 1}></ProgressBar>
        <ProgressBar $step={step === 2}></ProgressBar>
        <ProgressBar $step={step === 3}></ProgressBar>
      </ProgressBarWrapper>
    </ProgressInfoWrapper>
  );
};

export default ProgressInfo;

const ProgressInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 90px;
  position: relative;
`;

const ProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 10px;
  gap: 15px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background-color: ${({ $step }) => ($step ? "#fc8383" : "#C7C7C7")};
`;

const Title = styled.div`
  font-weight: 650;
  font-size: 18px;
  text-align: center;
`;
