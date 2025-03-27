import { useNavigate, useSearchParams } from 'react-router-dom';
import SearchTotal from '../../components/search/SearchTotal';
import { useGetCatRestaurant } from '../../api/queries/restaurantQueries';

const SearchCategoryTotal = () => {
  const nav = useNavigate();
  const [searchParam] = useSearchParams();
  const category = searchParam.get('categoryId');

  return (
    <SearchTotal
      fetchQueryFn={useGetCatRestaurant}
      searchValue={category}
      navPath={() => nav('/search')}
      backPath={() => nav('/')}
      displayText='찾고 있는 맛집이 있나요?'
    />
  );
};

export default SearchCategoryTotal;
