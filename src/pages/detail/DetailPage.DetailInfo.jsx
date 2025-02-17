import ConvenienceIcon from "../../components/ConvenienceIcon.jsx";
import * as style from "./style/DetailPage.DetailInfo.js"

const DetailInfo = ({caution, convenience, number}) => {
    const convenienceList = convenience.split("\n");
    return (
        <style.DetailInfoContainer>
            <style.InfoGroupContainer>
                <style.DetailInfoTitle>
                    편의시설
                </style.DetailInfoTitle>
                <style.ConvenienceContainer>
                    {convenienceList.map((item, index) => (
                        <style.ConvenienceEach key={index}>
                            <ConvenienceIcon convenience={item} key={index}/>
                            {item}
                        </style.ConvenienceEach>
                    ))}
                </style.ConvenienceContainer>
            </style.InfoGroupContainer>
            <style.InfoGroupContainer>
                <style.DetailInfoTitle>
                    상세정보
                </style.DetailInfoTitle>
                <style.InfoContainer>
                    {caution}
                </style.InfoContainer>
            </style.InfoGroupContainer>

            <style.InfoGroupContainer>
                <style.DetailInfoTitle>
                    전화번호
                </style.DetailInfoTitle>
                <style.InfoContainer>
                    {number}
                </style.InfoContainer>
            </style.InfoGroupContainer>

        </style.DetailInfoContainer>
    )
}
export default DetailInfo;