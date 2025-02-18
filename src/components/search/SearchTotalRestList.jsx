import styled from "styled-components";
import SearchTotalRestItem from "./SearchTotalRestItem";
import SearchRestaurant from "../../assets/dummydata/SearchRestaurant";

const SearchTotalRestList = () => {
  return (
    <SearchTotalRestListContainer>
      {SearchRestaurant.map((item) => (
        <SearchTotalRestItem
          key={item.id}
          id={item.id}
          name={item.name}
          imgUrl={item.imgUrl}
          category={item.category}
          location={item.location}
          rating={item.rating}
          operatingHour={item.operatingHour}
          averagePrice={item.averagePrice}
          isLike={item.isLike}
        />
      ))}
    </SearchTotalRestListContainer>
  );
};

const SearchTotalRestListContainer = styled.div``;

export default SearchTotalRestList;
