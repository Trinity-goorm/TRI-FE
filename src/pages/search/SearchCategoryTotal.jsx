import styled from "styled-components";
import { GoArrowLeft } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import TotalRestList from "../../components/search/list/TotalRestList";
import GetCategoryRestList from "../../api/search/GetCategoryRestList";
import SortModal from "../../components/modal/SortModal";
import LoadingBar from "../../components/loadingBar/LoadingBar";
import LoadingMoreBar from "../../components/loadingBar/LoadingMoreBar";

const type = {
  highest_rating: "별점순",
  highest_average_price: "가격 높은순",
  lowest_average_price: "가격 낮은순",
};

// sort type: highest_rating / highest_average_price / lowest_average_price
const SearchCategoryTotal = () => {
  const nav = useNavigate();
  const [searchParam] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortType, setSortType] = useState("highest_rating");
  const [restaurantList, setRestaurantList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // 쿼리파라미터
  const category = searchParam.get("categoryId");

  // 정렬 바꾸기
  const clickSortHandler = (type) => {
    setSortType(type);
    setIsModalOpen(false);
    setPage(1);
  };

  // 무한스크롤
  useEffect(() => {
    fetchCategoryData();
  }, [page, sortType]);

  useEffect(() => {
    if (loading) return;
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setPage((prevPage) => prevPage + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  // api 호출
  const fetchCategoryData = async () => {
    setLoading(true);
    try {
      const response = await GetCategoryRestList(category, page, sortType);

      setRestaurantList((prevList) =>
        page === 1 ? response : [...prevList, ...response]
      );
    } catch (error) {
      console.error("💀데이터 로드 실패", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchKeyword onClick={() => nav(`/search`)}>
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
          <Keyword>찾고 있는 맛집이 있나요?</Keyword>
        </SearchKeywordContainer>
      </SearchKeyword>

      <SortButton onClick={() => setIsModalOpen(true)}>
        {type[sortType]}
        <MdKeyboardArrowDown size={18} style={{ marginRight: "-5" }} />
      </SortButton>
      <SortModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        sortType={sortType}
        clickSortHandler={clickSortHandler}
      />

      {loading && page === 1 ? (
        <LoadingBar />
      ) : (
        <>
          <TotalRestList restaurantList={restaurantList} category={category} />
          {loading && page > 1 && <LoadingMoreBar />}
        </>
      )}
    </>
  );
};

const SearchKeyword = styled.div`
  position: fixed;
  top: 0;
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
  color: #b3b3b3;
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
  cursor: pointer;
`;

export default SearchCategoryTotal;
