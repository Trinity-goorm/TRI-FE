import { createContext, useContext, useRef, useState, useEffect } from "react";

const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
    const [isTicketUse, setIsTicketUse] = useState(null);
    const [isReservation, setIsReservation] = useState(null);
    return (
        <PaymentContext.Provider value={{ isReservation, setIsReservation }}>
            {children}
        </PaymentContext.Provider>
    )
};


export const usePaymentContext = () => {
    const context = useContext(PaymentContext);

    return context;
};