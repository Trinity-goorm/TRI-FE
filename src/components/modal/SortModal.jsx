import styled from "styled-components";
import { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";

const SortModal = ({ isOpen, closeModal, sortType, clickSortHandler }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <SortModalContainer $isOpen={isOpen}>
      <ModalBack onClick={closeModal} />
      <ModalContentContainer $isOpen={isOpen}>
        <SortText>
          정렬
          <MdClose
            onClick={closeModal}
            size={18}
            style={{ cursor: "pointer" }}
          />
        </SortText>
        <SortComment
          $sortType={sortType === "highest_rating"}
          onClick={() => {
            clickSortHandler("highest_rating");
          }}
        >
          {sortType === "highest_rating" ? (
            <IoMdCheckmark strokeWidth={15} />
          ) : null}
          별점순
        </SortComment>
        <SortComment
          $sortType={sortType === "highest_average_price"}
          onClick={() => {
            clickSortHandler("highest_average_price");
          }}
        >
          {sortType === "highest_average_price" ? (
            <IoMdCheckmark strokeWidth={15} />
          ) : null}
          가격 높은순
        </SortComment>
        <SortComment
          $sortType={sortType === "lowest_average_price"}
          onClick={() => {
            clickSortHandler("lowest_average_price");
          }}
        >
          {sortType === "lowest_average_price" ? (
            <IoMdCheckmark strokeWidth={15} />
          ) : null}
          가격 낮은순
        </SortComment>
      </ModalContentContainer>
    </SortModalContainer>
  );
};

const SortModalContainer = styled.div`
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transition: opacity 0.2s ease, visibility 0.2s ease;
`;

const ModalBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.65);
`;

const SortText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: 600;
  font-size: 17px;
  height: 100%;
`;

const SortComment = styled.div`
  font-weight: 400;
  color: #484848;
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  font-weight: ${({ $sortType }) => ($sortType ? "700" : "none")};
  height: 100%;
`;

const ModalContentContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 480px;
  height: 30%;
  background-color: white;
  border-radius: 12px 12px 0 0;

  display: flex;
  flex-direction: column;
  padding: 0px 22px 13px 22px;
  box-sizing: border-box;

  animation: ${({ $isOpen }) => ($isOpen ? "fade_up 0.2s" : "fade_down 0.2s")};

  @keyframes fade_up {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fade_down {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(100%);
    }
  }
`;
export default SortModal;
