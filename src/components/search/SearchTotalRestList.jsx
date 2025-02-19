import styled from "styled-components";
import { useState, useEffect } from "react";
import SearchTotalRestItem from "./SearchTotalRestItem";
import SearchRestaurant from "../../assets/dummydata/SearchRestaurant";

const SearchTotalRestList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setPage((prevPage) => prevPage + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const fetchData = async () => {
    const response = await axios.post("http://localhost:8080", {
      page: page,
      limit: 30,
    });

    if (response.status === 200) {
      setData((prevData) => [...prevData, ...newData]);
    }
  };

  return (
    <SearchTotalRestListContainer>
      {SearchRestaurant.map((item) => (
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
