import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const SearchBar = styled.div`
  width: 480px;
  height: 65px;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: relative;
  height: 100%;
`;

export const SearchInput = styled.input`
  width: 84%;
  height: 48px;
  border-radius: 12px;
  font-size: 16px;
  box-sizing: border-box;
  padding: 0 40px 0 15px;
  outline: none;
  border: 1px solid;

  &::placeholder {
    color: #bfbfbf;
  }
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #d3d3d3;
`;

export const CategoryFeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Comment = styled.div`
  font-size: 16px;
  font-weight: 650;
  margin-left: 20px;
`;

export const RecomCatListWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none;
  gap: 7px;
  position: relative;
  padding: 0px 20px 20px 20px;
  margin-bottom: -20px;
`;

export const RecomFeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContentSlider = styled.div`
  transform: scale(0.8);
  transform-origin: top left;

  display: flex;
  flex-direction: row;
  overflow-x: auto;
  scroll-behavior: smooth;
  white-space: nowrap;
  width: calc(100% / 0.8);
  box-sizing: border-box;

  padding: 0 20px 0px 20px;
  margin-bottom: -40px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: -10px;
`;

export const HistoryNoResultComment = styled.div`
  display: flex;
  color: #c6c6c6;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 5px;
  gap: 7px;
`;

export const ArrowBackIcon = styled.span`
  font-size: 20px;
  cursor: pointer;
`;

export const CloseCircleIcon = styled.span`
  font-size: 18px;
  color: #b3b3b3;
  position: absolute;
  right: 35px;
  cursor: pointer;
`;

export const HistoryListWrapper = styled.div``;
