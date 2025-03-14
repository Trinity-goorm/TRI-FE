import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { notificationState } from "../../atoms/notificationState";
import logo from "/logo.png";
//import { IoClose } from "react-icons/io5";
import { useEffect, useRef } from "react";

// title: "",
// body: "",
// redirectUrl: "",
const NotificationModal = () => {
  const nav = useNavigate();
  const [notification, setNotification] = useRecoilState(notificationState);
  const modalRef = useRef(null);

  const handleClose = () => {
    setNotification({ ...notification, isModalOpen: false });
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [notification.isModalOpen]);

  return (
    <Overlay onClick={handleOverlayClick} $isOpen={notification.isModalOpen}>
      <NotificationModalContainer
        ref={modalRef}
        $isOpen={notification.isModalOpen}
        onClick={(e) => {
          e.stopPropagation();
          nav(notification.redirectUrl);
          handleClose();
        }}
      >
        <LogoIcon src={logo} />
        <ContentContainer>
          <TitleWrapper>{notification.title}</TitleWrapper>
          <BodyWrapper>{notification.body}</BodyWrapper>
          {/*<IoClose*/}
          {/*  size={20}*/}
          {/*  style={{ position: "absolute", right: "0", top: "-1" }}*/}
          {/*  onClick={(event) => {*/}
          {/*    event.stopPropagation();*/}
          {/*    handleClose();*/}
          {/*  }}*/}
          {/*/>*/}
        </ContentContainer>
      </NotificationModalContainer>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  transition: opacity 0.3s ease-out;
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
`;

const NotificationModalContainer = styled.div`
  position: relative;
  background-color: rgba(104, 104, 104, 0.9);
  backdrop-filter: blur(5px);
  color: white;
  width: 470px;
  border-radius: 15px;
  margin-top: 3px;
  z-index: 100;

  display: flex;
  gap: 10px;
  padding: 12px 20px;
  box-sizing: border-box;

  // 애니메이션
  animation: ${({ $isOpen }) =>
    $isOpen ? "slideDown 0.3s ease-out" : "slideUp 0.3s ease-in"};

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
  margin-top: 3px;
  height: 100%;
  justify-content: space-evenly;
  gap: 10px;
  flex: 1;
  position: relative;
  padding-right: 28px;
  line-height: 1.45;
`;

const LogoIcon = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 10px;
  object-fit: contain;
`;

const TitleWrapper = styled.div`
  font-size: 15.5px;
  font-weight: 500;
`;

const BodyWrapper = styled.div`
  font-size: 15px;
  white-space: pre-line;
`;

export default NotificationModal;
