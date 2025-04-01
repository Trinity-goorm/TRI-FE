import { atom } from 'recoil';

export const reservationState = atom({
    key: 'reservationState',
    default: {
        userId:'',
        reservationId:'',
        selectedDate: '',
        reservationTime: null,
        seatTypeId: null,
        seatType: null,
    }
});

