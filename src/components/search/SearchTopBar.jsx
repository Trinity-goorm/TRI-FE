import styled from 'styled-components';
import { useState } from 'react';
import useModal from '../../hooks/useSortModal.js';
import { SORT_OPTIONS } from '../../constants/sortOptions.js';

const SearchTopBar = ({ navPath, backPath, displayText }) => {
  const [SortModalComponent, setSortModalComponent] = useState(null);
  const { sortType, openModal } = useModal();

  const handleMouseEnter = async () => {
    if (!SortModalComponent) {
      const { default: component } = await import('../modal/SortModal.jsx');
      setSortModalComponent(() => component);
    }
  };

  const getLabelByKey = (key) => {
    const option = SORT_OPTIONS.find((option) => option.key === key);
    return option.label;
  };

  return (
    <>
      {SortModalComponent && <SortModalComponent />}
      <SearchTopBarContainer>
        <SearchBox
          $isCategory={displayText === '찾고 있는 맛집이 있나요?'}
          onClick={() => navPath()}
        >
          <ArrowBackIcon
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
          </ArrowBackIcon>
          {displayText}
        </SearchBox>

        <SortButton onClick={() => openModal()} onMouseEnter={handleMouseEnter}>
          {getLabelByKey(sortType)}
          <ArrowDownIcon className='material-icons'>
            keyboard_arrow_down
          </ArrowDownIcon>
        </SortButton>
      </SearchTopBarContainer>
    </>
  );
};

export default SearchTopBar;

const SearchTopBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  z-index: 10;
  background-color: white;
  position: fixed;
  width: 480px;
  height: 120px;
  padding: 0px 20px;
  box-sizing: border-box;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 15px;
  border-radius: 12px;
  font-size: 16px;
  box-sizing: border-box;
  border: 1px solid #d6d6d6;
  cursor: pointer;
  color: ${({ $isCategory }) => ($isCategory ? '#b3b3b3' : 'black')};
`;

const ArrowBackIcon = styled.span`
  font-size: 18px;
  color: black;
  cursor: pointer;
`;

const SortButton = styled.button`
  width: fit-content;
  background-color: white;
  border: 1px solid #d6d6d6;
  border-radius: 20px;
  padding: 9px 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  cursor: pointer;
`;

const ArrowDownIcon = styled.span`
  font-size: 18px;
  margin-right: -5px;
`;
