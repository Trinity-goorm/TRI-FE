import { useNavigate, useSearchParams } from 'react-router-dom';
import SearchTotal from '../../components/search/SearchTotal';
import { useGetCatRestaurant } from '../../api/queries/restaurantQueries';
import SearchTopBar from '../../components/search/SearchTopBar';

const SearchCategoryTotal = () => {
  const nav = useNavigate();
  const [searchParam] = useSearchParams();
  const category = searchParam.get('categoryId');

  return (
    <>
      <SearchTopBar
        navPath={() => nav('/search')}
        backPath={() => nav('/')}
        displayText='찾고 있는 맛집이 있나요?'
      />
      <SearchTotal fetchQueryFn={useGetCatRestaurant} searchValue={category} />
    </>
  );
};

export default SearchCategoryTotal;
