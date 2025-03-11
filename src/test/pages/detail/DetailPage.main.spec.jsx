import {fireEvent, render, screen, waitFor, within} from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { describe, it, expect, vi } from 'vitest';
import DetailPage from '../../../pages/detail/DetailPage.main.jsx';
import { MemoryRouter } from 'react-router-dom';
import GetRestaurantDetail from '../../../api/detail/get/GetRestaurantDetail.js';
import MenuComponent from '../../../components/menu/MenuComponent.jsx';
import useLike from "../../../hooks/useLike.js";

vi.mock('../../../api/detail/get/GetRestaurantDetail.js');
vi.mock('../../../hooks/useLike.js');

describe('DetailPage', () => {

    beforeEach(() => {
        vi.clearAllMocks();
        useLike.mockReturnValue({
            fetchLikeRestaurants: vi.fn().mockResolvedValue([]),
            likeCount: 0,
            isSaved: false,
            handleLike: vi.fn(),
        });
    });

    it('식당 정보가 잘 불러와지고 렌더링 되는지 확인', async () => {
        // Mock 데이터
        const mockRestaurantDetail = {
            restaurantId: 1,
            name: '식당 이가네양꼬치 판교본점',
            imageUrls: [
                'https://catchping.com/image1.jpg',
                'https://catchping.com/image2.jpg',
            ],
            location: '경기 성남시 분당구 분당내곡로 155 KCC웰츠타워 104호',
            category: '중식',
            rating: 0,
            averagePrice: 15166,
            expandedDays: '월,화,수,목,금,토,일',
            timeRange: '12:00 ~ 24:00',
            facilities: ['WIFI', '동물출입', '주차', '휠체어사용', '놀이방', '흡연실'],
            cautions: ['예약가능', '배달불가', '포장가능'],
            menus: [
                { name: '대하구이', price: 13000 },
                { name: '탕수육', price: 21000 },
            ],
            wishCount: 0,
        };

        // API 호출을 Mocking
        GetRestaurantDetail.mockResolvedValue(mockRestaurantDetail);

        // 컴포넌트 렌더링
        render(
            <MemoryRouter initialEntries={['/detail/1']}>
                <RecoilRoot>
                    <DetailPage />
                </RecoilRoot>
            </MemoryRouter>
        );

        await waitFor(() => {
            const restaurantName = screen.getByTestId('restaurantName');
            expect(restaurantName).toHaveTextContent('식당 이가네양꼬치 판교본점');

            const images = screen.getAllByTestId("imgEach");
            expect(images.length).toBe(2);

            const restaurantCategory = screen.getByTestId('restaurantCategory');
            expect(restaurantCategory).toHaveTextContent('중식');

            const restaurantLocation = screen.getByTestId('restaurantLocation');
            expect(restaurantLocation).toHaveTextContent('경기 성남시 분당구 분당내곡로 155 KCC웰츠타워 104호');

            const restaurantMenus = screen.getAllByTestId('restaurantMenu');
            expect(restaurantMenus.length).toBe(2);
            expect(restaurantMenus[0]).toHaveTextContent('대하구이');
            expect(restaurantMenus[1]).toHaveTextContent('탕수육');
        });
    });

    it('예약하기 버튼 클릭시 모달이 잘 뜨는지 확인', async () => {

        render(
            <MemoryRouter>
                <RecoilRoot>
                    <DetailPage />
                </RecoilRoot>
            </MemoryRouter>
        );

        await waitFor(() => {
            const bottomBar = screen.getByTestId('bottomBar');
            expect(bottomBar).toBeInTheDocument();

            const reservationButton = within(bottomBar).getByTestId('reservationButton');
            expect(reservationButton).toBeInTheDocument();
            fireEvent.click(reservationButton);

            const reservationModal = screen.getByTestId('reservationModal');
            expect(reservationModal).toBeInTheDocument();
        });
    });


    it('상세페이지의 좋아요 버튼 작동하는지 확인', async () => {
        const mockRestaurantDetail = {
            restaurantId: 1,
            name: '식당 이가네양꼬치 판교본점',
            imageUrls: [
                'https://catchping.com/image1.jpg',
                'https://catchping.com/image2.jpg',
            ],
            location: '경기 성남시 분당구 분당내곡로 155 KCC웰츠타워 104호',
            category: '중식',
            rating: 0,
            averagePrice: 15166,
            expandedDays: '월,화,수,목,금,토,일',
            timeRange: '12:00 ~ 24:00',
            facilities: ['WIFI', '동물출입', '주차', '휠체어사용', '놀이방', '흡연실'],
            cautions: ['예약가능', '배달불가', '포장가능'],
            menus: [
                { name: '대하구이', price: 13000 },
                { name: '탕수육', price: 21000 },
            ],
            wishCount: 5,
        };

        GetRestaurantDetail.mockResolvedValue(mockRestaurantDetail);
        useLike.mockReturnValue({
            fetchLikeRestaurants: vi.fn().mockResolvedValue([]),
            likeCount: 5,
            isSaved: false,
            handleLike: vi.fn().mockImplementation(() => {
                // 상태를 바꿔주는 mock
                let liked = false;
                return () => {
                    liked = !liked;  // 좋아요 상태 토글
                    return {
                        fetchLikeRestaurants: vi.fn().mockResolvedValue([]),
                        likeCount: liked ? 5 : 6,  // 좋아요 토글 시 카운트 변경
                        isSaved: liked,
                        handleLike: vi.fn(),
                    };
                };
            })(),
        });
        render(
            <MemoryRouter initialEntries={['/detail/1']}>
                <RecoilRoot>
                    <DetailPage />
                </RecoilRoot>
            </MemoryRouter>
        );

        await waitFor(() => {
            const bottomBar = screen.getByTestId("bottomBar");
            expect(bottomBar).toBeInTheDocument();
        });

        const likeButton = within(screen.getByTestId("bottomBar")).getByTestId("likeButton");
        expect(likeButton).toBeInTheDocument();
        const likeCount = within(screen.getByTestId("bottomBar")).getByTestId("likeCount");
        expect(likeCount).toBeInTheDocument();

        expect(likeCount).toHaveTextContent("5");
        fireEvent.click(likeButton);
        console.log(likeCount)
        await waitFor(() => { expect(likeCount).toHaveTextContent("6"); });



    })

});