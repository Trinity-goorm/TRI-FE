import requestHandler from "../../requestHandler.js";

const GetLikeRestaurants = async (userId) => {
    return requestHandler({
        method: "GET",
        endpoint: `/restaurants/like/${userId}`,
        successMessage: '찜한 리스트 가져오기 성공',
        errorMessage: '찜한 리스트 가져오기 실패'
    });
}

export default GetLikeRestaurants;