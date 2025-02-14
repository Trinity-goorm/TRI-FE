import * as style from "./style/RecommendComponent.main.js"
import RecommendFeed from "../../components/recommend/RecommendFeed.jsx";
import RecommendedList from "../../assets/dummydata/RecommendedList.js";

const RecommendComponent = () => {
    return (
        <style.TotalContainer>
            <style.TitleContainer>
                <style.Title>
                   ✨ {"한주리"} 님이 좋아할 매장 ✨
                    <style.WatchAll>전체보기 {">"}</style.WatchAll>

                </style.Title>
                <style.TitleExplain>마음에 들 만한 곳을 모아봤어요!</style.TitleExplain>
            </style.TitleContainer>
            <style.ContentSlider>
                {RecommendedList.map((item, index) => (
                    <RecommendFeed item={item} key={index} />
                ))}
            </style.ContentSlider>
        </style.TotalContainer>
    )
}
export default RecommendComponent;