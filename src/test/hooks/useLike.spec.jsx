import {renderHook, act, waitFor} from '@testing-library/react';
import  { RecoilRoot } from 'recoil';
import { describe, it, expect, vi } from "vitest";
import useLike from "../../hooks/useLike";
import { likeListState } from "../../atoms/likeListState.js";
import GetLikeRestaurants from "../../api/save/get/GetLikeRestaurants.js";
import PostLike from "../../api/save/post/PostLike.js";
import DeleteLike from "../../api/save/delete/DeleteLike.js";

vi.mock("../../api/save/get/GetLikeRestaurants.js");
vi.mock("../../api/save/post/PostLike.js");
vi.mock("../../api/save/delete/DeleteLike.js");


describe('userLike', () => {

    beforeEach(() => {
        vi.clearAllMocks();
    });


    it('찜한 리스트를 가져오고 restaurantId만 추출해서 Set으로 잘 만드는지 확인 ',
        async () => {
            const mockResponse =  [
                {
                    "restaurantId": 1,
                    "name": "한식당",
                    "imageUrls": [
                        "https://catchping.com/image3.jpg"
                    ],
                    "location": "서울 강남구",
                    "category": "한식",
                    "rating": 4.5,
                    "averagePrice": 12000
                },
                {
                    "restaurantId": 2,
                    "name": "중식당",
                    "imageUrls": [
                        "https://catchping.com/image3.jpg"
                    ],
                    "location": "서울 강남구",
                    "category": "한식",
                    "rating": 3.0,
                    "averagePrice": 22000
                },
                {
                    "restaurantId": 3,
                    "name": "하이하이",
                    "imageUrls": [
                        "https://catchping.com/image3.jpg"
                    ],
                    "location": "서울 송파구",
                    "category": "양식",
                    "rating": 3.5,
                    "averagePrice": 112000
                },

            ];
            GetLikeRestaurants.mockResolvedValue(mockResponse);
            const { result } = renderHook(() => useLike(1), {wrapper: RecoilRoot});

            await act(async () => {
                await result.current.fetchLikeRestaurants();
            });

            const restaurantIds = new Set(mockResponse.map((item) => item.restaurantId));
            const extractedIds = new Set(result.current.likeList.map((item) => item.restaurantId));

            console.log("💡 추출된 restaurantId: ", extractedIds);
            console.log("✅ 예상되는 restaurantId: ", restaurantIds);

            expect(extractedIds).toEqual(restaurantIds);
        }
    );

    it('찜 취소를 실행',
        async () => {
            const firstmockLikeList = [
                {restaurantId: 1, name: "restaurant A"},
                {restaurantId: 2, name: "restaurant B"},
            ];
            const secondmockLikeList = [
                {restaurantId: 2, name: "restaurant B"},
            ]


            //Mock 설정
            GetLikeRestaurants.mockResolvedValueOnce(firstmockLikeList);
            DeleteLike.mockResolvedValueOnce({ message: "삭제 성공" });
            GetLikeRestaurants.mockResolvedValue(secondmockLikeList);

            const { result } = renderHook(() => useLike(1), {wrapper: RecoilRoot});

            //우선 초기 찜하기 리스트 가져오기
            await act(async () => {
                await result.current.fetchLikeRestaurants();
            });
            console.log("실행전!",result.current.likeList);

            //찜 실행 - 찜 취소
            await act(async () => {
                await result.current.handleLike(1);
            });
            console.log( "실행후!", result.current.likeList);

            await waitFor(()=>{
                expect(result.current.likeList.map((item) => item.restaurantId)).not.toContain(1);
                expect(result.current.likeList).toHaveLength(1);
            })
            console.log("찜하기 취소 성공!");


        });

    it('찜 하기를 실행',
        async () => {
            const firstmockLikeList = [
                {restaurantId: 1, name: "restaurant A"},
                {restaurantId: 2, name: "restaurant B"},
            ];

            const secondmockLikeList = [
                {restaurantId: 1, name: "restaurant A"},
                {restaurantId: 2, name: "restaurant B"},
                {restaurantId: 3, name: "restaurant C"},
            ];

            //Mocks
            GetLikeRestaurants.mockResolvedValueOnce(firstmockLikeList);
            PostLike.mockResolvedValueOnce({ message: "삭제 성공" });
            GetLikeRestaurants.mockResolvedValue(secondmockLikeList);

            const { result } = renderHook(() => useLike(1), {wrapper: RecoilRoot});

            await act(async () => {
                await result.current.fetchLikeRestaurants();
            });

            await act(async () => {
                await result.current.handleLike(3);
            });

            expect(result.current.likeList.map((item) => item.restaurantId)).toContain(3);
            expect(result.current.likeList).toHaveLength(3);
        })
})