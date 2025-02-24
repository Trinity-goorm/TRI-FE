import * as style from "./style/DiningComponent.js";
import {FaXmark} from "react-icons/fa6";

const DiningComponent = ({tagText, reservation, onClickFunction}) => {

    return (
        <style.TotalContainer>
            <style.TopContainer>
                <style.TopTagContainer>
                    {tagText}
                </style.TopTagContainer>
                <style.CancelContainer onClick={onClickFunction}>
                    <FaXmark size={15} />
                </style.CancelContainer>
            </style.TopContainer>
            <style.ContentContainer>
                <style.ContentImageContainer src={reservation.imageUrl} />

                <style.ContentInfoContainer>
                    <style.ContentInfoTitle>
                        {reservation.restaurantName}
                    </style.ContentInfoTitle>
                    <style.ContentInfoCategory>
                        {reservation.category}
                    </style.ContentInfoCategory>
                    <style.ContentInfoReservation>
                        {reservation.date} -
                        {reservation.timeSlot} - {reservation.minCapacity}~{reservation.maxCapacity} 인석
                    </style.ContentInfoReservation>

                </style.ContentInfoContainer>
            </style.ContentContainer>
        </style.TotalContainer>
    )
}
export default DiningComponent;