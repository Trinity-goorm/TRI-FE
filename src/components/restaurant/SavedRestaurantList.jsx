import styled from "styled-components";
import SearchRestaurant from "../../assets/dummydata/SearchRestaurant";
import SavedRestaurantItem from "./SavedRestaurantItem";
import { useState, useEffect } from "react";

const SavedRestaurantList = ({ savedRestList, deleteLikeItem }) => {
  return (
    <SavedRestaurantItemContainer>
      {savedRestList
        .slice()
        .reverse()
        .map((item) => (
          <SavedRestaurantItem
            key={item.restaurantId}
            id={item.restaurantId}
            name={item.name}
            rating={item.rating}
            category={item.category}
            location={item.location}
            averagePrice={item.averagePrice}
            imgUrl={item.imageUrls?.[0] ?? null}
            deleteLikeItem={deleteLikeItem}
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
