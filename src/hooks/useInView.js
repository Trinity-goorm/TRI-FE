import { useEffect, useRef,  useState } from "react";

const useInView = (options) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
            setInView(entry.isIntersecting),
                options

        });

        return () => observer.disconnect();
    })
};
