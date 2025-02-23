import styled from "styled-components";
import HistoryItem from "./HistoryItem";

const HistoryList = ({ histroyList }) => {
  return (
    <HistoryListContainer>
      {histroyList.map((item, index) => (
        <HistoryItem key={index} keyword={item} />
      ))}
    </HistoryListContainer>
  );
};

const HistoryListContainer = styled.div`
  display: flex;
  gap: 8px;
  padding-left: 20px;
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none;
`;

export default HistoryList;
