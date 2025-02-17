import styled from "styled-components";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import SearchTotalRestList from "../../components/search/SearchTotalRestList";

const SearchTotal = () => {
  const nav = useNavigate();
  const [searchParam] = useSearchParams();
  const keyword = searchParam.get("keyword");

  return (
    <>
      <SearchKeyword>
        <SearchKeywordContainer>
          <GoArrowLeft
            size={22}
            color="black"
            style={{ position: "absolute", left: "33px", curson: "pointer" }}
            onClick={() => nav("/")}
          />
          <Keyword>{keyword}</Keyword>
        </SearchKeywordContainer>
      </SearchKeyword>

      <SearchTotalRestList />
    </>
  );
};

const SearchKeyword = styled.div`
  position: "fixed";
  width: 480px;
  height: 70px;
  background-color: white;
`;

const SearchKeywordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: relative;
  height: 100%;
`;

const Keyword = styled.div`
  width: 90%;
  height: 52px;
  border-radius: 12px;
  font-size: 16px;
  box-sizing: border-box;
  padding: 0 15px 0 40px;
  border: 1px solid #d6d6d6;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export default SearchTotal;
