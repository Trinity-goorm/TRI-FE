import styled from "styled-components";
import RecommendedList from "../../assets/dummydata/RecommendedList";
import SearchRestItem from "./SearchRestItem";

const SearchRestList = ({ searchQuery }) => {
  return (
    <SearchRestListContainer>
      {RecommendedList.map((item) => (
        <SearchRestItem
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
          address={"서울특별시 영등포구 국제금융로 39 103동 2층"}
          searchQuery={searchQuery}
        />
      ))}
    </SearchRestListContainer>
  );
};

const SearchRestListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  padding: 10px 50px 15px 23px;
`;

export default SearchRestList;
