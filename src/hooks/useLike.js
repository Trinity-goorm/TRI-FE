
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { likeListState } from "../atoms/likeListState.js";
import GetLikeRestaurants from "../api/save/get/GetLikeRestaurants.js";
import PostLike from "../api/save/post/PostLike.js";
import DeleteLike from "../api/save/delete/DeleteLike.js";

const useLike = ( restaurantId, initialWishCount) => {
    const [likeList, setLikeList] = useRecoilState(likeListState);
    const [likeCount, setLikeCount] = useState(initialWishCount);
    const [isSaved, setIsSaved] = useState(false);

    // 🛠 좋아요 목록 불러오기
    const fetchLikeRestaurants = async () => {
        try {
            const response = await GetLikeRestaurants();
            setLikeList(response);
            if (restaurantId) {
                const isLiked = response.some((item) => item.restaurantId === Number(restaurantId));
                setIsSaved(isLiked);
            }
        } catch (err) {
            console.error("💀 찜한 리스트 가져오기 실패", err);
        }
    };

    // 🛠 좋아요 상태 토글
    const handleLike = async (restaurantId) => {
        try {
            const likeSet = new Set(likeList.map((item) => item.restaurantId));
            let updatedWishCount = likeCount;

            if (likeSet.has(Number(restaurantId))) {
                await DeleteLike(restaurantId);
                setLikeList((prev) => prev.filter((item) => item.restaurantId !== Number(restaurantId)));
                updatedWishCount -= 1;
                setIsSaved(false);
                console.log("👍 좋아요 취소 성공");
            } else {
                await PostLike(restaurantId);
                setLikeList((prev) => [...prev, { restaurantId: Number(restaurantId) }]);
                updatedWishCount += 1;
                setIsSaved(true);
                console.log("👍 좋아요 성공");
            }

            setLikeCount(updatedWishCount);
        } catch (err) {
            console.log("👎 상세페이지에서 좋아요 등록 실패", err);
        }
    };

    // 🛠 `useEffect`로 `restaurantId`가 변할 때마다 `likeList`와 동기화
    useEffect(() => {
        if (restaurantId && likeList.length > 0) {
            const isLiked = likeList.some((item) => item.restaurantId === Number(restaurantId));
            setIsSaved(isLiked);
        }
    }, [likeList, restaurantId]);

    // 🛠 `useEffect`로 `initialWishCount`가 변할 때 `likeCount` 설정
    useEffect(() => {
        if (initialWishCount > 0) {
            setLikeCount(initialWishCount);
        }
    }, [initialWishCount]);

    // 🛠 최초 렌더링 시 좋아요 목록 불러오기
    useEffect(() => {
        fetchLikeRestaurants();
    }, []);

    return { likeList, fetchLikeRestaurants, handleLike, likeCount, isSaved };
};

export default useLike;