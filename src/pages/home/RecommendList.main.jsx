import * as style from './style/RecommendList.main.js';
import {useState, useEffect, useMemo, useRef} from 'react';
import RecommendFeed from '../../components/recommend/RecommendFeed.jsx';
import GetRecommendList from '../../api/recommend/get/GetRecommendList.js';
import ProfileComponent from "../../components/search/ProfilerTableLogWrapper.jsx";
import RecommendContentSlider from "../../components/recommend/RecommendContentSlider.jsx";

//hooks
import {useDraggable} from "../../hooks/useDraggable.js";

const RecommendComponent = () => {
  const [userName, setUserName] = useState('');
  const [recommendList, setRecommendList] = useState([]);

  const scrollRef = useRef(null);
  const { onMouseDown, onMouseMove, onMouseUp, onMouseLeave } = useDraggable(scrollRef);

  // 추천 리스트 불러오기
  const fetchRecommendList = async () => {
    try {
      const response = await GetRecommendList();
      console.log('👀 추천 리스트 가져오기 성공', response);
      setRecommendList(response);
      console.log('✅ 추천 리스트 상태 업데이트 완료:', response);
      setUserName(response[0].userName);
    } catch (e) {
      console.error('💀추천 리스트 가져오기 실패', e);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchRecommendList();
    })();
  }, [userName]);

  return (
      <ProfileComponent id="recommend-list">
        <style.TotalContainer
        >
          <style.TitleContainer>
            <style.Title>✨ {userName} 님이 좋아할 매장 입니다! ✨</style.Title>
            <style.TitleExplain>마음에 들 만한 곳을 모아봤어요!</style.TitleExplain>
          </style.TitleContainer>
          <RecommendContentSlider recommendList={recommendList} />
        </style.TotalContainer>
      </ProfileComponent>
  );
};
export default RecommendComponent;
