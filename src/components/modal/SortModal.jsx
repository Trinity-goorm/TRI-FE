import styled from 'styled-components';
import { useEffect } from 'react';
import useModal from '../../hooks/useSortModal';
import { SORT_OPTIONS } from '../../constants/sortOptions';

const SortModal = () => {
  const { isModalOpen, sortType, closeModal, changeSortType } = useModal();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <SortModalContainer $isOpen={isModalOpen} onClick={closeModal}>
      <ModalContentContainer
        $isOpen={isModalOpen}
        onClick={(e) => e.stopPropagation()}
      >
        <SortText>
          정렬
          <CloseIcon className='material-icons' onClick={closeModal}>
            close
          </CloseIcon>
        </SortText>

        {SORT_OPTIONS.map(({ key, label }) => (
          <SortComment
            key={key}
            $sortType={sortType === key}
            onClick={() => {
              changeSortType(key);
              closeModal();
            }}
          >
            {sortType === key && (
              <CheckIcon className='material-icons'>check</CheckIcon>
            )}
            {label}
          </SortComment>
        ))}
      </ModalContentContainer>
    </SortModalContainer>
  );
};

const SortModalContainer = styled.div`
  position: fixed;
  z-index: 20;
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.65);

  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const SortText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: 600;
  font-size: 17px;
  height: 100%;
`;

const CloseIcon = styled.div`
  font-size: 18px;
  cursor: pointer;
`;

const CheckIcon = styled.div`
  font-size: 15px;
`;

const SortComment = styled.div`
  font-weight: 400;
  color: #484848;
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  font-weight: ${({ $sortType }) => ($sortType ? '700' : 'none')};
  height: 100%;
`;

const ModalContentContainer = styled.div`
  width: 480px;
  height: 30%;
  background-color: white;
  border-radius: 12px 12px 0 0;
  display: flex;
  flex-direction: column;
  padding: 0px 22px 13px 22px;
  box-sizing: border-box;

  animation: ${({ $isOpen }) => ($isOpen ? 'fade_up 0.3s' : 'fade_down 0.3s')};

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
