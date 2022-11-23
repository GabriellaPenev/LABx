import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Bios from './components/Bios';
import About from './components/About';
import Strengths from './components/Strengths';
import Contact from './components/Contact';
import Error from './components/Error';
import logo from './assets/labx-logo.png';

function App() {

  return (
    <>
      <header className="wrapper App-header">
        <Link to="/">
          <h1>
            <img src={logo} className="logo" alt="logo" />
          </h1>
        </Link>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/strengths" element={<Strengths />}></Route>
          <Route path="/bios" element={<Bios />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
