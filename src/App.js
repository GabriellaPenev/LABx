import logo from './labxlogo.png';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';

import Bios from './Bios';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import landing from './landing4.png';

function App() {
  return (
    <>
      <div className="wrapper">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
          <nav>
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
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          {/* <h1>laboratory x is a collective that brings artistic ways of knowing, community solutions, and a holistic perspective to its work with arts organizations.</h1> */}

        </header>
        <Routes>
          <Route path="/" />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bios" element={<Bios />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    <div className="landing">
      <img src={landing} alt="graphic image of overlapping pink, blue, and grey circles" />
    </div>
    </>

  );
}

export default App;
