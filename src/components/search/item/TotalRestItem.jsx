import styled from 'styled-components';
import SaveButton from '../../save/SaveButton.jsx';
import SearchReservationList from '../list/SearchReservationList.jsx';
import { formatRating } from '../../../util/formatRating.js';
import { formatPrice } from '../../../util/formatPrice.js';
import { useNavigate } from 'react-router-dom';
import wine from '../../../assets/img/wine1.jpg';
import wine_webp from '../../../assets/img/wine1.webp';
import { changeParametersForKakaoCDN } from '../../../util/imageUtils.js';
import {
  usePostLike,
  useDeleteLike,
} from '../../../api/queries/userLikeQueries.js';
import Skeleton from '../../loadingBar/Skeleton.jsx';
import { useState } from 'react';

const widthMap = {
  1: 440,
  2: 220,
  3: 200,
};

const TotalRestItem = ({ restaurant, isSaved }) => {
  const nav = useNavigate();
  const { mutate: postLike } = usePostLike();
  const { mutate: deleLike } = useDeleteLike();
  const [loadedImages, setLoadedImages] = useState(
    new Array(restaurant.imageUrls.length).fill(false)
  );

  const onClickSave = (e) => {
    e.stopPropagation();

    if (!isSaved) postLike(restaurant);
    else deleLike(restaurant.restaurantId);
  };

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => {
      const newLoadedImages = [...prev];
      newLoadedImages[index] = true;
      return newLoadedImages;
    });
  };

  return (
    <TotalRestItemContainer
      onClick={() => {
        nav(`/detail/${restaurant.restaurantId}`);
      }}
    >
      <TopContainer>
        <NameSaveContainer>
          <NameWrapper>{restaurant.name}</NameWrapper>
          <SaveButtonContainer onClick={onClickSave}>
            <SaveButton
              isLiked={isSaved}
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
            {formatRating(restaurant.rating)}
          </RatingWrapper>
          <div>&nbsp;· 경기 성남시 분당구</div>
          <div>&nbsp;· {restaurant.category}</div>
        </DetailTopContainer>
      </TopContainer>

      <ImgWrapper>
        {restaurant.imageUrls.map((imgUrl, index) => {
          const imgWidth = widthMap[restaurant.imageUrls.length] || 200;
          const imgSrc = `https://${changeParametersForKakaoCDN({
            width: imgWidth,
            height: 150,
            quality: 100,
            url: imgUrl || '',
          })}`;

          return (
            <div key={index}>
              {!loadedImages[index] && (
                <Skeleton.Content
                  style={{
                    width: `${imgWidth}px`,
                    height: '150px',
                    borderRadius:
                      index === 0
                        ? '8px 0 0 8px'
                        : index === restaurant.imageUrls.length - 1
                        ? '0 8px 8px 0'
                        : '0',
                  }}
                />
              )}
              {restaurant.imageUrls[0] === null ? (
                <picture>
                  <source srcSet={wine_webp} type='image/webp' />
                  <img
                    src={wine}
                    width={440}
                    height={150}
                    style={{
                      borderRadius: '8px',
                      objectFit: 'cover',
                      display: loadedImages[index] ? 'block' : 'none',
                    }}
                    onLoad={() => handleImageLoad(index)}
                  />
                </picture>
              ) : (
                <Image
                  src={imgSrc}
                  alt={`restaurant-${index}`}
                  onLoad={() => handleImageLoad(index)}
                  $isLoaded={loadedImages[index]}
                  $isFirst={index === 0}
                  $isLast={index === restaurant.imageUrls.length - 1}
                  $isSingle={restaurant.imageUrls.length === 1}
                  width={imgWidth}
                  height={150}
                  $loadedImages={loadedImages[index]}
                />
              )}
            </div>
          );
        })}
      </ImgWrapper>

      {/*
        이미지 1개: 440 x 150
        이미지 2개: 220 x 150
        이미지 3개: 200 x 150
      */}

      <BottomContainer>
        <OperatingTimeContainer>
          <ClockIcon className='material-icons'>schedule</ClockIcon>
          {restaurant.operatingHours === 'null'
            ? '운영 시간 정보 없음'
            : restaurant.operatingHours}
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
          평균 {formatPrice(restaurant.averagePrice)}
        </PriceContainer>
      </BottomContainer>

      <SearchReservationList reservation={restaurant.reservation} />
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

  display: ${({ $loadedImages }) => ($loadedImages ? 'block' : 'none')};
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
