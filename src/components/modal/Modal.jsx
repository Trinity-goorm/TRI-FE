import * as style from "./style/Modal.js";
import { useNavigate } from "react-router-dom";

const Modal = ({onClickGoBack, isOpen, onClose, onConfirm, message, positionx, positiony, borderRadius, innerMessage}) => {
    const navigate = useNavigate();

    if (!isOpen) return null;

    return (
        <style.BackGround positionx={positionx} positiony={positiony} >
            <style.ModalContainer borderRadius={borderRadius}>
                <style.MessageContainer>
                    <style.Message>
                        {message}
                    </style.Message>
                </style.MessageContainer>
                <style.InnerMessageContainer>
                    {innerMessage}
                </style.InnerMessageContainer>
                <style.ButtonContainer>
                    <style.ButtonEach onClick={onClose}>취소</style.ButtonEach>
                    <style.ButtonConfirm onClick={onConfirm}>확인</style.ButtonConfirm>
                </style.ButtonContainer>
            </style.ModalContainer>
        </style.BackGround>
    )
}

export default Modal;