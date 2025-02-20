import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaWonSign } from "react-icons/fa6";
import SaveButton from "../save/SaveButton";
import SearchResevationList from "./SearchReservationList";

const SearchTotalRestItem = ({
  name,
  imgUrls,
  category,
  location,
  rating,
  operatingHour,
  averagePrice,
  isSaved,
  reservation,
}) => {
  const defaultImage =
    "https://us.123rf.com/450wm/mathier/mathier1905/mathier190500002/134557216-%EC%8D%B8%EB%84%A4%EC%9D%BC-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%86%EC%9D%8C-%ED%8F%AC%EB%9F%BC-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EB%B0%8F-%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8%EC%9A%A9-%EC%9E%90%EB%A6%AC-%ED%91%9C%EC%8B%9C%EC%9E%90.jpg";

  return (
    <SearchTotalRestItemContainer>
      <TopContainer>
        <NameSaveContainer>
          <NameWrapper>{name}</NameWrapper>
          <SaveButton
            isClick={() => {}}
            width={"25px"}
            height={"25px"}
            size={13}
            border={"#E4E4E4"}
            iconcolor={"E4E4E4"}
          />
        </NameSaveContainer>

        <DetailTopContainer>
          <RatingWrapper>
            <FaStar
              size={15}
              color={"#FFD700"}
              style={{ marginBottom: "3px" }}
            />
            {rating}
          </RatingWrapper>
          <div>&nbsp;· {location}</div>
          <div>&nbsp;· {category}</div>
        </DetailTopContainer>
      </TopContainer>

      <ImgWrapper>
        {imgUrls?.length === 0 || !imgUrls ? (
          <ImgDiv $imgUrl={defaultImage} $isSingle={true} />
        ) : (
          imgUrls.map((imgUrl, index) => (
            <ImgDiv
              key={index}
              $imgUrl={imgUrl ? imgUrl : defaultImage}
              $isFirst={index === 0}
              $isLast={index === imgUrls.length - 1}
              $isSingle={imgUrls.length === 1}
            />
          ))
        )}
      </ImgWrapper>

      <BottomContainer>
        <OperatingTimeContainer>
          <MdAccessTimeFilled style={{ marginBottom: "2px" }} />
          {operatingHour}
        </OperatingTimeContainer>
        <PriceContainer>
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "black",
              marginBottom: "2px",
            }}
          >
            <FaWonSign size={6} color={"white"} />
          </div>
          평균 {averagePrice}
        </PriceContainer>
      </BottomContainer>

      <SearchResevationList reservation={reservation} />
    </SearchTotalRestItemContainer>
  );
};

const SearchTotalRestItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
  background-color: white;
`;

const TopContainer = styled.div`
  padding: 0px 20px;
  margin-bottom: 4px;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const NameSaveContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NameWrapper = styled.div`
  font-size: 19px;
  font-weight: 700;
`;

const DetailTopContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #5f5f5f;
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 15px;
  font-weight: 600;
  color: black;
`;

const ImgWrapper = styled.div`
  display: flex;
  gap: 1px;
  overflow-x: auto;
  flex-wrap: nowrap;
  scrollbar-width: none;
  padding: 0 20px;
  margin: 7px 0px;
`;

const ImgDiv = styled.div`
  flex: 1 0 200px;
  height: 150px;
  background-image: ${({ $imgUrl }) => `url(${$imgUrl})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border-radius: ${({ $isFirst, $isLast, $isSingle }) => {
    if ($isSingle) {
      return "8px";
    } else if ($isFirst) {
      return "8px 0 0 8px";
    } else if ($isLast) {
      return "0 8px 8px 0";
    } else {
      return "0";
    }
  }};
`;

const BottomContainer = styled.div`
  padding: 0px 20px;
  margin-top: 4px;
  display: flex;
  align-items: center;
  font-size: 13px;
`;

const OperatingTimeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: 15px;
`;

export default SearchTotalRestItem;
