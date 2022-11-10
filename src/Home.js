import { Link } from 'react-router-dom';
import About from './About';
// import landing from './landing5.png';
import enterbutton from './enter-button.png';

const Home = () => {
    return (
        <>
            <div className="landing">
                <p>Labx is a collaborative consultancy of arts professionals. We envision a sector that embraces collectivity, interdependence, and risk taking.</p>
            
                {/* <img src={landing} alt="overlapping maroon, blue, and grey circles" /> */}
                <div className="leftCircle"></div>
                <div className="rightCircle"></div>
                <div className="arts"><p>arts</p></div>
                <div className="systems"><p>systems</p></div>
                <div className="change"><p>change</p></div>

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