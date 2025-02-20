import {FaWifi, FaParking, FaWheelchair, FaChild, FaSmoking} from "react-icons/fa";
import {MdPets, MdSmokingRooms} from "react-icons/md";


const ConvenienceIcon = ({convenience}) => {
    if (convenience === "WIFI") {
        return <FaWifi size={30} />;
    } else if (convenience === "동물출입") {
        return <MdPets size={30} />;
    } else if (convenience === "주차"){
        return <FaParking size={30} />;
    } else if (convenience === "휠체어사용"){
        return <FaWheelchair size={30} />;
    } else if(convenience === "흡연실"){
        return <FaSmoking size={30} />;
    } else if (convenience === "놀이방"){
        return <FaChild size={30} />
    }

}
export default ConvenienceIcon;