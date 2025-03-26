import * as style from "./style/DetailPage.Location.js";
import KakaoMap from "../../components/map/KakaoMap.jsx";

const DetailLocation = ({address, latitude, longitude}) => {

    return (
        <style.TotalContainer>
            <style.LocationTitle>
                위치
            </style.LocationTitle>
            <KakaoMap address={address} latitude={latitude} longitude={longitude} />
            <style.LocationTextContainer>
            {/*    <span className="material-icons" style={{fontSize:"18px", color:"gray"}}>location_on</span>*/}
                <style.LocationText>
                    {address}
                </style.LocationText>
            </style.LocationTextContainer>
        </style.TotalContainer>
    )
}
export default DetailLocation