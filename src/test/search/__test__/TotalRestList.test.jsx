vi.mock('../../../components/search/item/TotalRestItem', () => ({
  default: vi.fn(({ id, name, category }) => (
    <div data-testid={`total-rest-item-${id}`}>
      {name} - {category}
    </div>
  )),
}));

import { beforeEach, describe } from 'vitest';
import { screen, render } from '@testing-library/react';
import TotalRestList from '../../../components/search/list/TotalRestList';

/*
테스트 목표
1. 초기 렌더링 확인
*/

describe('TotalRestList 컴포넌트 유닛 테스트', () => {
  beforeEach(() => {
    vi.clearAllMocks(); //  호출 기록만 초기화, 구현과 모킹 상태는 유지
  });

  test('초기 렌더링 시 TotalRestItem에 인자가 전달되며 렌더링된다', () => {
    const mockRestaurantList = [
      { restaurantId: '1', name: 'Restaurant A', category: 'Italian' },
      { restaurantId: '2', name: 'Restaurant B', category: 'Korean' },
    ];

    render(<TotalRestList restaurantList={mockRestaurantList} />);

    const items = screen.getAllByTestId(/total-rest-item-/); // 정규식으로 동적 testid 매칭
    expect(items).toHaveLength(mockRestaurantList.length);

    items.forEach((item, index) => {
      expect(item).toBeInTheDocument();
      expect(item).toHaveTextContent(
        `${mockRestaurantList[index].name} - ${mockRestaurantList[index].category}`
      );
    });
  });
});
