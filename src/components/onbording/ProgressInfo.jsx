import styled from "styled-components";
//import { IoChevronBack } from "react-icons/io5";
//import { useNavigate } from "react-router-dom";

const ProgressInfo = ({ step, handleBeforeStep }) => {
  return (
    <ProgressInfoWrapper>
      <Header>
        {step === 2 || step === 3 ? (
            <div>hihi</div>
        ) : null}
        {step !== 0 && <Title>CATCHPING</Title>}
      </Header>
      <ProgressBarWrapper>
        {step !== 0 && <GrayBar />}
        <ProgressBarFill $step={step} />
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
`;

const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const ProgressBarWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

const GrayBar = styled.div`
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: #ededed;
  border-radius: 15px;
`;

const ProgressBarFill = styled.div`
  position: absolute;
  height: 3px;
  transition: width 0.5s ease-in-out;
  background-color: #fc8383;
  width: ${({ $step }) =>
    $step === 1 ? "30%" : $step === 2 ? "60%" : $step === 3 ? "90%" : "0%"};
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 18px;
  text-align: center;
`;
