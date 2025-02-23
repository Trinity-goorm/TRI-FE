import styled from "styled-components";

import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const HistoryItem = ({ keyword }) => {
  const nav = useNavigate();

  return (
    <ItemContainer onClick={() => nav(`/search/total?keyword=${keyword}`)}>
      <Keyword>{keyword}</Keyword>
      <IoClose color={"#a1a1a1"} size={15} style={{ marginBottom: "1px" }} />
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
