import { formatDate } from "../../util/formatDate";
import styled from "styled-components";

const SearchReservationItem = ({ date, available }) => {
  return (
    <ReservationItemContainer $available={available}>
      <DateWrapper $available={available}>{formatDate(date)}</DateWrapper>
      <AvailableWrapper $available={available}>
        {available ? "예약 가능" : "예약 마감"}
      </AvailableWrapper>
    </ReservationItemContainer>
  );
};

const ReservationItemContainer = styled.div`
  width: 68px;
  height: 44px;
  flex: 0 0 auto;
  border-radius: 6px;
  border: 1px solid ${({ $available }) => ($available ? "#dddddd" : "#f2f5f7")};
  background-color: ${({ $available }) => ($available ? "none" : "#f2f5f7")};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  cursor: pointer;
`;

const DateWrapper = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: ${({ $available }) => ($available ? "black" : "#7a909e")};
`;

const AvailableWrapper = styled.div`
  font-size: 10.5px;
  color: ${({ $available }) => ($available ? "#ff9a84" : "#7a909e")};
`;

export default SearchReservationItem;
