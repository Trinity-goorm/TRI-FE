import requestHandler from '../../requestHandler.js';

const GetUserReservations = (userId) => {

    return requestHandler (
        {
            method: 'GET',
            endpoint: `/users/reservations/${userId}`,
            successMessage: '사용자 예약 정보 가져오기 성공',
            errorMessage: '사용자 예약 정보 가져오기 실패',
        }
    );

}
export default GetUserReservations;