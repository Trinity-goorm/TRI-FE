import styled from "styled-components";
import { BsBookmarkDash } from "react-icons/bs";

const NoReservedRestaurant = () => {
    return (
        <NoSavedRestaurantContainer>
            <InfoContainer>
                <BsBookmarkDash size={40} color={"#dcdcdc"} strokeWidth={0.3} />
                <Title>아직 예약한 레스토랑이 없어요.</Title>
                <SubTitle>예약한 모든 레스토랑이 여기에 표시됩니다.</SubTitle>
            </InfoContainer>
        </NoSavedRestaurantContainer>
    );
};

const NoSavedRestaurantContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const InfoContainer = styled.div`
  margin-top: -30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Title = styled.div`
  font-weight: 600;
`;

const SubTitle = styled.div`
  font-size: 13px;
  color: #919191;
`;

export default NoReservedRestaurant;
