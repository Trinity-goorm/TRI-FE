import BottomBar from '../../components/bar/BottomBar';
import styled from 'styled-components';
import profileImg from '../../assets/img/profile_default.png';
import SavedRestaurantList from '../../components/restaurant/SavedRestaurantList.jsx';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GetUserDetail from '../../api/userInfo/GetUserDetail.js';
import NoSavedRestaurant from '../../components/restaurant/NoSavedRestuarant.jsx';
import GetMyLikeList from '../../api/userInfo/GetMyLikeList.js';
import DeleteFcmToken from '../../api/fcm/DeleteFcmToken.js';
import PostLogout from '../../api/auth/PostLogout.js';

const MyPage = () => {
  const nav = useNavigate();
  const [name, setName] = useState('');
  const [tellNum, setTellNum] = useState('');
  const [emptyTicketCount, setEmptyTicketCount] = useState(0);
  const [normalTicketCount, setNormalTicketCount] = useState(0);
  const [savedRestList, setSavedRestList] = useState([]);

  useEffect(() => {
    fetchUserDetail();
    fetchMyLikeList();
  }, []);

  const handleLogout = async () => {
    try {
      await deleteFcmTokenData();
      console.log('FCM 토큰 삭제 성공');
      await postLogoutData();
      localStorage.clear();

      nav('/login');
    } catch (error) {
      console.error('💀데이터 로드 실패', error);
    }
  };

  const fetchMyLikeList = async () => {
    try {
      const response = await GetMyLikeList();
      setSavedRestList(response);
    } catch (error) {
      console.error('💀데이터 로드 실패', error);
    }
  };

  const deleteLikeItem = (deleteId) => {
    setSavedRestList((prev) =>
      prev.filter((item) => item.restaurantId !== deleteId)
    );
  };

  const fetchUserDetail = async () => {
    try {
      const response = await GetUserDetail();
      setName(response.username);
      setTellNum(response.phoneNumber);
      setNormalTicketCount(response.normalTicketCount);
      setEmptyTicketCount(response.emptyTicketCount);
    } catch (error) {
      console.error(error);
    }
  };

  const postLogoutData = async () => {
    try {
      await PostLogout(localStorage.getItem('REFRESH_TOKEN'));
    } catch (error) {
      console.error(error);
    }
  };

  const deleteFcmTokenData = async () => {
    try {
      await DeleteFcmToken(
        localStorage.getItem('FCM_TOKEN'),
        localStorage.getItem('ACCESS_TOKEN')
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MyPageTotalContainer $haveList={savedRestList.length !== 0}>
      <MyPageContainer>
        <Title>마이페이지</Title>

        <UserInfoContainer>
          <ProfileImg src={profileImg} />
          <NameTellContainer>
            <Name>{name}</Name>
            <TellNum>{tellNum}</TellNum>
          </NameTellContainer>
          <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
        </UserInfoContainer>

        <TicketContainer>
          <Comment>보유티켓</Comment>
          <TickContentContainer>
            <TicketItemContainer>
              <IconWrapper>💵</IconWrapper>
              <TicketNum>{normalTicketCount} 장</TicketNum>
              <TicketInfo>결제 티켓</TicketInfo>
            </TicketItemContainer>

            <VerticalDivider />

            <TicketItemContainer>
              <IconWrapper>⏰</IconWrapper>
              <TicketNum>{emptyTicketCount} 장</TicketNum>
              <TicketInfo>빈자리 티켓</TicketInfo>
            </TicketItemContainer>
          </TickContentContainer>
        </TicketContainer>

        <SavedRestList>
          <SavedRestCommetWrapper>
            <Comment>저장한 레스토랑</Comment>
            <div style={{ color: '#7b7b7b', marginBottom: '20px' }}>
              {savedRestList.length}
            </div>
          </SavedRestCommetWrapper>
          {savedRestList.length === 0 ? (
            <NoSavedRestaurant />
          ) : (
            <SavedRestaurantList
              savedRestList={savedRestList}
              deleteLikeItem={deleteLikeItem}
            />
          )}
        </SavedRestList>
      </MyPageContainer>

      <BottomBarWrapper>
        <BottomBar />
      </BottomBarWrapper>
    </MyPageTotalContainer>
  );
};
export default MyPage;

const VerticalDivider = styled.div`
  width: 1px;
  height: 60%;
  background-color: #ccc;
`;

const MyPageTotalContainer = styled.div`
  height: ${({ $haveList }) => ($haveList ? 'none' : '100vh')};
`;

const MyPageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  gap: 40px;
  padding-bottom: 80px;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-size: 19.8px;
  font-weight: 700;
  margin-top: 10px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 85px;
  height: 85px;
`;

const NameTellContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-left: 10px;
`;

const Name = styled.div`
  font-size: 17px;
  font-weight: 600;
`;

const TellNum = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #949494;
`;

const LogoutButton = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 5px;
  font-weight: 600;
  color: #7e7e7e;
  border: 1px solid #b1b1b1;
  background-color: white;
  margin-left: auto;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Comment = styled.div`
  font-weight: 700;
  margin-bottom: 20px;
`;

const TicketContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TicketItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

const IconWrapper = styled.div`
  font-size: 26px;
`;

const TickContentContainer = styled.div`
  width: 100%;
  height: 135px;
  background-color: #f3f3f3;
  border-radius: 8px;
  padding: 20px 0;
  box-sizing: border-box;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const TicketNum = styled.div`
  font-size: 15px;
  font-weight: 700;
`;

const TicketInfo = styled.div`
  font-size: 15px;
  color: #494949;
`;

const SavedRestCommetWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SavedRestList = styled.div`
  flex: 1;
`;

const BottomBarWrapper = styled.div`
  max-width: 480px;
  background-color: white;
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
`;
