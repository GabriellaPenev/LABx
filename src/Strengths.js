import FadeInSection from './FadeInSection';
import Footer from './Footer';
import notebook from './notebook.jpg';
import { Link, Routes, Route } from 'react-router-dom';
import Bios from './Bios';
import Contact from './Contact';
import About from './About';
import Error from './Error';

const Strengths = () => {
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
                    <h2>
                        Selected Service Offerings
                    </h2>
                    <div>
                        <h3>&#187; Governance Re-imagining/Restructuring</h3>
                        <p>The non-profit governance system is flawed. It disempowers the arts workers at the centre
                            of an organization and the community to which they are accountable.</p>
                        <p>We offer processes and alternative models of practicing collaborative governance that
                            identifies the various areas of need and finds a structure and decision-making process that
                            addresses those needs. This is done with the goal of investing the power in the community
                            and the arts workers of the organization.</p>
                        <p>Our process calls in a broad network of supporters and community members and generates
                            practices that enables governance to tap expert and experiential knowledge from those
                            with the deepest connections to the core work and programming of the organization. We
                            also help to account for the legal and administrative requirements to comply with
                            provincial and federal non-profit and charitable laws.</p>
                    </div>
                </FadeInSection>

                <FadeInSection>
                    <div>
                        <h3>&#187; Establishing a Strong Vision and Values</h3>
                        <p>Your organization’s vision and values guide everything you do, and more importantly how
                            you do it. Strong and well-articulated values can determine your personnel’s ability to
                            collaborate, sustain open communication, and enable self-guidance in your operations.</p>
                        <p>We facilitate a multi-phase process that involves extensive research within the community
                            of your organization. We help you find clarity on your context, establish the core vision and
                            values, and then identify the manifestation of those values through your operating
                            structures, governance, community relationships, leadership structure, and programming.
                            We understand that values are not a static thing, but a practice that must be present in the
                            day-to-day functioning and we offer sustained facilitation that gives time and space for the
                            experiential practice of operating from your values.</p>
                    </div>
                </FadeInSection>

                <FadeInSection>
                    <div>
                        <h3>&#187; Leadership searches, job calls, sustained staff coaching</h3>
                        <p>The current multi-faceted crisis in the arts is making many arts organizations re-examine
                            their leadership and staffing models, looking to address the systemic racism embedded in
                            their operations. In many cases, this examination is coinciding with a leadership transition.
                            In the search for new staff and leaders, conscious care must be taken to communicate and
                            circulate the calls in ways that encourage candidates who might not have traditionally seen
                            themselves in the role. It is then crucial that these candidates have the necessary supports
                            within the organization to succeed in their new role.</p>
                        <p>When we work with your organization we help you identify the challenges of current
                            staffing or leadership models, facilitate the necessary changes, and then help craft a job call
                            that reflects the new paradigm. We put extensive consideration into the community
                            circulation of the job call and host community info sessions to encourage a wide range of
                            applications. We know that community accountability is crucial for all levels of hirings at
                            arts organizations and we strive to create a hiring process that reflects broad community
                            support through the process. When a new staff member or leader is in place, we can
                            provide sustained support and coaching as the new hire navigates the organization and the
                            role.</p>
                    </div>
                </FadeInSection>
        
            <Footer />


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


export default Strengths;