
const ConvenienceIcon = ({convenience}) => {
    if (convenience === "WIFI") {
        return <span className="material-icons" style={{fontSize: "30px"}}>wifi</span>
    } else if (convenience === "동물출입") {
        return <span className="material-icons" style={{fontSize: "30px"}}>pets</span>
    } else if (convenience === "주차"){
        return <span className="material-icons" style={{fontSize: "30px"}}>local_parking</span>
    } else if (convenience === "휠체어사용"){
        return <span className="material-icons" style={{fontSize: "30px"}}>accessible</span>
    } else if(convenience === "흡연실"){
        return <span className="material-icons" style={{fontSize: "30px"}}>smoking_rooms</span>
    } else if (convenience === "놀이방"){
        return <span className="material-icons" style={{fontSize: "30px"}}>smart_toy</span>
    } else{
        return null;
    }

}
export default ConvenienceIcon;