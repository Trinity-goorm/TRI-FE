import styled from "styled-components";
import { useState, useEffect } from "react";
import CategoryTotalRestItem from "./CategoryTotalRestItem";
import GetCategoryRestList from "../../api/search/GetCategoryRestList.js";

const CategoryTotalRestList = ({ category }) => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchCategoryData();
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

  const fetchCategoryData = async () => {
    try {
      const response = await GetCategoryRestList(
        category,
        localStorage.getItem("userId"),
        page
      );

      setRestaurantList((prevList) => [...prevList, ...response]);
    } catch (error) {
      console.error("💀데이터 로드 실패", error);
    }
  };

  return (
    <CategoryTotalRestListContainer>
      {restaurantList?.map((item, index) => (
        <CategoryTotalRestItem
          key={`${item.restaurantId}-${index}`}
          id={item.restaurantId}
          name={item.name}
          imgUrls={item.imageUrl}
          category={item.category}
          location={item.location}
          rating={item.rating}
          operatingHour={item.operatingHours}
          averagePrice={item.averagePrice}
          isSaved={item.wishlisted}
          reservation={item.reservation}
        />
      ))}
    </CategoryTotalRestListContainer>
  );
};

const CategoryTotalRestListContainer = styled.div`
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-top: 75px;

  overflow-y: auto;
  scrollbar-width: none;
`;

export default CategoryTotalRestList;
