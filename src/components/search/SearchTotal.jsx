import * as style from './style/SearchTotal.js';
import { useState, useEffect, useRef } from 'react';
import TotalRestList from './list/TotalRestList';
import LoadingBar from '../loadingBar/LoadingBar';
import LoadingMoreBar from '../loadingBar/LoadingMoreBar';
import NoResultsFound from './NoResultsFound';
import { useGetLikeRestId } from '../../api/queries/userLikeQueries.js';

const type = {
  highest_rating: '별점순',
  highest_average_price: '가격 높은순',
  lowest_average_price: '가격 낮은순',
};

const ITEM_HEIGHT = 335;
const NODE_PADDING = 1;

const SearchTotal = ({
  fetchQueryFn,
  searchValue,
  navPath,
  backPath,
  displayText,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortType, setSortType] = useState('highest_rating');
  const [SortModalComponent, setSortModalComponent] = useState(null);

  const { data: likeRestIds } = useGetLikeRestId();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    fetchQueryFn(searchValue, sortType);

  // 정렬 모달
  const handleMouseEnter = async () => {
    if (!SortModalComponent) {
      const { default: component } = await import('../modal/SortModal');
      setSortModalComponent(() => component);
    }
  };
  const clickSortHandler = (type) => {
    setSortType(type);
    setIsModalOpen(false);
  };

  // 가상 스크롤
  const [scrollState, setScrollState] = useState({
    visibleList: [],
    offsetY: 0,
  });
  const isThrottle = useRef(false);

  const updateVisibleItems = () => {
    const totalItems = data?.allData.length;
    let startNode = Math.floor(window.scrollY / ITEM_HEIGHT) - NODE_PADDING;
    startNode = Math.max(0, startNode);

    let visibleNodesCount =
      Math.ceil(window.innerHeight / ITEM_HEIGHT) + 2 * NODE_PADDING;
    visibleNodesCount = Math.min(visibleNodesCount, totalItems - startNode);

    const visibleChildren = data?.allData.slice(
      startNode,
      startNode + visibleNodesCount
    );
    const offsetY = startNode * ITEM_HEIGHT;

    setScrollState({ visibleList: visibleChildren, offsetY });
  };

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
  }, [isFetchingNextPage, hasNextPage, data]);

  return (
    <>
      {SortModalComponent && (
        <SortModalComponent
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          sortType={sortType}
          clickSortHandler={clickSortHandler}
        />
      )}

      <style.SearchKeyword onClick={navPath}>
        <style.SearchKeywordContainer>
          <style.ArrowBackIcon
            className='material-icons'
            onClick={(e) => {
              e.stopPropagation();

              if (backPath) {
                backPath();
              } else {
                navPath();
              }
            }}
          >
            arrow_back
          </style.ArrowBackIcon>
          <style.Keyword
            $isCategory={displayText === '찾고 있는 맛집이 있나요?'}
          >
            {displayText}
          </style.Keyword>
        </style.SearchKeywordContainer>
      </style.SearchKeyword>

      <style.SortButton
        onClick={() => setIsModalOpen(true)}
        onMouseEnter={handleMouseEnter}
      >
        {type[sortType]}
        <style.ArrowDownIcon className='material-icons'>
          keyboard_arrow_down
        </style.ArrowDownIcon>
      </style.SortButton>

      {isLoading && <LoadingBar />}
      {!isLoading && data?.allData.length === 0 && <NoResultsFound />}
      {!isLoading && data?.allData.length > 0 && (
        <style.RestListWrapper
          $listSize={data?.allData.length}
          $itemHeight={ITEM_HEIGHT}
        >
          <TotalRestList
            restaurantList={scrollState.visibleList}
            offsetY={scrollState.offsetY}
            likeRestIds={likeRestIds}
          />
        </style.RestListWrapper>
      )}
      {isFetchingNextPage && <LoadingMoreBar />}
    </>
  );
};

export default SearchTotal;
