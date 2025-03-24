import styled from 'styled-components';
import SaveButton from '../../save/SaveButton.jsx';
import SearchReservationList from '../list/SearchReservationList.jsx';
import { formatRating } from '../../../util/formatRating.js';
import { formatPrice } from '../../../util/formatPrice.js';
import { useState } from 'react';
import PostLike from '../../../api/save/post/PostLike.js';
import DeleLike from '../../../api/save/delete/DeleteLike.js';
import { useNavigate } from 'react-router-dom';
import wine from '../../../assets/img/wine1.jpg';
import { changeParametersForKakaoCDN } from '../../../util/imageUtils.js';

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
      await PostLike(id);
    } catch (error) {
      console.error('💀좋아요 실패', error);
    }
  };

  const fetchDeleteLike = async () => {
    try {
      await DeleLike(id);
    } catch (error) {
      console.error('좋아요 삭제 실패', error);
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
              width={'25px'}
              height={'25px'}
              size={17}
              border={'#E4E4E4'}
              iconcolor={'#E4E4E4'}
            />
          </SaveButtonContainer>
        </NameSaveContainer>

        <DetailTopContainer>
          <RatingWrapper>
            <StarIcon className='material-icons'>star</StarIcon>
            {formatRating(rating)}
          </RatingWrapper>
          <div>&nbsp;· 경기 성남시 분당구</div>
          <div>&nbsp;· {category}</div>
        </DetailTopContainer>
      </TopContainer>

      <ImgWrapper>
        {imgUrls === '이미지 정보 없음' ? (
          <Image src={wine} $isSingle={true} width={200} height={150} />
        ) : (
          imgUrls.map((imgUrl, index) => {
            const widthMap = {
              1: 440,
              2: 220,
              3: 200,
            };
            const imgWidth = widthMap[imgUrls.length] || 200;

            return (
              <Image
                key={index}
                src={
                  imgUrl
                    ? `https://${changeParametersForKakaoCDN({
                        width: imgWidth,
                        height: 150,
                        quality: 100,
                        url: imgUrl,
                      })}`
                    : wine
                }
                $isFirst={index === 0}
                $isLast={index === imgUrls.length - 1}
                $isSingle={imgUrls.length === 1}
                width={200}
                height={150}
              />
            );
          })
        )}
      </ImgWrapper>
      {/*
        이미지 1개: 440 x 150
        이미지 2개: 220 x 150
        이미지 3개: 200 x 150
      */}

      {/* 
      <ImgWrapper>
        {imgUrls === '이미지 정보 없음' ? (
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
      </ImgWrapper> */}

      <BottomContainer>
        <OperatingTimeContainer>
          <ClockIcon className='material-icons'>schedule</ClockIcon>
          {operatingHour === 'null' ? '운영 시간 정보 없음' : operatingHour}
        </OperatingTimeContainer>
        <PriceContainer>
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1.3px solid black',
              marginBottom: '2px',
            }}
          >
            <MoneyIcon className='material-icons'>attach_money</MoneyIcon>
          </div>
          평균 {formatPrice(averagePrice)}
        </PriceContainer>
      </BottomContainer>

      <SearchReservationList reservation={reservation} />
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

const Image = styled.img`
  flex: 1 0 200px;
  height: 150px;
  object-fit: cover;
  /* background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */

  border-radius: ${({ $isFirst, $isLast, $isSingle }) => {
    if ($isSingle) {
      return '8px';
    } else if ($isFirst) {
      return '8px 0 0 8px';
    } else if ($isLast) {
      return '0 8px 8px 0';
    } else {
      return '0';
    }
  }};
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
      return '8px';
    } else if ($isFirst) {
      return '8px 0 0 8px';
    } else if ($isLast) {
      return '0 8px 8px 0';
    } else {
      return '0';
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

const StarIcon = styled.span`
  font-size: 15px;
  color: gold;
  margin-bottom: 3px;
`;

const ClockIcon = styled.span`
  font-size: 14px;
  margin-bottom: 2px;
`;

const MoneyIcon = styled.span`
  font-size: 12px;
`;

export default TotalRestItem;
