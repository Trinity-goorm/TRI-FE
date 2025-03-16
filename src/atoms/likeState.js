import { atom } from "recoil";

// 찜한 리스트 전체 (사용자 전체 좋아요 리스트)
export const likeListState = atom({
    key: "likeListState",
    default: [],
});

// 특정 음식점의 좋아요 카운트 상태
export const likeState = atom({
    key: "likeState",
    default: {},
});

// 특정 음식점의 좋아요 상태 (저장 여부)
export const isSavedState = atom({
    key: "isSavedState",
    default: {},
});