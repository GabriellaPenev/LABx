import { Link, Routes, Route } from 'react-router-dom';
import Bios from './Bios';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import landing from './landing5.png';

const Home = () => {
    return (
        <>
            <div className="landing">
                <img src={landing} alt="overlapping maroon, blue, and grey circles" />
                <Link to="/about" element={<About />}>
                    <button className='enter color-1'>enter</button>
                </Link>
            </div>
        </>
    )
}






export default Home;