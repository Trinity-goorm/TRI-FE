import styled from "styled-components";
import SearchRestaurant from "../../assets/dummydata/SearchRestaurant";
import SavedRestaurantItem from "./SavedRestaurantItem";

const SavedRestaurantList = () => {
  return (
    <SavedRestaurantItemContainer>
      {SearchRestaurant.map((item) => (
        <SavedRestaurantItem
          key={item.id}
          id={item.id}
          name={item.name}
          rating={item.rating}
          category={item.category}
          location={item.location}
          averagePrice={item.averagePrice}
          imgUrl={item.imgUrls?.[0] ?? null}
        />
      ))}
    </SavedRestaurantItemContainer>
  );
};

const SavedRestaurantItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export default SavedRestaurantList;
