import { useState, useEffect, useRef } from 'react';

function FadeInSection(props) {
    const [isVisible, setVisible] = useState(false);

    const domRef = useRef();

    useEffect(() => {

        const onPageLoad = () => {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisible(entry.isIntersecting);
                    }
                });
            });
            observer.observe(domRef.current);
            return () => observer.unobserve(domRef.current);
        }

        // Check if the page has loaded
        if (document.readyState === 'complete') {
            onPageLoad();
        } else {
            window.addEventListener('load', onPageLoad);
            // Remove the event listener when component unmounts
            return () => window.removeEventListener('load', onPageLoad);
        }

    }, []);
    return (
        <div
            className={`fade-in ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}


export default FadeInSection;