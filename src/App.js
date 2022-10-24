import logo from './labxlogo.png';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Bios from './Bios';
import About from './About';
import Contact from './Contact';
import Error from './Error';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <h1>Laboratory x</h1>
        <nav>
          <ul>
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
      </header>
      <Routes>
        <Route path="/"/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bios" element={<Bios />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
