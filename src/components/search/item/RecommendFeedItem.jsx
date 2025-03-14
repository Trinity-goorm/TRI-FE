import * as style from '../style/RecommendFeedItem.js';
import { useNavigate } from 'react-router-dom';
import wine from '../../../assets/img/wineBar.jpg';
import { formatRating } from '../../../util/formatRating.js';

const RecommendFeedItem = ({ item }) => {
  const name = item?.name;
  const images = item?.imageUrls || [];
  const mainImage = images.length === 0 || images[0] == null ? wine : images[0];
  const star = item?.rating;
  const category = item?.category;
  const id = item?.restaurantId;

  const nav = useNavigate();
  const onClickToDetail = () => {
    nav(`/detail/${id}`);
  };
  const makeImageUrls = (image) => {
    if (!image || image === wine) return image;
    return image.startsWith('http') ? image : `https://${image}`;
  };

  return (
    <style.TotalContainer>
      <style.ImageContainer onClick={onClickToDetail}>
        <style.Image src={makeImageUrls(mainImage)} />
      </style.ImageContainer>

      <style.SubContainer>
        <style.InfoContainer>
          <style.NameContainer>{name}</style.NameContainer>
          <style.SubInfoContainer>
            <style.StarContainer>
              <style.StarIcon className='material-icons'>star</style.StarIcon>
              <style.StarScore>{formatRating(star)}</style.StarScore>
            </style.StarContainer>
            <style.CategoryLocation>{category} · 분당구</style.CategoryLocation>
          </style.SubInfoContainer>
        </style.InfoContainer>
      </style.SubContainer>
    </style.TotalContainer>
  );
};
export default RecommendFeedItem;
