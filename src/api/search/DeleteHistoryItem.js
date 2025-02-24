import requestHandler from "../requestHandler";

const DeleteHistoryItem = (userId, historyId) => {
  return requestHandler({
    method: "DELETE",
    endpoint: `/search/history/${userId}/${historyId}`,
    successMessage: "유저 검색 히스토리 삭제 성공",
    errorMessage: "유저 검색 히스토리 삭제 실패",
  });
};

export default DeleteHistoryItem;
