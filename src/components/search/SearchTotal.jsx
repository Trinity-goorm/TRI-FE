import styled from 'styled-components';
import { useState, useEffect, useRef, useCallback } from 'react';
import TotalRestList from './list/TotalRestList';
import LoadingBar from '../loadingBar/LoadingBar';
import LoadingMoreBar from '../loadingBar/LoadingMoreBar';
import NoResultsFound from './NoResultsFound';
import { sortTypeState } from '../../atoms/sortTypeState.js';
import { useRecoilValue } from 'recoil';
import { useGetLikeRestId } from '../../api/queries/userLikeQueries.js';

const ITEM_HEIGHT = 335;
const NODE_PADDING = 1;

const SearchTotal = ({ fetchQueryFn, searchValue }) => {
  const sortType = useRecoilValue(sortTypeState);
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    fetchQueryFn(searchValue, sortType);
  const { data: likeIds } = useGetLikeRestId();

  // 가상 스크롤
  const [visibleList, setVisibleList] = useState([]);
  const [offsetY, setOffsetY] = useState(0);
  const isThrottle = useRef(false);

  const updateVisibleItems = useCallback(() => {
    const totalItems = data?.allData.length;
    let newStartNode = Math.floor(window.scrollY / ITEM_HEIGHT) - NODE_PADDING;
    newStartNode = Math.max(0, newStartNode);

    let visibleNodesCount =
      Math.ceil(window.innerHeight / ITEM_HEIGHT) + 2 * NODE_PADDING;
    visibleNodesCount = Math.min(visibleNodesCount, totalItems - newStartNode);

    const visibleChildren = data?.allData.slice(
      newStartNode,
      newStartNode + visibleNodesCount
    );
    const offsetY = newStartNode * ITEM_HEIGHT;

    setOffsetY(offsetY);
    setVisibleList((prev) => {
      if (
        prev?.length === visibleChildren?.length &&
        prev?.every((item, index) => item === visibleChildren[index])
      ) {
        return prev;
      }
      return visibleChildren;
    });
  }, [data?.allData]);

  useEffect(() => {
    updateVisibleItems();

    const handleScroll = () => {
      if (isThrottle.current) return;

      isThrottle.current = true;
      setTimeout(() => {
        isThrottle.current = false;
        updateVisibleItems();
      }, 100);

      if (
        !isFetchingNextPage &&
        hasNextPage &&
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 150
      ) {
        fetchNextPage();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFetchingNextPage, hasNextPage, data?.allData]);

  return (
    <>
      {isLoading && <LoadingBar />}
      {!isLoading && data?.allData.length === 0 && <NoResultsFound />}
      {!isLoading && data?.allData.length > 0 && (
        <RestListWrapper
          $listSize={data?.allData.length}
          $itemHeight={ITEM_HEIGHT}
        >
          <TotalRestList
            restaurantList={visibleList}
            offsetY={offsetY}
            likeIds={likeIds}
          />
        </RestListWrapper>
      )}
      {isFetchingNextPage && <LoadingMoreBar />}
    </>
  );
};

export default SearchTotal;

const RestListWrapper = styled.div`
  height: ${({ $listSize, $itemHeight }) => {
    const calculatedHeight = $listSize * $itemHeight;
    return `${calculatedHeight}px`;
  }};
  margin-top: 110px;
`;
