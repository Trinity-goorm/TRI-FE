import styled from "styled-components";

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 90px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  margin: 10px;
    &:hover {
        transform: scale(1.05);
        transition: transform 0.3s ease;
    }
`;
export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  opacity: 0.7;
    object-fit: cover;
`;

export const Title = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%; /* 텍스트가 긴 경우 중앙 유지 */
  text-align: center;
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */

  color: white;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;
  background: rgba(0, 0, 0, 0.5);
  padding: 40px 8px;

    &:hover {
        background: rgba(0, 0, 0, 0.3);
        transition: background 0.3s ease;
    }
`;
