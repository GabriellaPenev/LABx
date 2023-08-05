// import { Link, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
// import Bios from './Bios';
// import About from './About';
// import Contact from './Contact'
// import Strengths from './Strengths';
// import Error from './Error';
import FocusLock from 'react-focus-lock';
import NavMenu from './NavMenu';

const Nav = () => {

    // stores state of list open/close button
    const [navButton, setNavButton] = useState(false);

    return (
        <>
            {navButton
                ?
                <FocusLock>
                    <NavMenu
                        navButton={navButton}
                        setNavButton={setNavButton}
                    />
                </FocusLock>
                :
                <NavMenu
                    navButton={navButton}
                    setNavButton={setNavButton}
                />
            }
        </>
    )

}

export default Nav;