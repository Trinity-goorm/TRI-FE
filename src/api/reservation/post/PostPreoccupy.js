import requestHandler from "../../requestHandler.js";

const PostPreoccupy = async (reservation) => {

    return requestHandler({
        method: 'POST',
        endpoint: "/reservations/preoccupy",
        data: reservation,
        successMessage: "선점 성공",
        errorMessage:"선점 실패"
    })
}

export default PostPreoccupy;