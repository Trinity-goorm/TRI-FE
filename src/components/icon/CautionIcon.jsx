import {FaPhoneAlt, FaPhoneSlash} from "react-icons/fa";
import {FaShop, FaShopSlash} from "react-icons/fa6";
import {MdFastfood, MdNoFood} from "react-icons/md";
import styled from "styled-components";


const CautionIcon = ({caution}) => {
    if (caution === "예약가능") {
        return <FaPhoneAlt size={30} />;
    } else if (caution === "예약불가") {
        return <FaPhoneSlash size={30} />;
    } else if (caution === "배달가능"){
        return <FaShop size={30} />;
    } else if (caution === "배달불가"){
        return <FaShopSlash size={30} />;
    } else if(caution === "포장가능"){
        return <MdFastfood size={30} />;
    } else if (caution === "포장불가"){
        return <MdNoFood size={30} />
    } else {
        return null;
    }

}
export default CautionIcon;


export const DetailIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

