import FadeInSection from './FadeInSection';
import Nav from './Nav';
import Footer from './Footer';
import kristina from '../assets/kristina.jpg';
import nidhi from '../assets/nidhi.jpg';
import brendan from '../assets/brendan.jpg';


const Bios = () => {
    return (
        <div className='wrapper'>
            <Nav />
            <div className='bios'>
                <FadeInSection>
                    <div className="bio-container">
                        <div className='bio-pic kristina'>
                            <img src={kristina} alt="Headshot of Kristina" />
                        </div>
                        <div className="bio-text">
                        <h3>Kristina Lemieux<span className='pronouns'>(she/her)</span></h3>
                            <p>
                                Kristina Lemieux is a contemporary dancer and accomplished arts manager with more than 20 years of professional experience across Canada. In all that she does, Kristina works to support independent artists across performing disciplines in finding ways to make art outside of the currently prescribed modes.
                            </p>
                            <p>
                                Raised in Treaty 6 territory (rural Alberta), Kristina graduated from the University of Alberta and has lived, worked, and played across Canada from Vancouver, Edmonton, Toronto, and most recently, Saint John. Her passion for the arts has driven collaboration, creation, and innovation in the national arts scene for over a decade. In 2016, Kristina made a move to Toronto to take on the role of Lead Producer of Generator.  In her five years in this leadership role, Kristina coached over 100 artist-producers to strengthen their producing and financial acumen.
                            </p>
                            <p>
                                She is now based out of Saint John, New Brunswick, on the unceded traditional territory of Wolastogiyik, Mi'Kmaq, and Peskotomuhkati.
                            </p>
                        </div>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className="bio-container">
                        <div className="bio-pic brendan">
                            <img src={brendan} alt="Headshot of Brendan" />
                        </div>

                        <div className="bio-text">
                        <h3>Brendan McMurtry-Howlett, M.A.<span className='pronouns'>(he/him)</span></h3>
                            <p>
                                Brendan was born and raised in Tkaronto/Toronto, territory governed by the Dish-with-One-Spoon wampum. He is a director, actor, theatre creator, teacher, facilitator, and artistic leader who has worked across the country and internationally. At the heart of his work is the belief in the arts’ ability to build stronger and more inclusive communities. He was the founding Artistic Director of Shakespeare in the Ruff and led the company over its first five seasons.
                            </p>
                            <p>As a strategic planning consultant and grant writer, Brendan has worked for organizations such as Generator, Dancemakers, re:Naissance Opera, and Actors Repertory Company. He served as the co-chair of Generator’s Strategic Advisory, and participated in the Reimagining Governance project. Brendan is the Chair of the Board for Buddies in Bad Times Theatre helping to initiate community processes of organizational transformation.
                            </p>
                            <p>
                                Brendan is a graduate from the National Theatre School of Canada, was a member of the Banff-Citadel Professional Theatre Training Program, trained with Jumblies Theatre Community Arts Essentials, completed an internship in Artistic Direction with Jillian Keiley at the NAC, and was a 2019 Neil Munro Intern Director at the Shaw Festival. His Master’s degree from York University explored decolonized community-focused approaches to operating arts organizations.
                            </p>
                        </div>
                    </div>
                </FadeInSection >
            </div>

            <FadeInSection>
                <div className="advisor-container">
                    <h2>Key Advisors</h2>
                    <div className="bio-pic nidhi">
                        <img src={nidhi} alt="Headshot of Nidhi" />
                    </div>

                    <div className="bio-text">
                    <h3>Nidhi Khanna, M.A., M.B.A.<span className='pronouns'>(she/her)</span></h3>
                        <p>
                            Nidhi Khanna brings 20 years of experience in cultural production, creative programming, venue operations and social enterprise management to the social impact, non-profit and creative industries. She is passionate about coaching and mentoring to build resilient and inclusive teams and the development of strong operational leaders.
                        </p>
                        <p>
                            An actor by training, Nidhi holds an M.A. in Text and Performance Studies from the Royal Academy of Dramatic Art/King's College London, an MBA from York University’s Schulich School of Business and she is a 2018 Fellow of the Toronto Arts Council’s Leaders Lab. Over the course of her career, Nidhi has worked at the institutional, grassroots and municipal levels including leadership roles at Skills for Change, Artscape, Mississauga Celebration Square, and Meadowvale Theatre.
                        </p>
                        <p>
                            Nidhi’s community work has focused on mentorship of emerging arts leaders with a particular focus on the systemic issues and barriers that face women in the non-profit sector. She is a Board Member for JAYU, a Coach for FORA, a Strategic Advisor for Work In Culture and is the Co-Chair of Generator's inaugural Strategic Advisory Committee.
                        </p>
                    </div>
                </div>

            </FadeInSection>
            <Footer />

        </div >
    )
}

export default Bios;