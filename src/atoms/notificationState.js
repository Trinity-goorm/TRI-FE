import { atom } from "recoil";

export const notificationState = atom({
  key: "notificationState",
  default: {
    isModalOpen: false,
    title: "",
    body: "",
    redirectUrl: "",
  },
});
