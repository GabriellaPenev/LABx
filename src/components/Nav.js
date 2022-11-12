import { Link, Routes, Route } from 'react-router-dom';
import Bios from './Bios';
import About from './About';
import Contact from './Contact'
import Strengths from './Strengths';
import Error from './Error';
import { useState } from 'react';


const Nav = () => {

    // stores state of list open/close button
    const [listButton, setListButton] = useState(false);

    const openListPanel = () => {
        listButton ? setListButton(false) : setListButton(true)
    }


    return (
        <>

            <nav>
                <div>
                    {/* onClick listButton state changes, nav bars change to X and back */}
                    <button className='listPanelToggle' onClick={openListPanel}>
                        <div className={listButton ? 'line1Active spinner diagonal part-1' : 'spinner diagonal part-1'}></div>
                        <div className={listButton ? 'diagonalActive spinner horizontal' : 'spinner horizontal'}></div>
                        <div className={listButton ? 'line2Active spinner diagonal part-2' : 'spinner diagonal part-2'}></div>
                    </button>


                </div>
                <div className={listButton ? 'listPanel panelActive' : 'listPanel'}>
                    <ul className='nav-menu'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
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

export default Nav;