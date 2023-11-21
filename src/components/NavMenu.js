import { Link, Routes, Route } from 'react-router-dom';
import Bios from './Bios';
import About from './About';
import Contact from './Contact'
import Strengths from './Strengths';
import Error from './Error';

const NavMenu = ( {navButton, setNavButton}) => {

    const openNav = () => {
        navButton ? setNavButton(false) : setNavButton(true)
    }


    return (
        <>
            <nav>
                <div>
                    <button className='listPanelToggle' onClick={openNav}>

                        <div className={navButton ? 'line1Active spinner diagonal part-1' : 'spinner diagonal part-1'}></div>
                        <div className={navButton ? 'diagonalActive spinner horizontal' : 'spinner horizontal'}></div>
                        <div className={navButton ? 'line2Active spinner diagonal part-2' : 'spinner diagonal part-2'}></div>
                    </button>

                    <div className={navButton ? 'listPanel panelActive' : 'listPanel listHidden'}>

                        <ul className='nav-menu'>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/projects">Current Projects</Link>
                            </li>
                            <li>
                                <Link to="/bios">Who We Are</Link>
                            </li>
                            <li>
                                <Link to="/strengths">Our Strengths</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/" />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/strengths" element={<Strengths />} />
                <Route path="/bios" element={<Bios />} />
                <Route path="*" element={<Error />} />
            </Routes>

        </>
    )

}

export default NavMenu;