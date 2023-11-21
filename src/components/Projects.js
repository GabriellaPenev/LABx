import { Link, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Contact from './Contact';
import Footer from './Footer';
import FadeInSection from './FadeInSection';
import graphicTwo from '../assets/our-strengths-graphic.png';

const Projects = () => {
    return (
        <div className='wrapper'>
            <Nav />
            <FadeInSection>
                <div className="strengths-flex-container">
                    <div className='strengths-text'>
                        <h2>Decolonizing Governance</h2>
                        <span className='description'>
                            <p className='italics'>
                                You can’t dismantle what you don’t understand.
                            </p>
                            <p>
                                With support from Canada Council for the Arts’ Seed Grant, lab x has launched a new research project on decolonizing governance systems in the arts.
                            </p>
                            <p>
                                To decolonize the arts, we must take a hard look at the foundational funding and organizational structures of arts organizations: incorporation. We are exploring the implications of removing the arts from the colonial constraints of the charitable incorporation sector, incorporating not-for-profit structures, and looking for new alternatives.
                            </p>
                            <p>
                                Through research, interviews with the sector’s leading thinkers, and imagining new possibilities, we will build a roadmap towards alternatives and a strong foundation for arts-based sector-wide transformation.
                            </p>
                            <p>
                                This is the first phase of an intended multi-year program that offers select organizations the opportunity to create and practice new models of reporting and accountability.
                            </p>
                            <p>If you are interested in learning more, please <span className='contact-link'><Link to="/contact">get in touch with us</Link></span>.</p>
                        </span>
                    </div>
                    <div className='graphic-two'>
                        <img src={graphicTwo} alt="a series of different coloured shapes stacked on top of one another" />
                    </div>
                </div>
                <div className='relative'>

                    <h3>Phase One (Current)* - Research</h3>
                    <ul className="values">
                        <li>Meet with Funders</li>
                        <li>Find partners for program piloting</li>
                        <li>Find Advisory Partnerss</li>
                    </ul>
                    <h3>Phase Two (January 2024 - June 2024)</h3>
                    <ul className="values">
                        <li>Create Pilot Model</li>
                    </ul>
                    <h3>Phase Three (June 2024-June 2025)</h3>
                    <ul className="values">
                        <li>Piloting</li>
                        <li>Sharing Results</li>
                    </ul>

                    <span className='astrix'>*Funded by Canada Council for the Arts - Seed Grant</span>
                </div>
            </FadeInSection>
            <Footer />
            <Routes>
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}


export default Projects;