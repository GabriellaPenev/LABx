import logo from './labxlogo.png';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Bios from './Bios';
import About from './About';
import Contact from './Contact';
import Error from './Error';

function App() {
  return (
    <>
      <header className="wrapper App-header">
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
      </header>

      {/* <p>laboratory x is a collective that brings artistic ways of knowing, community solutions, and a holistic perspective to its work with arts organizations.</p> */}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/bios" element={<Bios />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
