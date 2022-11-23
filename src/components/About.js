import { Link, Routes, Route } from 'react-router-dom';
import FadeInSection from './FadeInSection';
import Nav from './Nav';
import Contact from './Contact'
import Footer from './Footer';
import graphicOne from '../assets/about-us-graphic.png';

const About = () => {
    return (
        <div className='wrapper'>
            <div>
                <Nav />
                <FadeInSection>
                    <div className="about-flex-container">

                        <div className="about-text">
                            <h2>About Us</h2>
                            <p>We are artists and administrators making change in our sector through holistic solutions. Our multidisciplinary team takes a collaborative approach in helping organizations navigate complex challenges from a people-centred perspective.</p>

                            <h2>We Believe...</h2>
                            <ul className="values">
                                <li>Artistic and creative thinking can uncover unexpected solutions</li>
                                <li>Collaborative processes that embrace uncertainty create lasting change</li>
                                <li>Chain reactions of transformation start with the individuals</li>
                                <li>Timelines must be responsive to allow for the digestion and integration of the work</li>
                            </ul>

                            <p className='contact-link'><Link to="/contact">Partner with us to change the arts</Link></p>
                        </div>
                        <div className='graphic-one'>
                            <img src={graphicOne} alt="a series of different coloured shapes stacked on top of one another" />
                        </div>
                    </div>
                </FadeInSection>
            </div>
            <Footer />
            <Routes>
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>

    )
}

export default About;