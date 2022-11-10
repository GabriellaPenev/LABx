import FadeInSection from './FadeInSection';
import Footer from './Footer';
import notebook from './notebook.jpg';
import { Link, Routes, Route } from 'react-router-dom';
import Bios from './Bios';
import Strengths from './Strengths';
import About from './About';
import Error from './Error';

const Contact = () => {
    return (
        <div className='wrapper'>
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
                        <Link to="/strengths">Our Strengths</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <FadeInSection>
                <p className="contact-message">We're always looking to connect with arts organizations looking to reimagine and restructure their operating policies to align with their core values. If you're interested in hearing more about our work, or discussing how we can support your organization, drop us a line below.</p>

                <div className="contact-container">
                    <img src={notebook} alt="A blank notebook with a plant" />

                    <form id="contact-form" action="https://formspree.io/f/mdojgjvq" method="POST">
                        <fieldset>

                            <label htmlFor="name" className="sr-only">Name</label>
                            <input type="text" name="name" id="name" placeholder="name" maxLength="60" required></input>

                            <label htmlFor="email" className="sr-only">Email</label>
                            <input type="email" name="email" id="email" placeholder="email" maxLength="60" required></input>

                            <label htmlFor="submit" className="sr-only">write message</label>
                            <textarea id="submit" name="message" placeholder="write message" maxLength="500"
                                required></textarea>

                            <button type="submit" className="submit">send message</button>

                        </fieldset>
                        <p id="form-status"></p>
                    </form>

                </div>

                <Footer />

            </FadeInSection>


            <Routes>
                <Route path="/" />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/strengths" element={<Strengths />}></Route>
                <Route path="/bios" element={<Bios />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    )
}

export default Contact;

