import { render, screen, waitFor } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import RecommendComponent from '../../../pages/home/RecommendList.main.jsx';
import { describe, it, expect, vi } from 'vitest';
import useLike from '../../../hooks/useLike.js';
import GetRecommendList from '../../../api/recommend/get/GetRecommendList.js';
import {MemoryRouter} from "react-router-dom";

// 🔄 Mock 설정
vi.mock('../../../hooks/useLike');
vi.mock('../../../api/recommend/get/GetRecommendList.js');

describe('RecommendComponent', () => {
    it('추천 리스트를 잘 가져오는지 확인', async () => {
        const mockRecommendList = [
            { restaurantId: 1, name: 'Restaurant A', score: '4.0', location: "경기 성남시 분당구" },
            { restaurantId: 2, name: 'Restaurant B', score: '3.0', location: "경기 성남시 분당구" },
        ];
        const mockLikeList = [{ restaurantId: 1 }];

        useLike.mockReturnValue({
            likeList: mockLikeList,
            fetchLikeRestaurants: vi.fn(),
            handleLike: vi.fn(),
        });
        GetRecommendList.mockResolvedValueOnce(mockRecommendList);

        render(
            <MemoryRouter>
                <RecoilRoot>
                    <RecommendComponent />
                </RecoilRoot>
            </MemoryRouter>
        );
        console.log("✅ 컴포넌트 렌더링 완료");

        await waitFor(() => {
            const items = screen.getAllByText(/Restaurant/i);
            console.log("✅ recommendList가 업데이트된 후: ", items.length);
            expect(items.length).toBe(2);
        }, { timeout: 10000 });

        await waitFor(() => {
            const names = screen.getAllByText(/Restaurant/i);
            const locations = screen.getAllByText(/경기 성남시 분당구/i);

            expect(names.length).toBe(2);
            expect(locations.length).toBe(2);
        });


    }, 10000);  // 타임아웃 10초로 설정
});