import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import SaveButton from "../save/SaveButton";

const defaultImage =
  "https://us.123rf.com/450wm/mathier/mathier1905/mathier190500002/134557216-%EC%8D%B8%EB%84%A4%EC%9D%BC-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%86%EC%9D%8C-%ED%8F%AC%EB%9F%BC-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EB%B0%8F-%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8%EC%9A%A9-%EC%9E%90%EB%A6%AC-%ED%91%9C%EC%8B%9C%EC%9E%90.jpg";

const SavedRestaurantItem = ({
  id,
  name,
  rating,
  category,
  location,
  averagePrice,
  imgUrl,
}) => {
  return (
    <SavedRestaurantItemContainer>
      <RestImgWrapper $imgUrl={imgUrl ?? defaultImage} />

      <InfoContainer>
        <RestNameWrapper>{name}</RestNameWrapper>
        <RatingContainer>
          <FaStar size={13} color={"#FFD700"} style={{ marginBottom: "3px" }} />
          <RatingWrapper>{rating}</RatingWrapper>
          <DetailContainer style={{ marginLeft: "5px", marginBottom: "1px" }}>
            {category}
          </DetailContainer>
        </RatingContainer>
        <DetailContainer>
          {location} · 평균 {averagePrice}
        </DetailContainer>
      </InfoContainer>

      <ButtonWrapper>
        <SaveButton
          isClick={() => {}}
          width={"25px"}
          height={"25px"}
          size={13}
          border={"#E4E4E4"}
          iconcolor={"E4E4E4"}
        />
      </ButtonWrapper>
    </SavedRestaurantItemContainer>
  );
};

const SavedRestaurantItemContainer = styled.div`
  display: flex;
`;

const RestImgWrapper = styled.div`
  width: 90px;
  height: 100px;
  border-radius: 5px;

  background-image: ${({ $imgUrl }) => `url(${$imgUrl})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 20px;
`;

const RestNameWrapper = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

const RatingWrapper = styled.div`
  font-weight: 700;
  font-size: 14.5px;
`;

const DetailContainer = styled.div`
  font-size: 12.5px;
  color: #9e9e9e;
`;

const ButtonWrapper = styled.div`
  left: auto;
  margin-left: auto;
`;

export default SavedRestaurantItem;
