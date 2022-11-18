import FadeInSection from './FadeInSection';
import Nav from './Nav';
import Footer from './Footer';
import notebook from '../assets/notebook.jpg';
import { useForm } from '@formspree/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

    const [submit, setSubmit] = useForm('mvoyygwk');

    if (submit.succeeded) {
        return (
            <>
                <div className='wrapper'>
                    <Nav />
                    <FadeInSection>
                    <h2>Get In Touch</h2>
                        <div className="contact-container">
                            <img src={notebook} alt="A blank notebook with a plant" />
                            <p className='successful-submit'>Thank you for your message! We'll be in touch soon.</p>
                        </div>
                        <div>
                            <a href='https://www.instagram.com/labximpact/?hl=en'>
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                        <Footer />
                    </FadeInSection>
                </div>
            </>
        )
    }

    return (
        <div className='wrapper'>
            <Nav />

            <FadeInSection>
            <h2>Get In Touch</h2>
                <div className="contact-message">
                    <p>We're looking to connect with arts organizations that seek to reimagine their operating policies to align with their core values. 
                        If you're interested in learning more about our work, or discussing how we can support your organization, drop us a line below.
                    </p>
                </div>

                <div className="contact-container">
                    <div className="contact-image">
                        <img src={notebook} alt="A blank notebook with a plant" />

                        <div className='instagram'>
                            <a href='https://www.instagram.com/labximpact/?hl=en' target='_blank' rel='noopener noreferrer'>
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    </div>

                    <form onSubmit={setSubmit}>
                        <fieldset>

                            <label htmlFor="name" className="sr-only">Name</label>
                            <input type="text" name="name" id="name" placeholder="name" maxLength="60" required></input>

                            <label htmlFor="email" className="sr-only">Email</label>
                            <input type="email" name="email" id="email" placeholder="email" maxLength="60" required></input>

                            <label htmlFor="submit" className="sr-only">write message</label>
                            <textarea id="submit" name="message" placeholder="write message" maxLength="500"
                                required></textarea>

                            <button type="submit" className="submit" disabled={submit.submitting}>send message</button>

                        </fieldset>
                    </form>
                </div>
                <Footer />
            </FadeInSection>
        </div>
    )
}

export default Contact;

