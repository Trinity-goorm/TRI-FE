import * as style from './style/SearchTotal.js';
import { useState, useEffect, useRef, useCallback } from 'react';
import TotalRestList from './list/TotalRestList';
import SortModal from '../modal/SortModal';
import LoadingBar from '../loadingBar/LoadingBar';
import LoadingMoreBar from '../loadingBar/LoadingMoreBar';
import NoResultsFound from './NoResultsFound';
import ProfilerTableLogWrapper from './ProfilerTableLogWrapper.jsx';

const type = {
  highest_rating: '별점순',
  highest_average_price: '가격 높은순',
  lowest_average_price: '가격 낮은순',
};

const ITEM_HEIGHT = 310;
const NODE_PADDING = 1;

const SearchTotal = ({
  fetchDataFn,
  searchValue,
  navPath,
  backPath,
  displayText,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortType, setSortType] = useState('highest_rating');
  const [restaurantList, setRestaurantList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // 가상 스크롤
  const [scrollState, setScrollState] = useState({
    visibleList: [],
    offsetY: 0,
  });
  const isThrottle = useRef(false);

  const updateVisibleItemsWithList = useCallback((list) => {
    const totalItems = list.length;
    let startNode = Math.floor(window.scrollY / ITEM_HEIGHT) - NODE_PADDING;
    startNode = Math.max(0, startNode);

    let visibleNodesCount =
      Math.ceil(window.innerHeight / ITEM_HEIGHT) + 2 * NODE_PADDING;
    visibleNodesCount = Math.min(visibleNodesCount, totalItems - startNode);

    const visibleChildren = list.slice(
      startNode,
      startNode + visibleNodesCount
    );
    const offsetY = startNode * ITEM_HEIGHT;

    setScrollState((prevState) => {
      const isVisibleListSame =
        prevState.visibleList.length === visibleChildren.length &&
        prevState.visibleList.every((item, i) => item === visibleChildren[i]);
      const isOffsetYSame = prevState.offsetY === offsetY;

      if (isVisibleListSame && isOffsetYSame) return prevState;
      return { visibleList: visibleChildren, offsetY };
    });
  }, []);

  const updateVisibleItems = () => updateVisibleItemsWithList(restaurantList);

  useEffect(() => {
    const handleScroll = () => {
      if (isThrottle.current) return;

      isThrottle.current = true;
      setTimeout(() => {
        isThrottle.current = false;
        updateVisibleItems();
      }, 150);

      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.offsetHeight
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [restaurantList]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetchDataFn(searchValue, page, sortType);
        const newList =
          page === 1 ? response : [...restaurantList, ...response];
        setRestaurantList(newList);
        updateVisibleItemsWithList(newList);

        if (response.length < 30) {
          setLoading(null);
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error('💀데이터 로드 실패', error);
      }
    };

    if (loading !== null) {
      fetchData();
    }
  }, [page, sortType]);

  const clickSortHandler = (type) => {
    setSortType(type);
    setIsModalOpen(false);
    setPage(1);
  };

  return (
    <>
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

      <style.SortButton onClick={() => setIsModalOpen(true)}>
        {type[sortType]}
        <style.ArrowDownIcon className='material-icons'>
          keyboard_arrow_down
        </style.ArrowDownIcon>
      </style.SortButton>
      <SortModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        sortType={sortType}
        clickSortHandler={clickSortHandler}
      />

      {loading && page === 1 && <LoadingBar />}
      {!loading && restaurantList.length === 0 && <NoResultsFound />}
      {!loading && restaurantList.length > 0 && (
        <style.RestListWrapper
          $listSize={restaurantList?.length}
          $itemHeight={ITEM_HEIGHT}
          $isLodingMore={false}
        >
          <TotalRestList
            restaurantList={scrollState.visibleList}
            offsetY={scrollState.offsetY}
          />
        </style.RestListWrapper>
      )}
      {loading && restaurantList.length > 0 && (
        <>
          <style.RestListWrapper
            $listSize={restaurantList?.length}
            $itemHeight={ITEM_HEIGHT}
            $isLodingMore={true}
          >
            <TotalRestList
              restaurantList={scrollState.visibleList}
              offsetY={scrollState.offsetY}
            />
          </style.RestListWrapper>
          <LoadingMoreBar />
        </>
      )}
    </>
  );
};

export default SearchTotal;
