import { Link, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Contact from './Contact';
import Footer from './Footer';
import FadeInSection from './FadeInSection';
import graphicTwo from '../assets/our-strengths-graphic.png';

const Strengths = () => {
    return (
        <div className='wrapper'>
            <Nav />
            <FadeInSection>
                <div className="strengths-flex-container">
                    <div className='strengths-text'>
                    <h2>Our Strengths</h2>
                        <p>We are currently accepting clients who are focused on these areas in their work:</p>
                        <ul className='strength-list'>
                            <li>&#187; Reimagining Governance</li>
                            <li>&#187; Strategic Planning</li>
                            <li>&#187; Values and Mission Creation and Revisioning</li>
                            <li>&#187; Leadership Training and Coaching</li>
                            <li>&#187; Strategic People Planning</li>
                            <li>&#187; Operationalizing Values</li>
                            <li>&#187; Project Management</li>
                            <li>&#187; Values driven fiscal processes</li>
                        </ul>

                        <p>If you do not see your focus area in this list please  <span className='contact-link'><Link to="/contact">contact us</Link></span> to set up a call.</p>
                    </div>

                    <div className='graphic-two'>
                        <img src={graphicTwo} alt="a series of different coloured shapes stacked on top of one another" />
                    </div>

                </div>
            </FadeInSection>

            <Footer />

            <Routes>
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}


export default Strengths;