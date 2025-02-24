import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

const LoadingMoreBar = () => {
  return (
    <LoadingMoreBarContainer>
      <ClipLoader color="#fc8383" size={30} />
    </LoadingMoreBarContainer>
  );
};

const LoadingMoreBarContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: white;
`;

export default LoadingMoreBar;
