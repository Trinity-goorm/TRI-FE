import { useNavigate, useSearchParams } from 'react-router-dom';
import SearchTotal from '../../components/search/SearchTotal';
import { useGetKeyRestaurant } from '../../api/queries/restaurantQueries';

const SearchKeywordTotal = () => {
  const nav = useNavigate();
  const [searchParam] = useSearchParams();
  const keyword = searchParam.get('keyword');

  return (
    <SearchTotal
      fetchQueryFn={useGetKeyRestaurant}
      searchValue={keyword}
      navPath={() => nav(`/search?keyword=${keyword}`)}
      displayText={keyword === '' ? '찾고 있는 맛집이 있나요?' : keyword}
    />
  );
};

export default SearchKeywordTotal;
