import * as style from "./style/DiningComponent.js";
import {FaXmark} from "react-icons/fa6";

const DiningComponent = ({tagText, reservationInfo}) => {

    console.log(reservationInfo);

    return (
        <style.TotalContainer>
            <style.TopContainer>
                <style.TopTagContainer>
                    {tagText}
                </style.TopTagContainer>
                <style.CancelContainer>
                    <FaXmark size={15} />
                </style.CancelContainer>
            </style.TopContainer>
            <style.ContentContainer>
                <style.ContentImageContainer src={reservationInfo.imageUrl} />

                <style.ContentInfoContainer>
                    <style.ContentInfoTitle>
                        {reservationInfo.title}
                    </style.ContentInfoTitle>
                    <style.ContentInfoCategory>
                        {reservationInfo.category}
                    </style.ContentInfoCategory>
                    <style.ContentInfoReservation>
                        {reservationInfo.date} -
                        {reservationInfo.time} - {reservationInfo.seatMinCapacity}~{reservationInfo.seatMaxCapacity} 인석
                    </style.ContentInfoReservation>

                </style.ContentInfoContainer>
            </style.ContentContainer>
        </style.TotalContainer>
    )
}
export default DiningComponent;