import * as style from "./style/RecommendComponent.main.js";
import { useState, useEffect } from "react";
import RecommendFeed from "../../components/recommend/RecommendFeed.jsx";
import RecommendedList from "../../assets/dummydata/RecommendedList.js";
//API
import GetLikeRestaurants from "../../api/save/get/GetLikeRestaurants.js";
import PostLike from "../../api/save/post/PostLike.js";
import DeleteLike from "../../api/save/delete/DeleteLike.js";


const RecommendComponent = () => {

    const userId = localStorage.getItem("userId");
    const [likeList, setLikeList] = useState([]);


    const fetchLikeRestaurants = async () => {
        try{
            const response = await GetLikeRestaurants(userId);
            console.log("⭐️찜한 리스트 가져오기 성공",response);
            setLikeList(response);
            localStorage.setItem("likeList", JSON.stringify(likeList));

        }catch(e){
            console.error("💀찜한 리스트 가져오기 실패",e);
        }
    };
    const likeSet = new Set( likeList?.map((item) => item.restaurantId));

    useEffect(() => {
        fetchLikeRestaurants();

    },[userId]);

    useEffect(() => {
        if (likeList.length > 0) {
            const likeSset = new Set(likeList.map((item) => item.restaurantId));
            console.log(likeSet);
            localStorage.setItem("likeList", JSON.stringify(Array.from(likeSet)));
        }
    },[likeList]);


    const handleLike = async (restaurantId) => {
        try{
            if (likeSet.has(restaurantId)) {
                await DeleteLike(userId,restaurantId);
                fetchLikeRestaurants();
                setLikeList((prev) => prev.filter((item) => item.restaurantId !== restaurantId));
                console.log("👍 좋아요 취소 성공");
            }else {
                await PostLike(userId, restaurantId);
                fetchLikeRestaurants();
                setLikeList((prev) => [...prev, restaurantId]);
                console.log("👍 좋아요 성공");


            }

        }catch(e){
            console.log("👎좋아요 실패",error);
        }
    }


    return (
        <style.TotalContainer>
            <style.TitleContainer>
                <style.Title>
                   ✨ {"한주리"} 님이 좋아할 매장 ✨
                    <style.WatchAll>전체보기 {">"}</style.WatchAll>

                </style.Title>
                <style.TitleExplain>마음에 들 만한 곳을 모아봤어요!</style.TitleExplain>
            </style.TitleContainer>
            <style.ContentSlider>
                {RecommendedList.map((item, index) => (
                    <RecommendFeed
                        item={item} key={index}
                        isLiked={likeSet.has(item.id)}
                    onToggleLike={()=>handleLike(item.id)}/>
                ))}
            </style.ContentSlider>
        </style.TotalContainer>
    )
}
export default RecommendComponent;