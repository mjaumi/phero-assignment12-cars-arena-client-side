import { useEffect, useState } from "react";

const useOnScreen = ref => {
    // integration of react hooks
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        // using observer object
        const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));
        observer.observe(ref.current);
        return () => { observer.disconnect() };
    }, [ref]);

    return isIntersecting;
}

export default useOnScreen;