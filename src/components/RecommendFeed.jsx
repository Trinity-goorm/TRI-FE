import * as style from "./style/RecommendFeed.js";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const RecommendFeed = ({item}) => {
    const name = item?.name;
    const image = item?.image;
    const star = item?.star;
    const category = item?.category;
    const location = item?.location;
    const id = item?.id;

    const nav = useNavigate();
    const onClickToDetail = () => {
        nav(`detail/${id}`);
    };

    return (
        <style.TotalContainer onClick={onClickToDetail}>
            <style.ImageContainer>
                <style.Image src={image} />


            </style.ImageContainer>
            <style.SubContainer>
                <style.InfoContainer>
                    <style.NameContainer>
                        {name}
                    </style.NameContainer>
                    <style.SubInfoContainer>
                        <style.StarContainer>
                            <FaStar size={16} color={"#FFD700"} />
                            <style.StarScore>
                                {star}
                            </style.StarScore>
                        </style.StarContainer>
                        <style.CategoryLocation>
                            {category} - {location}
                        </style.CategoryLocation>
                    </style.SubInfoContainer>
                </style.InfoContainer>
                <style.LikeContainer>

                </style.LikeContainer>
            </style.SubContainer>
        </style.TotalContainer>
    )
}
export default RecommendFeed;