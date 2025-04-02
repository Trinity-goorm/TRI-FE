import styled from 'styled-components';
import TotalRestItem from '../item/TotalRestItem';

const TotalRestList = ({ restaurantList, offsetY, likeIds }) => {
  return (
    <TotalRestListContainer $offsetY={offsetY}>
      {restaurantList?.map((item) => (
        <TotalRestItem
          key={`${item.restaurantId}`}
          restaurant={item}
          isSaved={likeIds.includes(item.restaurantId)}
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
