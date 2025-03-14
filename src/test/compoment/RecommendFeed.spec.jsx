import {fireEvent, render, screen} from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import RecommendFeed from '../../components/recommend/RecommendFeed.jsx';
import {MemoryRouter, Router, useNavigate} from 'react-router-dom';
import '../../../setupTests.js';

const mockNavigate = vi.fn();
const mockOnToggleLike = vi.fn();

describe('RecommendFeed', () => {

    beforeEach(() => {
        vi.clearAllMocks();
        useNavigate.mockReturnValue(mockNavigate);

    });

    const mockItem = {
        restaurantId: 1,
        name: 'Restaurant A',
        imageUrls: ['https://catchping.com/image1.jpg'],
        rating: '4.0',
        category: '한식',
        location: '경기 성남시 분당구 분당내곡로 155'
    };

    test('모든 정보가 렌더링되는지 확인', () => {
        render(
            <MemoryRouter>
                <RecommendFeed item={mockItem}  isLiked={false} onToggleLike={mockOnToggleLike} />
            </MemoryRouter>
        );

        expect(screen.getByText(/Restaurant/i)).toBeInTheDocument();
        expect(screen.getByText('4.0')).toBeInTheDocument();
        expect(screen.getByText(/경기 성남시 분당구/i)).toBeInTheDocument();

        const image = screen.getByRole('img');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', 'https://catchping.com/image1.jpg');
    });


    test("이미지 클릭 시 상세페이지로 잘 이동하는지 확인", () => {
        render(
            <MemoryRouter>
                <RecommendFeed item={mockItem} isLiked={false} onToggleLike={mockOnToggleLike} />
            </MemoryRouter>
        );

        const ImageContainer = screen.getByRole('img');
        fireEvent.click(ImageContainer);
        expect(mockNavigate).toHaveBeenCalledWith('detail/1');
    });

    test("좋아요 버튼 클릭 시 이벤트가 잘 호출되는지 확인", () => {
        render(
            <MemoryRouter>
                <RecommendFeed item={mockItem} isLiked={false} onToggleLike={mockOnToggleLike} />
            </MemoryRouter>
        );
        const likeButton = screen.getByRole('button');
        fireEvent.click(likeButton);
        expect(mockOnToggleLike).toHaveBeenCalled();
    })



})