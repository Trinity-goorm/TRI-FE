import * as style from "../../pages/home/style/RecommendList.main.js"
import {useDraggable} from "../../hooks/useDraggable.js";
import {useRef} from "react";
import RecommendFeed from "./RecommendFeed.jsx";



const RecommendContentSlider = ({recommendList}) => {

    const scrollRef = useRef(null);
    const { onMouseDown, onMouseMove, onMouseUp, onMouseLeave } = useDraggable(scrollRef);

    return (
        <style.ContentSlider
            ref={scrollRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}

        >
            {recommendList?.map((item, index) => (
                <RecommendFeed key={item.id} item={item}/>
            ))}
        </style.ContentSlider>
    )

}

export default RecommendContentSlider;