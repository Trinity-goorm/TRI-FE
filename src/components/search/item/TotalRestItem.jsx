import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaWonSign } from "react-icons/fa6";
import SaveButton from "../../save/SaveButton.jsx";
import SearchReservationList from "../list/SearchReservationList.jsx";
import { formatRating } from "../../../util/formatRating.js";
import { formatPrice } from "../../../util/formatPrice.js";
import { useState } from "react";
import PostLike from "../../../api/save/post/PostLike.js";
import DeleLike from "../../../api/save/delete/DeleteLike.js";
import { useNavigate } from "react-router-dom";
import wine from "../../../assets/img/wine1.jpg";

const TotalRestItem = ({
  id,
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
  const [saved, setSaved] = useState(isSaved);
  const nav = useNavigate();

  const onClickSave = (e) => {
    e.stopPropagation();
    setSaved((prev) => {
      const newSaved = !prev;

      if (newSaved) fetchPostLike();
      else fetchDeleteLike();

      return newSaved;
    });
  };

  const fetchPostLike = async () => {
    try {
      await PostLike(localStorage.getItem("userId"), id);
    } catch (error) {
      console.error("💀좋아요 실패", error);
    }
  };

  const fetchDeleteLike = async () => {
    try {
      await DeleLike(localStorage.getItem("userId"), id);
    } catch (error) {
      console.error("좋아요 삭제 실패", error);
    }
  };

  return (
    <TotalRestItemContainer
      onClick={() => {
        nav(`/detail/${id}`);
      }}
    >
      <TopContainer>
        <NameSaveContainer>
          <NameWrapper>{name}</NameWrapper>
          <SaveButtonContainer onClick={onClickSave}>
            <SaveButton
              isLiked={saved}
              width={"25px"}
              height={"25px"}
              size={13}
              border={"#E4E4E4"}
              iconcolor={"E4E4E4"}
            />
          </SaveButtonContainer>
        </NameSaveContainer>

        <DetailTopContainer>
          <RatingWrapper>
            <FaStar
              size={15}
              color={"#FFD700"}
              style={{ marginBottom: "3px" }}
            />
            {formatRating(rating)}
          </RatingWrapper>
          <div>&nbsp;· 경기 성남시 분당구</div>
          <div>&nbsp;· {category}</div>
        </DetailTopContainer>
      </TopContainer>

      <ImgWrapper>
        {imgUrls === "이미지 정보 없음" ? (
          <ImgDiv $imgUrl={wine} $isSingle={true} />
        ) : (
          imgUrls.map((imgUrl, index) => (
            <ImgDiv
              key={index}
              $imgUrl={imgUrl ? `https://${imgUrl}` : wine}
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
          {operatingHour === "null" ? "운영 시간 정보 없음" : operatingHour}
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
          평균 {formatPrice(averagePrice)}
        </PriceContainer>
      </BottomContainer>

      <SearchResevationList reservation={reservation} />
    </TotalRestItemContainer>
  );
};

const TotalRestItemContainer = styled.div`
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

const SaveButtonContainer = styled.div``;

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

export default TotalRestItem;
