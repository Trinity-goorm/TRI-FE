import { useRecoilState } from 'recoil';
import { modalOpenState } from '../atoms/modalOpenState';
import { sortTypeState } from '../atoms/sortTypeState';

const useSortModal = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalOpenState);
  const [sortType, setSortType] = useRecoilState(sortTypeState);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const changeSortType = (newSortType) => setSortType(newSortType);

  return { isModalOpen, sortType, openModal, closeModal, changeSortType };
};

export default useSortModal;
