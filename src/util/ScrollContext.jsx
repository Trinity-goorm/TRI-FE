import { createContext, useContext, useRef, useState, useEffect } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
    const isScrolledRef = useRef(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 200;
            if (isScrolledRef.current !== scrolled) {
                isScrolledRef.current = scrolled;
                setIsScrolled(scrolled);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <ScrollContext.Provider value={{ isScrolled }}>
            {children}
        </ScrollContext.Provider>
    );
};

export const useScroll = () => useContext(ScrollContext);