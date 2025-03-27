import styled from 'styled-components';

export const SearchKeyword = styled.div`
  position: fixed;
  top: 0;
  width: 480px;
  height: 70px;
  background-color: white;
  z-index: 10;
`;

export const SearchKeywordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: relative;
  height: 100%;
`;

export const Keyword = styled.div`
  width: 90%;
  height: 52px;
  border-radius: 12px;
  font-size: 16px;
  box-sizing: border-box;
  padding: 0 15px 0 40px;
  border: 1px solid #d6d6d6;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${({ $isCategory }) => ($isCategory ? '#b3b3b3' : 'black')};
`;

export const SortButton = styled.button`
  background-color: white;
  border: 1px solid #d6d6d6;
  border-radius: 20px;
  padding: 9px 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  margin: 75px 0px 0px 20px;
  cursor: pointer;
`;

export const RestListWrapper = styled.div`
  height: ${({ $listSize, $itemHeight }) => {
    const calculatedHeight = $listSize * $itemHeight;
    return `${calculatedHeight}px`;
  }};
`;

export const ArrowBackIcon = styled.span`
  font-size: 18px;
  color: black;
  position: absolute;
  left: 35px;
  cursor: pointer;
`;

export const ArrowDownIcon = styled.span`
  font-size: 18px;
  margin-right: -5px;
`;
