import requestHandler from '../../requestHandler.js';

const DeleteLike = async (restaurantId) => {
  return requestHandler({
    method: 'DELETE',
    endpoint: `/restaurants/like/${restaurantId}`,
    successMessage: '찜하기 취소 성공',
    errorMessage: '찜하기 취소 실패',
  });
};

export default DeleteLike;
