import requestHandler from "../../requestHandler.js";

const PostVacancySeat = async (seatId, userId) => {
    return requestHandler({
        method: "POST",
        endpoint: `/notifications/seats/subscribe?seatId=${seatId}&userId=${userId}`,
    })
};

export default PostVacancySeat;