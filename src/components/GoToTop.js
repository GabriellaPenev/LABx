import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

const GoToTop = () => {

    const location = useLocation();
    const toTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }


    useEffect(() => {
        toTop()
    }, [location]);

    return null;
}

export default GoToTop;