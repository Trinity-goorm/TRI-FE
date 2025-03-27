// src/context/LikeContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import GetLikeRestaurants from "../api/save/get/GetLikeRestaurants.js";
import PostLike from "../api/save/post/PostLike.js";
import DeleteLike from "../api/save/delete/DeleteLike.js";

const LikeContext = createContext();

export const LikeProvider = ({ restaurantId, initialWishCount, children }) => {
    const [likeCount, setLikeCount] = useState(initialWishCount);
    const [isSaved, setIsSaved] = useState(false);
    const [likeList, setLikeList] = useState([]);

    useEffect(() => {
        const fetchLikeRestaurants = async () => {
            try {
                const response = await GetLikeRestaurants();
                setLikeList(response);
                const isLiked = response.some(
                    (item) => item.restaurantId === Number(restaurantId)
                );
                setIsSaved(isLiked);
            } catch (err) {
                console.error("💀 찜한 리스트 가져오기 실패", err);
            }
        };

        fetchLikeRestaurants();
    }, [restaurantId]);

    const handleLike = async () => {
        try {
            const likeSet = new Set(likeList.map((item) => item.restaurantId));
            let updatedWishCount = likeCount;

            if (likeSet.has(Number(restaurantId))) {
                await DeleteLike(restaurantId);
                setLikeList((prev) =>
                    prev.filter((item) => item.restaurantId !== Number(restaurantId))
                );
                updatedWishCount -= 1;
                setIsSaved(false);
            } else {
                await PostLike(restaurantId);
                setLikeList((prev) => [
                    ...prev,
                    { restaurantId: Number(restaurantId) },
                ]);
                updatedWishCount += 1;
                setIsSaved(true);
            }

            setLikeCount(updatedWishCount);
        } catch (err) {
            console.error("👎 좋아요 처리 실패", err);
        }
    };

    return (
        <LikeContext.Provider
            value={{ likeCount, isSaved, handleLike }}
        >
            {children}
        </LikeContext.Provider>
    );
};

// 커스텀 훅
export const useLikeContext = () => useContext(LikeContext);