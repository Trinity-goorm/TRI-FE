import styled from "styled-components";

const SearchTotal = () => {
  return (
    <SearchBarWrapper>
      <SearchInput placeholder="발렌타인 맛집을 찾고 있나요?" />
    </SearchBarWrapper>
  );
};

const SearchBarWrapper = styled.div`
  background-color: green;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 83%;
  height: 45px;
  border-radius: 14px;
  font-size: 16px;
`;

export default SearchTotal;
