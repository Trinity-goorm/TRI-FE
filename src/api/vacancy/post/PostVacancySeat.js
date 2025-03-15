import requestHandler from "../../requestHandler.js";

const PostVacancySeat = async (seatId) => {
  return requestHandler({
    method: "POST",
    endpoint: `/notifications/seats/subscribe?seatId=${seatId}`,
  });
};

export default PostVacancySeat;
