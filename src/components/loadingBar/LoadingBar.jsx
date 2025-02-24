import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

const LoadingBar = () => {
  return (
    <LoadingBarContainer>
      <ClipLoader color="#fc8383" size={50} />
    </LoadingBarContainer>
  );
};

const LoadingBarContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default LoadingBar;
