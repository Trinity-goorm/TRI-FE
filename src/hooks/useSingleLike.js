import { useState } from 'react';
import PostLike from "../api/save/post/PostLike.js";
import DeleteLike from "../api/save/delete/DeleteLike.js";

const useSingleLike = (restaurantId = null, initialIsLiked = false) => {
    const [isLiked, setIsLiked] = useState(initialIsLiked);

    // 개별 좋아요 상태 토글
    const toggleLike = async (restaurantId) => {
        try {
            if (isLiked) {
                await DeleteLike(restaurantId);
                console.log(`💔 찜 해제: ${restaurantId}`);
            } else {
                await PostLike(restaurantId);
                console.log(`💖 찜 추가: ${restaurantId}`);
            }
            setIsLiked((prev) => !prev);
        } catch (err) {
            console.error("❌ 좋아요 토글 실패", err);
        }
    };

    return { isLiked,toggleLike };
};

export default useSingleLike;