import requestHandeler from "./requestHandler.js";

const GetAvailableSeat = async (restaurantId, selectDate) => {
    return requestHandeler({
        method: "GET",
        endpoint: `/api/seats/availability/day?restaurantId=${restaurantId}&selectedDate=${selectDate}`,
        successMessage: '가능한 예약 좌석 가져오기 성공',
        errorMessage: '가능한 예약 좌석 가져오기 실패'
    });
}

export default GetAvailableSeat;