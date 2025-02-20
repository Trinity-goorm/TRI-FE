import SearchReservationItem from "./SearchReservationItem";
import styled from "styled-components";

const SearchResevationList = ({ reservation }) => {
  return (
    <ReservationListContainer>
      {reservation.map((item, index) => (
        <SearchReservationItem
          key={index}
          date={item.date}
          available={item.available}
        />
      ))}
    </ReservationListContainer>
  );
};

const ReservationListContainer = styled.div`
  display: flex;
  overflow-x: auto;
  flex-wrap: nowrap;
  scrollbar-width: none;
  padding: 0 20px;
  gap: 6px;
  margin: 8px 0px 2px 0;
`;

export default SearchResevationList;
