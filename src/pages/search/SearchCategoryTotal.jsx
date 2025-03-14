import { useNavigate, useSearchParams } from 'react-router-dom';
import SearchTotal from '../../components/search/SearchTotal';
import GetCategoryRestList from '../../api/search/GetCategoryRestList';

const SearchCategoryTotal = () => {
  const nav = useNavigate();
  const [searchParam] = useSearchParams();
  const category = searchParam.get('categoryId');

  return (
    <SearchTotal
      fetchDataFn={GetCategoryRestList}
      searchValue={category}
      navPath={() => nav('/search')}
      backPath={() => nav('/')}
      displayText='찾고 있는 맛집이 있나요?'
    />
  );
};

export default SearchCategoryTotal;
