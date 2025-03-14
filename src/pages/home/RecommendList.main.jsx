import * as style from "./style/RecommendList.main.js";
import { useState, useEffect, useMemo } from "react";
import RecommendFeed from "../../components/recommend/RecommendFeed.jsx";
import GetRecommendList from "../../api/recommend/get/GetRecommendList.js";
import useLike from "../../hooks/useLike.js";
import useSingleLike from "../../hooks/useSingleLike.js";

const RecommendComponent = () => {
  const [userName, setUserName] = useState("");
  const [recommendList, setRecommendList] = useState([]);

  // 추천 리스트 불러오기
  const fetchRecommendList = async () => {
    try {
      const response = await GetRecommendList();
      console.log("👀 추천 리스트 가져오기 성공", response);
      setRecommendList (response);
      console.log("✅ 추천 리스트 상태 업데이트 완료:", response);
      setUserName(response[0].userName);
    } catch (e) {
      console.error("💀추천 리스트 가져오기 실패", e);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchRecommendList();
    })();
  }, [userName]);

  return (
      <style.TotalContainer>
        <style.TitleContainer>
          <style.Title>
            ✨ {userName} 님이 좋아할 매장 ✨
          </style.Title>
          <style.TitleExplain>마음에 들 만한 곳을 모아봤어요!</style.TitleExplain>
        </style.TitleContainer>
        <style.ContentSlider>
          {recommendList?.map((item, index) => (
              <RecommendFeed
                  item={item}
                  key={index}
              />

          ))}
        </style.ContentSlider>
      </style.TotalContainer>
  );
};
export default RecommendComponent;