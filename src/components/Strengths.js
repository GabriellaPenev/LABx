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
                        <ul className='list'>
                            <li className='bold'>&#187; Reimagining Governance</li>
                            <li className='bold'>&#187; Strategic Planning</li>
                            <li className='bold'>&#187; Values and Mission Creation and Revisioning</li>
                            <li className='bold'>&#187; Leadership Training and Coaching</li>
                            <li className='bold'>&#187; Strategic People Planning</li>
                            <li className='bold'>&#187; Operationalizing Values</li>
                            <li className='bold'>&#187; Project Management</li>
                            <li className='bold'>&#187; Values driven fiscal processes</li>
                        </ul>
                        <p>If you do not see your focus area in this list please  <span className='contact-link'><Link to="/contact">contact us</Link></span> to set up a call.</p>
                    </div>
                    <div className='graphic-two'>
                        <img src={graphicTwo} alt="a series of different coloured shapes stacked on top of one another" />
                    </div>
                </div>
                <div className="past-projects-container">
                    <h2>Past Projects</h2>
                    <div className='list'>
                        <h3 className='bold link'>
                            <a href="https://summerworks.ca/" target="blank" rel="noopener noreferrer">SummerWorks
                            </a>
                        </h3>
                        <span className='description'>
                            We worked with the team to balance responsibility between roles in an administrative and artistic leadership team
                        </span>
                        <h3 className='bold link'>
                            <a href="https://www.opera.ca/" target="blank" rel="noopener noreferrer">Association for Opera in Canada</a></h3>
                        <span className='description'>
                            We Project Managed the $540,000 Opera Artist Resililency Project to increasing resiliency in opera artists through paid mentorship and work placements
                        </span>
                        <h3 className='bold link'>
                            <a href="https://www.arts4all.ca/" target="blank" rel="noopener noreferrer">Arts4All</a></h3>
                        <span className='description'>
                            Through one-on-one coaching, we supported skill growth and facilitative support for season planning that looks both to the immediate and future needs of the organization. We helped refine organizational Values
                        </span>
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