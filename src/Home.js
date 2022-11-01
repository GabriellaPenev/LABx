import { Link } from 'react-router-dom';
import About from './About';
import landing from './landing5.png';
import enterbutton from './enter-button.png';

const Home = () => {
    return (
        <>
            <div className="landing">
                <img src={landing} alt="overlapping maroon, blue, and grey circles" />
                <Link to="/about" element={<About />}>
                    <button className='enter'>
                        <img src={enterbutton} alt="enter site" />
                    </button>
                </Link>
            </div>
        </>
    )
}

export default Home;