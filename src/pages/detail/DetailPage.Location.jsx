import * as style from "./style/DetailPage.Location.js";
import KakaoMap from "../../components/map/KakaoMap.jsx";
import {GoLocation} from "react-icons/go";

const DetailLocation = ({address, latitude, longitude}) => {

    return (
        <style.TotalContainer>
            <style.LocationTitle>
                위치
            </style.LocationTitle>
            <KakaoMap address={address} latitude={latitude} longitude={longitude} />
            <style.LocationTextContainer>
                <GoLocation size={17} color={"gray"}/>
                <style.LocationText>
                    {address}
                </style.LocationText>
            </style.LocationTextContainer>
        </style.TotalContainer>
    )
}
export default DetailLocation