import { createContext, useContext, useRef, useState, useEffect } from "react";

const CalendarContext = createContext();

export const CalendarProvider = ({ children }) => {

    //formatDate 변환 함수
    const formatDate = (date) => {
        return new Date( date.getTime() + 9 * 60 * 60 * 1000 )
            .toISOString()
            .split("T")[0];
    };
    const [selectDate, setSelectDate] = useState(formatDate(new Date()));
    return (
        <CalendarContext.Provider value={{ selectDate, setSelectDate }}>
            {children}
        </CalendarContext.Provider>
    )
};


export const useCalendar = () => {
    const context = useContext(CalendarContext);
    if (!context) {
        throw new Error("useCalendar must be used within a CalendarProvider");
    }
    return context;
};