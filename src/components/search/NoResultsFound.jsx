import styled from "styled-components";
import { BsShop } from "react-icons/bs";

const NoResultsFound = () => {
  return (
    <NoResultsFoundContainer>
      <InfoContainer>
        <BsShop size={70} color={"#dcdcdc"} />
        <InfoTitle>앗! 조건에 맞는 매장이 없어요.</InfoTitle>
        <InfoSubTitleContainer>
          <InfoSubTitle>• 더 일반적인 검색어로 검색해 보세요.</InfoSubTitle>
          <InfoSubTitle>• 문장이 아닌 단어로 검색해 보세요.</InfoSubTitle>
        </InfoSubTitleContainer>
      </InfoContainer>
    </NoResultsFoundContainer>
  );
};

const NoResultsFoundContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -100px;
  gap: 20px;
`;

const InfoTitle = styled.div`
  font-weight: 700;
`;

const InfoSubTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const InfoSubTitle = styled.div`
  font-size: 13px;
  color: #919191;
`;

export default NoResultsFound;
