import styled from "styled-components";
import { GoArrowLeft } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import SearchTotalRestList from "../../components/search/SearchTotalRestList";
import CategoryTotalRestList from "../../components/search/CategoryTotalRestList";
import SortModal from "../../components/search/SortModal";

const type = {
  highest_rating: "별점순",
  highest_price: "가격 높은순",
  lowest_price: "가격 낮은순",
};

// sort type: highest_rating / highest_price / lowest_price
const SearchTotal = () => {
  const nav = useNavigate();
  const [searchParam] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortType, setSortType] = useState("highest_rating");

  // 쿼리파라미터
  const category = searchParam.get("category") ?? null;
  const keyword = searchParam.get("keyword") ?? null;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const clickSortHandler = (type) => {
    setSortType(type);
    setIsModalOpen(false);
  };

  return (
    <>
      <SearchKeyword onClick={() => nav(`/search?query=${keyword ?? ""}`)}>
        <SearchKeywordContainer>
          <GoArrowLeft
            size={22}
            color="black"
            style={{ position: "absolute", left: "33px", curson: "pointer" }}
            onClick={(e) => {
              e.stopPropagation();
              nav(-1);
            }}
          />
          <Keyword $isExist={keyword !== null}>
            {keyword ?? "찾고 있는 맛집이 있나요?"}
          </Keyword>
        </SearchKeywordContainer>
      </SearchKeyword>

      {category === null ? (
        <>
          <SortButton onClick={openModal}>
            {type[sortType]}
            <MdKeyboardArrowDown size={18} style={{ marginRight: "-5" }} />
          </SortButton>
          <SortModal
            isOpen={isModalOpen}
            closeModal={closeModal}
            sortType={sortType}
            clickSortHandler={clickSortHandler}
          />
        </>
      ) : null}

      {category === null ? (
        <SearchTotalRestList keyword={keyword} sortType={sortType} />
      ) : (
        <CategoryTotalRestList category={category} />
      )}
    </>
  );
};

const SearchKeyword = styled.div`
  position: fixed;
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
  color: ${({ $isExist }) => ($isExist ? "none" : "#b3b3b3")};
`;

const SortButton = styled.button`
  background-color: white;
  border: 1px solid #d6d6d6;
  border-radius: 20px;
  padding: 9px 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  margin: 75px 0px 0px 20px;
`;

export default SearchTotal;
