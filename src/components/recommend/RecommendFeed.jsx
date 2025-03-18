import * as style from "./style/RecommendFeed.js";
import { useNavigate } from "react-router-dom";
import SaveButton from "../save/SaveButton.jsx";
import wine from "../../assets/img/wineBar.jpg";
import useSingleLike from "../../hooks/useSingleLike.js";
import ProfileComponent from "../../components/search/ProfilerTableLogWrapper.jsx";


const RecommendFeed = ({item}) => {
  const name = item?.name;
  const images = item?.imageUrls || [];
  const mainImage = images.length === 0 || images[0] == null ? wine : images[0];
  const star = item?.rating;
  const category = item?.category;
  const location = item?.location;
  const id = item?.restaurantId;
  const wishlisted = item?.wishlisted;
  const { isLiked, toggleLike } = useSingleLike(id, wishlisted);

  const formatLocation = (location) => {
    return location?.length > 9 ? `${location.slice(0, 10)}...` : location;
  };
  const formatTitle = (title) => {
    return title?.length > 9 ? `${title.slice(0, 10)}...` : title;
  }

  const nav = useNavigate();
  const onClickToDetail = () => {
    nav(`detail/${id}`);
  };
  const makeImageUrls = (image) => {
    if (!image || image === wine) return image;
    return image.startsWith("http") ? image : `https://${image}`;
  };

  return (
    <style.TotalContainer>
      <style.ImageContainer onClick={onClickToDetail}>
        <style.Image src={makeImageUrls(mainImage)} />
      </style.ImageContainer>
      <style.SubContainer>
        <style.InfoContainer>
          <style.NameContainer>{formatTitle(name)}</style.NameContainer>
          <style.SubInfoContainer>
            <style.StarContainer>
              <span className="material-icons" style={{fontSize:"16px", color:"gold"}}>star</span>
              <style.StarScore>{star}</style.StarScore>
            </style.StarContainer>
            <style.CategoryLocation>
              {formatLocation(location)}
            </style.CategoryLocation>
          </style.SubInfoContainer>
        </style.InfoContainer>
        <style.LikeContainer onClick={() => toggleLike(id)}>
          <SaveButton
            width={"30px"}
            height={"30px"}
            size={22}
            border={"#E4E4E4"}
            iconcolor={"#E4E4E4"}
            isLiked={isLiked}

          ></SaveButton>
        </style.LikeContainer>
      </style.SubContainer>
    </style.TotalContainer>
  );
};
export default RecommendFeed;
