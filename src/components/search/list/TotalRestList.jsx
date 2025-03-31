import styled from 'styled-components';
import TotalRestItem from '../item/TotalRestItem';
import React from 'react';

const TotalRestList = ({ restaurantList, offsetY, likeRestIds }) => {
  return (
    <TotalRestListContainer $offsetY={offsetY}>
      {restaurantList?.map((item, index) => (
        <TotalRestItem
          key={`${item.restaurantId}-${index}`}
          restaurant={item}
          isSaved={likeRestIds?.includes(item.restaurantId)}
        />
      ))}
    </TotalRestListContainer>
  );
};

const TotalRestListContainer = styled.div`
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  gap: 3px;
  transform: ${({ $offsetY }) => `translateY(${$offsetY}px)`};
  cursor: pointer;
`;

export default TotalRestList;
