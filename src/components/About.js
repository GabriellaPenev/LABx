import FadeInSection from './FadeInSection';
import Nav from './Nav';
import Footer from './Footer';

const About = () => {
    return (
        <div className='wrapper'>
            <div>
                <Nav />
                <FadeInSection>
                    <h2>About LABx</h2>
                    <p>We envision an arts ecology that embraces collectivity and interdependence. We envision
                        organizations that are guided by community input, leadership, and respond to community
                        needs. We envision an industry that regularly calls upon the strength of artists and creative
                        thinkers to engage in creative processes to discover solutions to organizational and
                        structural challenges. We envision a people-centred field that embraces change, and
                        understands its relationship to the land on which it stands and the communities of which it
                        is part.</p>
                </FadeInSection>


                <FadeInSection>
                    <h2>Our Values</h2>
                    <ul className="values">
                        <li>Collectivity and interconnectedness</li>
                        <li>Art-based creation-based solutions</li>
                        <li>Land as a practical grounding for the work and for connection to community</li>
                    </ul>
                </FadeInSection>
            </div>
            <Footer />
        </div>
    )
}

export default About;