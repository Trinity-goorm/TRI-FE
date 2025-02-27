import styled from "styled-components";
import HistoryItem from "../item/HistoryItem";

const HistoryList = ({ histroyList, deleteHistory }) => {
  return (
    <HistoryListContainer>
      {histroyList.map((item, index) => {
        if (item.keyword === "") return null;
        else
          return (
            <HistoryItem
              key={index}
              id={item.id}
              keyword={item.keyword}
              deleteHistory={deleteHistory}
            />
          );
      })}
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
