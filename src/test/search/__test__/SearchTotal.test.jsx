/*
테스트 목표
1. 초기 렌더링 확인.
2. 로딩 상태와 LoadingBar 렌더링.
3. API 호출과 데이터 렌더링.
4. 정렬 변경과 UI/API 반영.
5. 무한 스크롤 동작.
6. 결과 없음 시 NoResultsFound 렌더링.
7. 내비게이션 동작(backPath와 navPath 분기)
*/

vi.mock('../../../components/loadingBar/LoadingBar', () => ({
  default: () => <div data-testid='loading-bar'>Loading</div>, // 모듈을 대체할 객체를 반환하는 함수
}));

vi.mock('../../../components/loadingBar/LoadingMoreBar', () => ({
  default: () => <div data-testid='loading-more-bar'>Loading More</div>,
}));

vi.mock('../../../components/search/NoResultsFound', () => ({
  default: () => <div data-testid='no-results'>No Result</div>,
}));

vi.mock('../../../components/search/list/TotalRestList', () => ({
  default: ({ restaurantList }) => (
    <div data-testid='total-rest-list'>
      {restaurantList.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  ),
}));

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import SearchTotal from '../../../components/search/SearchTotal';
import { describe, beforeEach, vi, expect } from 'vitest';
import { navigateFn } from '../../../../setupTests';

// screen.debug();
// describe : 관련 테스트를 묶는 블록
describe('SearchTotal 컴포넌트 유닛 테스트', () => {
  const mockFetchData = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    mockFetchData.mockReset();
  });

  test('초기 렌더링 시 검색어와 정렬 버튼이 표시된다', async () => {
    mockFetchData.mockResolvedValue([]);

    // 가상 DOM에 렌더링
    render(
      <SearchTotal
        fetchDataFn={mockFetchData}
        searchValue='1'
        navPath={() => useNavigate('/search')}
        backPath={() => useNavigate('/')}
        displayText='찾고 있는 맛집이 있나요?'
      />
    );

    // getByText: 특정 텍스트를 가진 요소를 DOM에서 반드시 찾아서 반환, 없으면 에러 발생
    // queryByText: 특정 텍스를 가진 요소를 DOM에서 찾아 반환하지만, 없어도 에러 발생X null 반환
    expect(screen.getByText('찾고 있는 맛집이 있나요?')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '별점순' })).toBeInTheDocument();
    expect(screen.getByText('정렬')).not.toBeVisible();
  });

  // 로딩 상태 테스트
  test('loading이 참이고 page가 1일 때 로딩바가 렌더링된다', async () => {
    mockFetchData.mockImplementation(
      () => new Promise((resolve) => setTimeout(() => resolve([]), 100))
    );

    render(
      <SearchTotal
        fetchDataFn={mockFetchData}
        searchValue='1'
        navPath={() => navigateFn('/search')}
        backPath={() => navigateFn('/')}
        displayText='찾고 있는 맛집이 있나요?'
      />
    );

    const loadingBar = await screen.findByTestId('loading-bar');
    expect(loadingBar).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByTestId('no-results')).toBeInTheDocument();
      expect(screen.queryByText('loading-bar')).not.toBeInTheDocument();
    });
  });

  test('fetchDataFn이 올바른 인자로 호출되고 데이터가 렌더링된다', async () => {
    const mockData = [{ id: 1, name: 'Restaurant 1' }];
    mockFetchData.mockResolvedValue(mockData);

    render(
      <SearchTotal
        fetchDataFn={mockFetchData}
        searchValue='1'
        navPath={() => navigateFn('/search')}
        backPath={() => navigateFn('/')}
        displayText='Test'
      />
    );

    await waitFor(() => {
      expect(mockFetchData).toHaveBeenCalledWith('1', 1, 'highest_rating');
      expect(screen.getByText('Restaurant 1')).toBeInTheDocument();
    });
  });

  test('정렬 버튼 클릭 시 SortModal이 열리고 sortType이 변경된다', async () => {
    mockFetchData.mockResolvedValue([]);

    render(
      <SearchTotal
        fetchDataFn={mockFetchData}
        searchValue='1'
        navPath={() => navigateFn('/search')}
        backPath={() => navigateFn('/')}
        displayText='Test'
      />
    );

    fireEvent.click(screen.getByRole('button', { name: '별점순' }));
    expect(screen.getByText('정렬')).toBeVisible();

    fireEvent.click(screen.getByText('가격 높은순'));
    await waitFor(() => {
      expect(screen.getByRole('button', { name: '가격 높은순' }));
      expect(screen.getByText('정렬')).not.toBeVisible();
      expect(mockFetchData).toHaveBeenCalledWith(
        '1',
        1,
        'highest_average_price'
      );
    });
  });

  test('스크롤 시 page가 증가하고 데이터가 추가된다', async () => {
    const firstPageData = [{ id: 1, name: 'Restaurant 1' }];
    const secondPageData = [{ id: 2, name: 'Restaurant 2' }];

    // 3번째 호출부터는 undefined 반환
    mockFetchData
      .mockResolvedValueOnce(firstPageData)
      .mockResolvedValueOnce(secondPageData);

    render(
      <SearchTotal
        fetchDataFn={mockFetchData}
        searchValue='1'
        navPath={() => navigateFn('/search')}
        backPath={() => navigateFn('/')}
        displayText='Test'
      />
    );

    await waitFor(() => {
      expect(screen.getByText('Restaurant 1')).toBeInTheDocument();
    });

    fireEvent.scroll(window, {
      target: { scrollY: document.body.offsetHeight },
    });
    await waitFor(() => {
      expect(screen.getByTestId('loading-more-bar')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('Restaurant 2')).toBeInTheDocument();
      expect(mockFetchData).toHaveBeenCalledTimes(2);
      expect(mockFetchData).toHaveBeenCalledWith('1', 2, 'highest_rating');
    });
  });

  test('검색창이나 뒤로가기 클릭 시 navPath가 호출된다', async () => {
    mockFetchData.mockResolvedValue([]);

    render(
      <SearchTotal
        fetchDataFn={mockFetchData}
        searchValue='1'
        navPath={() => navigateFn('/search')}
        backPath={() => navigateFn('/')}
        displayText='Test'
      />
    );

    screen.debug();
    fireEvent.click(screen.getByText('Test'));
    expect(navigateFn).toHaveBeenCalledWith('/search');
  });
});
