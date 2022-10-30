import FadeInSection from './FadeInSection';
import kristina from './kristina.jpg';
import nidhi from './nidhi.jpg';
import brendan from './brendan.jpg';
import Footer from './Footer';


const Bios = () => {
    return (
        <>
            <ul className='bio-container'>
                <li>
                    <FadeInSection>
                        <div className='bio-pic'>
                            <img src={kristina} alt="Headshot of Kristina" />
                        </div>

                    </FadeInSection>
                    <FadeInSection>
                        <div className="bio-text">
                            <h3>Kristina Lemieux</h3>
                            <p>
                                Kristina Lemieux is a contemporary dancer and accomplished arts manager with more than
                                20 years of professional experience across Canada. In all that she does, Kristina works to
                                support independent artists across performing disciplines in finding ways to make art
                                outside of the currently prescribed modes.
                            </p>
                            <p>
                                Raised in Treaty 6 territory (rural Alberta), Kristina graduated from the University of
                                Alberta
                                and has lived, worked and played across Canada from Vancouver, Edmonton, Toronto and
                                most recent, Saint John. Her passion for the arts has driven collaboration, creation, and
                                innovation in the national arts scene for over a decade. In 2016, Kristina made a move to
                                Toronto to take on the role of Lead Producer of Generator. In her five years in this
                                leadership role, Kristina coached over 100 artist-producers to strengthen their producing
                                and financial acumen.
                            </p>
                            <p>
                                She is now based out of Saint John, New Brunswick, the unceded traditional territory of the
                                Wolastogiyik/Maliseet, the Mi'Kmaq/Mi'kmaw and Passamaquoddy/Peskotomuhkati. In
                                addition to her work in the arts, Kristina is working with joy and play as the CEO of
                                Splashifax and growing her skills and working in real estate and commercial development.
                            </p>
                        </div>
                    </FadeInSection>
                </li>
                <li>
                    <FadeInSection>
                        <div className="bio-pic">
                            <img src={nidhi} alt="Headshot of Nidhi" />
                        </div>
                    </FadeInSection>
                    <FadeInSection>
                        <div className="bio-text">
                            <h3>Nidhi Khanna, M.A., M.B.A.</h3>
                            <p>
                                Nidhi Khanna brings 20 years of experience in cultural production, creative programming,
                                venue operations and social enterprise management to the social impact, non-profit and
                                creative industries. She is passionate about coaching and mentoring to build resilient and
                                inclusive teams and the development of strong operational leaders.
                            </p>
                            <p>
                                An actor by training, Nidhi holds an M.A. in Text and Performance Studies from the Royal
                                Academy of Dramatic Art/King's College London, an MBA from York University’s Schulich
                                School of Business and she is a 2018 Fellow of the Toronto Arts Council’s Leaders Lab. Over
                                the course of her career, Nidhi has worked at the institutional, grassroots and municipal
                                levels including leadership roles at Skills for Change, Artscape, Mississauga Celebration
                                Square, and Meadowvale Theatre.
                            </p>
                            <p>
                                Nidhi’s community work has focused on mentorship of emerging arts leaders with a
                                particular focus on the systemic issues and barriers that face women in the non-profit
                                sector. She is a Board Member for JAYU, a Coach for FORA, a Strategic Advisor for Work In
                                Culture and served as the Co-Chair of Generator's inaugural Strategic Advisory Committee.
                            </p>
                        </div>
                    </FadeInSection>

                </li>
                <li>
                    <FadeInSection>
                        <div className="bio-pic">
                            <img src={brendan} alt="Headshot of Brendan" />
                        </div>
                    </FadeInSection>
                    <FadeInSection>
                        <div className="bio-text">
                            <h3>Brendan McMurtry-Howlett, M.A.</h3>
                            <p>
                                Brendan was born and raised in the territory governed by the Dish-with-One-Spoon treaty
                                (Tkaronto/Toronto), established between the Anishinaabe, Mississaugas, and the
                                Haudenosaunee – the original care-takers of the land. He is a director, actor, theatre
                                creator, teacher, facilitator, and artistic leader who has worked across the country and
                                internationally. At the heart of his work is the belief in the arts’ ability to build stronger and
                                more inclusive communities. He was the founding Artistic Director of Shakespeare in the
                                Ruff and led the company over its first five seasons.
                            </p>
                            <p>As a strategic planning consultant and grant writer, Brendan has worked for organizations
                                such as Generator, Dancemakers, House + Body, re:Naissance Opera, and Actors Repertory
                                Company. He served as the co-chair of Generator’s Strategic Advisory Committee and
                                participated in the Reimagining Governance project. Brendan has recently been elected as
                                the Chair of the Board for Buddies in Bad Times Theatre helping to initiate community
                                processes of organizational transformation.
                            </p>
                            <p>
                                Brendan’s own education includes graduating from the National Theatre School of Canada,
                                participating in Jumblies Theatre Community Arts Essentials, completing an internship in
                                Artistic Direction with Jillian Keiley at the NAC, and was a 2019 Neil Munro Intern Director
                                at the Shaw Festival. He has recently obtained a Master’s degree from York University
                                exploring decolonized community-focused approaches to operating arts organizations.
                            </p>
                        </div>
                    </FadeInSection>

                </li>
            </ul>
            <Footer />
        </>
    )
}

export default Bios;