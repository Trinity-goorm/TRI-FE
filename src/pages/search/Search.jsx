import styled from "styled-components";
import { GoArrowLeft } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { ImSpoonKnife } from "react-icons/im";
import { IoCloseCircle } from "react-icons/io5";
import RecommendFeed from "../../components/recommend/RecommendFeed";
import RecommendedList from "../../assets/dummydata/RecommendedList";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchRestList from "../../components/search/SearchRestList";

const category = [
  "중식",
  "일식",
  "브런치",
  "파스타",
  "이탈리안",
  "이자카야",
  "한식",
  "치킨",
  "스테이크",
  "고깃집",
  "다이닝바",
  "오마카세",
];

const Search = () => {
  const nav = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const threshold = 700;

      if (scrollTop > threshold) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    };

    window.addEventListener("scroll", handScroll);
    return () => window.removeEventListener("scroll", handScroll);
  }, []);

  const handleChangeQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <SearchBar $isFixed={isFixed}>
        <SearchBarContainer>
          <GoArrowLeft size={22} color="black" onClick={() => nav("/")} />
          <SearchInput
            placeholder="발렌타인 맛집을 찾고 있나요?"
            value={searchQuery}
            onChange={handleChangeQuery}
          ></SearchInput>
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
        </SearchBarContainer>
      </SearchBar>

      <SearchListContainer>
        {searchQuery === "" ? (
          <RecomFeedContainer>
            이런 레스토랑은 어때요?
            <ContentSlider>
              {RecommendedList.map((item, index) => (
                <RecommendFeed item={item} key={index} />
              ))}
            </ContentSlider>
          </RecomFeedContainer>
        ) : (
          <>
            <QueryContainer>
              <QueryWrapper>
                <FiSearch size={19} color="#b3b3b3" />
                <Query>{searchQuery}</Query>
              </QueryWrapper>
            </QueryContainer>
            <SearchRestList searchQuery={searchQuery} />
          </>
        )}
      </SearchListContainer>
    </>
  );
};

const SearchBar = styled.div`
  position: ${({ $isFixed }) => ($isFixed ? "fixed" : "static")};
  width: 480px;
  height: 65px;
  background-color: white;
`;

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: relative;
  height: 100%;
`;

const SearchInput = styled.input`
  width: 84%;
  height: 48px;
  border-radius: 12px;
  font-size: 16px;
  box-sizing: border-box;
  padding: 0 40px 0 15px;
  outline: none;
  border: 1px solid;

  &::placeholder {
    color: #bfbfbf;
  }
`;

const QueryContainer = styled.div`
  padding: 10px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;

const QueryWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const Query = styled.div`
  font-size: 15.5px;
  color: #808080;
`;

const SearchListContainer = styled.div`
  padding-top: 65px;
`;

const RecomFeedContainer = styled.div`
  font-size: 14px;
  font-weight: 650;
  padding: 20px 0px 20px 25px;
  color: #666;
`;

const ContentSlider = styled.div`
  transform: scale(0.8);
  transform-origin: top left;

  display: flex;
  flex-direction: row;
  overflow-x: auto;
  scroll-behavior: smooth;
  white-space: nowrap;
  width: calc(100% / 0.8);

  box-sizing: border-box;
  padding-top: 20px;
  padding-right: 20px;
  margin-left: -3px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Search;
