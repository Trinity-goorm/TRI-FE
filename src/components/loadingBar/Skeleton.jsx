import styled from 'styled-components';

const SkeletonWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SkeletonContentWrapper = styled.div`
  position: relative;
  background: #d0d0d0;
  animation: fadeEffect 1.6s ease-in-out infinite;

  @keyframes fadeEffect {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Content = ({ style }) => (
  <SkeletonContentWrapper style={style} className='skeleton-item'>
    &nbsp;
  </SkeletonContentWrapper>
);

const Skeleton = ({ children, style }) => (
  <SkeletonWrapper style={style}>{children}</SkeletonWrapper>
);

Skeleton.Content = Content;
export default Skeleton;
