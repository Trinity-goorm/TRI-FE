import styled from 'styled-components';

const NoSavedRestaurant = () => {
  return (
    <NoSavedRestaurantContainer>
      <InfoContainer>
        <BookmarkIcon className='material-icons'>
          content_paste_off
        </BookmarkIcon>
        {/*<BsBookmarkDash size={40} color={"#dcdcdc"} strokeWidth={0.3} />*/}
        <Title>아직 저장한 레스토랑이 없어요.</Title>
        <SubTitle>저장하는 모든 레스토랑이 여기에 표시됩니다.</SubTitle>
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

const BookmarkIcon = styled.span`
  font-size: 40px;
  color: #dcdcdc;
`;

export default NoSavedRestaurant;
