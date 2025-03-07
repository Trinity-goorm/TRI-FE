import SearchReservationItem from "../item/SearchReservationItem";
import styled from "styled-components";

const SearchResevationList = ({ id, reservation }) => {
  return (
    <ReservationListContainer>
      {reservation.map((item, index) => (
        <SearchReservationItem
          key={index}
          id={id}
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
