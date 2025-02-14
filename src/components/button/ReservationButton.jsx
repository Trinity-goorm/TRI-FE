import * as style from "./style/ReservationButton.js";

const ReservationButton = ({name, width, height, backcolor, border, namecolor}) => {

    return(
        <style.ButtonContainer width={width} height={height} backcolor={backcolor} border={border} namecolor={namecolor}>
            {name}
        </style.ButtonContainer>
    )
}
export default ReservationButton;