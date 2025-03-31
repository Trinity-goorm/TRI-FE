import { useEffect, useRef,  useState } from "react";

const useInView = (callback, options) => {
    const targetRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(callback, options);

        requestAnimationFrame(() => {
            if(targetRef.current) {
                observer.observe(targetRef.current);
            }
        });
        return () => observer.disconnect();
    },[callback, options]);

    return targetRef;
};

export default useInView;