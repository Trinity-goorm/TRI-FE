import * as style from './style/SaveButton.js';

const SaveButton = ({
  color,
  width,
  height,
  size,
  border,
  iconcolor,
  isLiked,
}) => {
  return (
    <style.ButtonContainer
      role='button'
      width={width}
      height={height}
      border={border}
      size={size}
    >
      {/* 아이콘 사용을 비활성화한 상태 */}
      {isLiked ? (
        <span
          className='material-icons'
          style={{ fontSize: `${size}px`, color: '#FF6868' }}
        >
          bookmark
        </span>
      ) : (
        <span
          className='material-icons'
          style={{
            fontSize: `${size}px`,
            color: `${iconcolor ? iconcolor : 'lightgray'}`,
          }}
        >
          bookmark_border
        </span>
      )}
    </style.ButtonContainer>
  );
};

export default SaveButton;
