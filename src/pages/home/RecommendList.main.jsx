import * as style from './style/RecommendList.main.js';
import { useState, useEffect } from 'react';
import RecommendFeed from '../../components/recommend/RecommendFeed.jsx';
import GetRecommendList from '../../api/recommend/get/GetRecommendList.js';
// recoil
import { userState } from '../../atoms/userState.js';
import { useRecoilValue } from 'recoil';
// 커스텀 훅
import useLike from '../../hooks/useLike.js';

const RecommendComponent = () => {
  const user = useRecoilValue(userState);
  const userId = user.userId;
  const [recommendList, setRecommendList] = useState(null);
  const { likeList, fetchLikeRestaurants, handleLike } = useLike(userId);

  // 추천 리스트 불러오기
  const fetchRecommendList = async () => {
    try {
      const response = await GetRecommendList(userId);
      console.log('👀 추천 리스트 가져오기 성공', response);
      setRecommendList(response);
      console.log('✅ 추천 리스트 상태 업데이트 완료:', response);
    } catch (e) {
      console.error('💀추천 리스트 가져오기 실패', e);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchRecommendList();
      await fetchLikeRestaurants();
    })();
  }, [userId]);

  return (
    <style.TotalContainer>
      <style.TitleContainer>
        <style.Title>
          ✨ {recommendList ? recommendList[0].userName : null} 님이 좋아할 매장
          ✨
        </style.Title>
        <style.TitleExplain>마음에 들 만한 곳을 모아봤어요!</style.TitleExplain>
      </style.TitleContainer>
      <style.ContentSlider>
        {recommendList?.map((item, index) => (
          <RecommendFeed
            item={item}
            key={index}
            isLiked={likeList.some(
              (each) => each.restaurantId === item.restaurantId
            )}
            onToggleLike={() => handleLike(item.restaurantId)}
          />
        ))}
      </style.ContentSlider>
    </style.TotalContainer>
  );
};
export default RecommendComponent;
