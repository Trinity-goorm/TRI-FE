import * as style from "./style/Modal.js";
import { useNavigate } from "react-router-dom";

const Modal = ({onClickGoBack}) => {
    const navigate = useNavigate();
    return (
        <style.BackGround>
            <style.ModalContainer onClick={onClickGoBack}>

            </style.ModalContainer>
        </style.BackGround>
    )
}

export default Modal;