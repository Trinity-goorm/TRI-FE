import BottomBar from "../../components/bar/BottomBar";
import styled from "styled-components";
import { formatPhoneNumber } from "../../util/formatPhoneNumber.js";
import profileImg from "../../assets/img/profile_default.png";
import moneyImg from "../../assets/img/money.png";
import alarm from "../../assets/img/alarm.png";
import SavedRestaurantList from "../../components/restaurant/SavedRestaurantList.jsx";
import PostLogout from "../../api/auth/PostLogout.js";

const name = "식도락가";
const tellNum = "01000000000";
const ticket = 1;
const count = 5;

const MyPage = () => {
  const handleLogout = async () => {
    try {
      console.log("**");
      await PostLogout(localStorage.getItem("FCM_TOKEN"));

      localStorage.removeItem("FCM_TOKEN");
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.removeItem("REFRESH_TOKEN");
      localStorage.removeItem("userId");
    } catch (error) {
      console.error("💀데이터 로드 실패", error);
    }
  };

  return (
    <>
      <MyPageContainer>
        <Title>마이페이지</Title>

        <UserInfoContainer>
          <ProfileImg src={profileImg} />
          <NameTellContainer>
            <Name>{name}</Name>
            <TellNum>{formatPhoneNumber(tellNum)}</TellNum>
          </NameTellContainer>
          <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
        </UserInfoContainer>

        <TicketContainer>
          <Comment>보유티켓</Comment>
          <TickContentContainer>
            <TicketItemContainer>
              <MoneyImg src={moneyImg} />
              <TicketNum>{ticket} 장</TicketNum>
              <TicketInfo>결제 티켓</TicketInfo>
            </TicketItemContainer>

            <Divider />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "15px",
              }}
            >
              <AlarmImg
                src={alarm}
                style={{ marginTop: "-9px", marginBottom: "14px" }}
              />
              <TicketNum style={{ marginBottom: "6px" }}>{ticket} 장</TicketNum>
              <TicketInfo>빈자리 티켓</TicketInfo>
            </div>
          </TickContentContainer>
        </TicketContainer>

        <SavedRestList>
          <SavedRestCommetWrapper>
            <Comment>저장한 레스토랑</Comment>
            <div style={{ color: "#7b7b7b", marginBottom: "20px" }}>
              {count}
            </div>
          </SavedRestCommetWrapper>
          <SavedRestaurantList />
        </SavedRestList>
      </MyPageContainer>

      <BottomBarWrapper>
        <BottomBar />
      </BottomBarWrapper>
    </>
  );
};
export default MyPage;

const MyPageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  gap: 35px;
  margin-bottom: 80px;
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

const Divider = styled.div`
  width: 1px;
  height: 60%;
  background-color: #ccc;
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
  font-size: 14px;
  font-weight: 700;
`;

const TicketInfo = styled.div`
  font-size: 15px;
  color: #494949;
`;

const MoneyImg = styled.img`
  width: 45px;
  height: 45px;
  opacity: 0.6;
`;

const AlarmImg = styled.img`
  width: 30px;
  height: 30px;
  opacity: 0.6;
`;

const SavedRestCommetWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SavedRestList = styled.div``;

const BottomBarWrapper = styled.div`
  max-width: 480px;
  background-color: white;
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
`;
