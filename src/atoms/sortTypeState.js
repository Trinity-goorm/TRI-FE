import { atom } from 'recoil';

export const sortTypeState = atom({
  key: 'sortTypeState',
  default: 'highest_rating',
});
