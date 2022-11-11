import { Link } from 'react-router-dom';
import FadeInSection from './FadeInSection';


const Error = () => {
    return (
        <>
            <FadeInSection>
                <p>We couldn't find the page you were looking for. This is either because:</p>
                <ul>
                    <li>There is an error in the URL entered into your web browser. Please check the URL and try again.</li>
                    <li>The page you are looking for has been moved or deleted.</li>
                </ul>
                <p>
                    You can return to our homepage by clicking <Link to="/"><span className='back-home'>here</span></Link>.
                </p>
            </FadeInSection>
        </>
    )
}

export default Error;