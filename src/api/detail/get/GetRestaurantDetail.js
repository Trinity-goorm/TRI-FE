import requestHandler from "../../requestHandler.js";

const GetRestaurantDetail = async (restaurantId) => {
    return requestHandler({
        method: "GET",
        endpoint: `/restaurants/${restaurantId}`,
        successMessage: '식당 상세 정보 가져오기 성공',
        errorMessage: '식당 상세 정보 가져오기 실패'
    });
}

export default GetRestaurantDetail;