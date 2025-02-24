import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const RecommendCatItem = ({ img, title, subTitle, categoryId }) => {
  const nav = useNavigate();

  return (
    <RecommendCatItemContainer
      onClick={() =>
        categoryId === 13
          ? nav("/search/total?keyword=")
          : nav(`/search/total/category?categoryId=${categoryId}`)
      }
    >
      <ImgWrapper src={img} />
      <TitleContainer>
        <SubTitle># {subTitle}</SubTitle>
        <TitleWrapper> {title} 맛집</TitleWrapper>
      </TitleContainer>
    </RecommendCatItemContainer>
  );
};

const RecommendCatItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  border-radius: 13px;
  padding: 8px 15px;
  border: 1px solid #f0f0f0;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #feddd8;
    transform: scale(1.03);
  }
`;

const ImgWrapper = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SubTitle = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #777;
`;

const TitleWrapper = styled.div`
  font-size: 15px;
  font-weight: 650;
  color: #3c3c3c;
`;

export default RecommendCatItem;
