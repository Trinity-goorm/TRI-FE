import styled from "styled-components";
import { useState, useEffect } from "react";
import SearchTotalRestItem from "./SearchTotalRestItem";
import SearchRestaurant from "../../assets/dummydata/SearchRestaurant";
import PostSearchRestList from "../../api/search/PostSearchRestList.js";

const SearchTotalRestList = ({ keyword, sortType }) => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchSearchData();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setPage((prevPage) => prevPage + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetchSearchData = async () => {
    try {
      const response = await PostSearchRestList(keyword, sortType, page);
      setRestaurantList(response.shops);
    } catch (error) {
      console.error("💀데이터 로드 실패", error);
    }
  };

  return (
    <SearchTotalRestListContainer>
      {restaurantList.map((item) => (
        <SearchTotalRestItem
          key={item.id}
          id={item.id}
          name={item.name}
          imgUrls={item.imgUrls}
          category={item.category}
          location={item.location}
          rating={item.rating}
          operatingHour={item.operatingHour}
          averagePrice={item.averagePrice}
          isSaved={item.isSaved}
          reservation={item.reservation}
        />
      ))}
    </SearchTotalRestListContainer>
  );
};

const SearchTotalRestListContainer = styled.div`
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  gap: 3px;

  overflow-y: auto;
  scrollbar-width: none;
`;

export default SearchTotalRestList;
