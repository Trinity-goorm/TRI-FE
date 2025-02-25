import styled from "styled-components";
import TotalRestItem from "./TotalRestItem.jsx";

const TotalRestList = ({ restaurantList, category }) => {
  return (
    <TotalRestListContainer>
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
};

const TotalRestListContainer = styled.div`
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  gap: 3px;
  overflow-y: auto;
  scrollbar-width: none;

  cursor: pointer;
`;

export default TotalRestList;
