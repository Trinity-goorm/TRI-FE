import React, { useState, useEffect, lazy, Suspense } from "react";
import "./style/CustomCalendar.css"; // 기본 스타일 추가

const LazyCalendar = lazy(() => import("react-calendar")); // ✅ 동적 import

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
    today.setHours(0, 0, 0, 0);

    return (
        <Suspense fallback={<div>Loading Calendar...</div>}> {/* ✅ Suspense 추가 */}
            <LazyCalendar
                onChange={handleDateChange}
                value={date}
                calendarType="gregory"
                view="month"
                prev2Label={null}
                next2Label={null}
                showNeighboringMonth={false}
                formatDay={(locale, date) => date.getDate()}
                tileDisabled={({ date }) => date < today}
            />
        </Suspense>
    );
};

export default CustomCalendar;