import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "./style/CustomCalendar.css"; // 기본 스타일 추가

const CustomCalendar = ({ onSelectDate, selectedDate }) => {
    const [date, setDate] = useState(selectedDate ? new Date(selectedDate) : new Date());

    useEffect(() => {
        if (selectedDate) {
            setDate(new Date(selectedDate));
        }
    }, [selectedDate]);

    const handleDateChange = (newDate) => {
        setDate(newDate);
        onSelectDate(newDate);
    };
    const today = new Date();
    today.setHours(0,0,0,0);

    return (

    <Calendar
        onChange={handleDateChange}
        value={date}
        calendarType="gregory"
        view="month"
        prev2Label={null}
        next2Label={null}
        showNeighboringMonth={false}
        formatDay={(locale, date) => date.getDate()}
        tileDisabled={({ date }) => date < today }
    />


);
};

export default CustomCalendar;