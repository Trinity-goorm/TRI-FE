import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";

const SortModal = ({ isOpen, closeModal, sortType, clickSortHandler }) => {
  return (
    <SortModalContainer $isOpen={isOpen}>
      <ModalBack onClick={closeModal} />
      <ModalContentContainer $isOpen={isOpen}>
        <SortText>
          정렬
          <MdClose onClick={closeModal} size={18} />
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
          $sortType={sortType === "highest_price"}
          onClick={() => {
            clickSortHandler("highest_price");
          }}
        >
          {sortType === "highest_price" ? (
            <IoMdCheckmark strokeWidth={15} />
          ) : null}
          가격 높은순
        </SortComment>
        <SortComment
          $sortType={sortType === "lowest_price"}
          onClick={() => {
            clickSortHandler("lowest_price");
          }}
        >
          {sortType === "lowest_price" ? (
            <IoMdCheckmark strokeWidth={15} />
          ) : null}
          가격 낮은순
        </SortComment>
      </ModalContentContainer>
    </SortModalContainer>
  );
};

const SortModalContainer = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
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
`;

const SortComment = styled.div`
  font-weight: 400;
  color: #484848;
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  font-weight: ${({ $sortType }) => ($sortType ? "700" : "none")};
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
  justify-content: space-around;
  padding: 0px 20px;
  box-sizing: border-box;

  animation: ${({ $isOpen }) => ($isOpen ? "fade_up 0.3s" : "fade_down 0.3s")};

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
