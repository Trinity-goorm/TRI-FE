import {useCallback, useRef, useState} from "react";

const useThrottle = (delay = 0) => {
    const timerRef = useRef(null);
    return (func) => {
        if (timerRef.current) return;
        timerRef.current = setTimeout(() => {
            func();
            timerRef.current = null;
        }, delay);
    }
}

export const useDraggable = (scrollRef) => {
    const [isDragging, setIsDragging] = useState(true);
    const [startX, setStartX] = useState(0);
    const [totalX, setTotalX] = useState(0);

    const throttle = useThrottle(16);

    const preventUnexpectedEffects = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
    },[])

    const onDragStart = (e) => {
        //preventUnexpectedEffects(e);
        setIsDragging(true);
        const x = e.clientX;
        setStartX(x);

        if (scrollRef.current) {
            setTotalX(x + scrollRef.current.scrollLeft);
        }
    };

    const onDragMove = (e) => {
        if (!isDragging) return;
        throttle(() => {
            const scrollLeft = totalX - e.clientX;
            scrollRef.current.scrollLeft = scrollLeft;
        })
    };

    const onDragEnd = (e) => {
        if (!isDragging) return;
        setIsDragging(false);
        const endX = e.clientX;
        const dragDiff = Math.abs(startX - endX);
        const childNodes = Array.from(scrollRef.current.childNodes);

     /*   if (dragDiff > 10){
            childNodes.forEach((child) => {
                child.addEventListener('click', preventUnexpectedEffects);
            })
        }else{
            childNodes.forEach((child) => {
                child.removeEventListener('click', preventUnexpectedEffects);
            })
        }*/
    };

    return {
        onMouseDown: onDragStart,
        onMouseMove: onDragMove,
        onMouseUp: onDragEnd,
        onMouseLeave: onDragEnd,
    }
}