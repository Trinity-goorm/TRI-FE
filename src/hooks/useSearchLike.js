import { useRecoilState } from 'recoil';
import { likeListState } from '../atoms/likeState';

const useSearchLike = () => {
  const [likeList, setLikeList] = useRecoilState(likeListState);
};

export default useSearchLike;
