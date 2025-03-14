import styled from 'styled-components';
import TotalRestItem from '../item/TotalRestItem';
import React from 'react';

const TotalRestList = React.memo(({ restaurantList, offsetY }) => {
  return (
    <TotalRestListContainer $offsetY={offsetY}>
      {restaurantList?.map((item, index) => (
        <TotalRestItem
          key={`${item.restaurantId}-${index}`}
          id={item.restaurantId}
          name={item.name}
          imgUrls={item.imageUrls}
          category={item.category}
          location={item.location}
          rating={item.rating}
          operatingHour={item.operatingHours}
          averagePrice={item.averagePrice}
          isSaved={item.wishlisted}
          reservation={item.reservation}
        />
      ))}
    </TotalRestListContainer>
  );
});

const TotalRestListContainer = styled.div`
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  gap: 3px;
  transform: ${({ $offsetY }) => `translateY(${$offsetY}px)`};
  cursor: pointer;
`;

export default TotalRestList;
