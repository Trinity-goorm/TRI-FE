import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { notificationState } from "../../atoms/notificationState";
import logo_test from "../../../public/logo_test.png";
import { IoClose } from "react-icons/io5";

// title: "",
// body: "",
// redirectUrl: "",
const NotificationModal = () => {
  const nav = useNavigate();
  const [notification, setNotification] = useRecoilState(notificationState);

  const handleClose = () => {
    setNotification({ ...notification, isModalOpen: false });
  };

  return (
    <NotificationModalContainer
      onClick={nav(notification.redirectUrl)}
      $isOpen={notification.isModalOpen}
    >
      <LogoIcon src={logo_test} />
      <ContentContainer>
        <TitleWrapper>
          {notification.title}
          [캐치핑] 김민철님, 1시간 후 역전우동에서의 맛있는 식사가 기다리고
          있어요!
        </TitleWrapper>
        {/* <TitleWrapper>
          [캐치핑] 김민철님, 오늘 12:00에 예약이 있어요!
        </TitleWrapper> */}
        <BodyWrapper>
          {notification.body}
          식당: 역전우동 <br /> 날짜: 2024-11-12 <br />
          시간: 12:00
        </BodyWrapper>
        <IoClose
          size={20}
          style={{ position: "absolute", right: "0", top: "-1" }}
          onClick={(event) => {
            event.stopPropagation();
            handleClose();
          }}
        />
      </ContentContainer>
    </NotificationModalContainer>
  );
};

const NotificationModalContainer = styled.div`
  position: fixed;
  background-color: #b4b4b4;
  width: 470px;
  border-radius: 15px;
  margin-left: 5px;
  margin-top: 3px;
  z-index: 100;

  display: flex;
  gap: 10px;
  padding: 12px 20px;
  box-sizing: border-box;

  // 애니메이션
  animation: ${({ $isOpen }) =>
    $isOpen ? "slideDown 0.3s ease-out" : "slideUp 0.3s ease-in"};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};

  @keyframes slideDown {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-100%);
      opacity: 0;
    }
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  height: 100%;
  justify-content: space-evenly;
  gap: 10px;
  flex: 1;
  position: relative;
  padding-right: 28px;
`;

const LogoIcon = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 10px;
`;

const TitleWrapper = styled.div``;

const BodyWrapper = styled.div`
  line-height: 1.45;
`;

export default NotificationModal;
