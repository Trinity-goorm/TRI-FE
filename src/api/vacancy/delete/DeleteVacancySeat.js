import requestHandler from '../../requestHandler.js';

const DeleteVacancySeat = async (seatId) => {

    return requestHandler({
        method: 'DELETE',
        endpoint:`/notifications/seats/cancel?seatNotificationId=${seatId}`,
        successMessage:"빈자리 알림 취소 성공",
        errorMessage: "빈자리 알림 취소 실패"
    })
}
export default DeleteVacancySeat;