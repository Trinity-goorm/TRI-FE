import * as style from "./style/Search.js";
import { GoArrowLeft } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";
import sushi from "../../assets/img/sushi.png";
import meat from "../../assets/img/meat.png";
import cake from "../../assets/img/cake.png";
import star from "../../assets/img/star.png";

// React
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

// Componenet
import RecommendFeed from "../../components/recommend/RecommendFeed";
import RecommendedList from "../../assets/dummydata/RecommendedList";
import HistoryList from "../../components/search/HistoryList";
import GetHistoryList from "../../api/search/GetHistoryList";
import RecommendCatItem from "../../components/search/RecommendCatItem";

const recomCatList = [
  {
    img: sushi,
    title: "일식",
    subTitle: "신선한",
    categoryId: 2,
  },
  {
    img: meat,
    title: "스테이크",
    subTitle: "육즙 가득한",
    categoryId: 9,
  },
  {
    img: cake,
    title: "브런치카페",
    subTitle: "여유로운",
    categoryId: 3,
  },
  {
    img: star,
    title: "별점 높은",
    subTitle: "인정받은",
    categoryId: 13, // 공백
  },
];

const Search = () => {
  const nav = useNavigate();
  const [searchParam] = useSearchParams();
  const query = searchParam.get("keyword");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const [histroyList, setHistoryList] = useState([]);

  const handleChangeQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    fetchHistoryData();
  }, []);

  const fetchHistoryData = async () => {
    try {
      const response = await GetHistoryList(localStorage.getItem("userId"));
      setHistoryList(response);
    } catch (error) {
      console.error("💀데이터 로드 실패", error);
    }
  };

  return (
    <style.SearchContainer>
      <style.SearchBar>
        <style.SearchBarContainer>
          <GoArrowLeft size={22} color="black" onClick={() => nav("/")} />
          <style.SearchInput
            placeholder="어떤 맛집을 찾으세요?"
            value={searchQuery}
            onChange={handleChangeQuery}
            onKeyDown={(e) => {
              if (searchQuery !== "" && e.key === "Enter") {
                nav(`/search/total?keyword=${searchQuery}`);
              }
            }}
          ></style.SearchInput>
          {searchQuery === "" ? null : (
            <IoCloseCircle
              size={18.5}
              color="#b3b3b3"
              style={{ position: "absolute", right: "40px" }}
              onClick={() => {
                setSearchQuery("");
              }}
            />
          )}
        </style.SearchBarContainer>
      </style.SearchBar>

      <style.HistoryContainer>
        <style.Comment>최근에 검색한</style.Comment>
        {histroyList.length === 0 ? (
          <style.HistoryNoResultComment>
            <FiSearch />
            최근 검색어가 없어요.
          </style.HistoryNoResultComment>
        ) : (
          <style.HistoryListWrapper>
            <HistoryList histroyList={histroyList} />
          </style.HistoryListWrapper>
        )}
      </style.HistoryContainer>

      <style.CategoryFeedContainer>
        <style.Comment>이런 종류는 어떠세요?</style.Comment>
        <style.RecomCatListWrapper>
          {recomCatList.map((item, index) => (
            <RecommendCatItem
              key={index}
              img={item.img}
              title={item.title}
              subTitle={item.subTitle}
              categoryId={item.categoryId}
            />
          ))}
        </style.RecomCatListWrapper>
      </style.CategoryFeedContainer>

      <style.RecomFeedContainer>
        <style.Comment>OOO 님을 위한 레스토랑</style.Comment>
        <style.ContentSlider>
          {RecommendedList.map((item, index) => (
            <RecommendFeed item={item} key={index} />
          ))}
        </style.ContentSlider>
      </style.RecomFeedContainer>
    </style.SearchContainer>
  );
};

export default Search;
