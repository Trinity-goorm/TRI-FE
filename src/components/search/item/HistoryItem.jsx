import styled from 'styled-components';
// import { IoClose } from '@react-icons/all-files/io5/IoClose';
import { useNavigate } from 'react-router-dom';
import DeleteHistoryItem from '../../../api/search/DeleteHistoryItem';

const HistoryItem = ({ id, keyword, deleteHistory }) => {
  const nav = useNavigate();

  const handleDelete = async (event) => {
    event.stopPropagation();

    try {
      await DeleteHistoryItem(id);
      deleteHistory(id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ItemContainer onClick={() => nav(`/search/total?keyword=${keyword}`)}>
      <Keyword>{keyword}</Keyword>
      <CloseIcon className='material-icons' onClick={handleDelete}>
        close
      </CloseIcon>
    </ItemContainer>
  );
};

export default HistoryItem;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e5e5e5;
  border-radius: 20px;
  padding: 7.5px 12px;
  gap: 9px;
  cursor: pointer;
`;

const Keyword = styled.div`
  font-size: 14px;
`;

const CloseIcon = styled.span`
  color: #a1a1a1;
  font-size: 15px;
  margin-bottom: 1px;
`;
