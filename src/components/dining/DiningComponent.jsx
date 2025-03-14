import * as style from "./style/DiningComponent.js";
import wine from "../../assets/img/wineBar.jpg";

const DiningComponent = ({tagText, reservation, onCancel}) => {
    const images = reservation?.restaurantImages || [];
    const mainImage = images.length === 0 || images[0] == null ? wine : images[0];
    const makeImageUrls = (image) =>{
        if (!image || image === wine) return image;
        return image.startsWith("http") ? image : `https://${image}`;
    };

    return (
        <style.TotalContainer>
            <style.TopContainer>
                <style.TopTagContainer>
                    {tagText}
                </style.TopTagContainer>
                <style.CancelContainer onClick={onCancel}>
                    <span className="material-icons" style={{fontSize:"20px"}}>close</span>
                </style.CancelContainer>
            </style.TopContainer>
            <style.ContentContainer>
                <style.ContentImageContainer src={makeImageUrls(mainImage)}  />

                <style.ContentInfoContainer>
                    <style.ContentInfoTitle>
                        {reservation.restaurantName}
                    </style.ContentInfoTitle>
                    <style.ContentInfoCategory>
                        {reservation.categories}
                    </style.ContentInfoCategory>
                    <style.ContentInfoReservation>
                        {reservation.reservationDate} -
                        {reservation.reservationTime} - {reservation.seatType.minCapacity}~{reservation.seatType.maxCapacity} 인석
                    </style.ContentInfoReservation>

                </style.ContentInfoContainer>
            </style.ContentContainer>
        </style.TotalContainer>
    )
}
export default DiningComponent;