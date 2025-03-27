import { createContext, useContext, useRef, useState, useEffect } from "react";

const PaymentTicketContext = createContext();

export const PaymentTicketProvider = ({ children }) => {
    const [isTicketUse, setIsTicketUse] = useState(null);
    return (
        <PaymentTicketContext.Provider value={{ isTicketUse, setIsTicketUse }}>
            {children}
        </PaymentTicketContext.Provider>
    )
};


export const usePaymentTicketContext = () => {
    const context = useContext(PaymentTicketContext);

    return context;
};