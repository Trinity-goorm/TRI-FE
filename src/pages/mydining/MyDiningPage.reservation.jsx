import * as style from "./style/MyDiningPage.sub.js";
import DiningComponent from "../../components/dining/DiningComponent.jsx";
const MyDiningReservation = ({myReservation}) => {
    return (
        <style.TotalWrapper>
            {myReservation.map((reservation, index) => (
                <DiningComponent key={index} tagText={"방문 예정"} reservation={reservation} />
            ))}
        </style.TotalWrapper>
    )
}

export default MyDiningReservation;