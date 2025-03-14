import * as style from "./style/DiningComponent.js";
//import {FaXmark} from "react-icons/fa6";
import wine from "../../assets/img/wineBar.jpg";

const VacancyComponent = ({tagText, reservation, onClickFunction}) => {
    const imageList = reservation.
    restaurantImageUrl
        .split(",").map(imageUrl => imageUrl.trim());
    const mainImage = imageList.length > 0 && imageList[0] ? imageList[0] : null;
    const makeImageUrls = (image) =>{
        if (!image || image === wine) return image;
        console.log(`https://${image}`);
        return image.startsWith("http") ? image : `https://${image}`;
    };
    const formatTimeSlot = (time) => {
        return time.slice(0,5);
    }


    return (
        <style.TotalContainer>
            <style.TopContainer>
                <style.TopTagContainer>
                    {tagText}
                </style.TopTagContainer>
                <style.CancelContainer onClick={onClickFunction}>
                    {/*<FaXmark size={15} />*/}
                </style.CancelContainer>
            </style.TopContainer>
            <style.ContentContainer>
                <style.ContentImageContainer src={makeImageUrls(mainImage)}  />

                <style.ContentInfoContainer>
                    <style.ContentInfoTitle>
                        {reservation.restaurantName}
                    </style.ContentInfoTitle>
                    <style.ContentInfoCategory>
                    </style.ContentInfoCategory>
                    <style.ContentInfoReservation>
                        {reservation.date} -
                        {formatTimeSlot(reservation.timeSlot)} - {reservation.minCapacity}~{reservation.maxCapacity} 인석
                    </style.ContentInfoReservation>

                </style.ContentInfoContainer>
            </style.ContentContainer>
        </style.TotalContainer>
    )
}
export default VacancyComponent;