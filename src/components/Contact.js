import FadeInSection from './FadeInSection';
import Nav from './Nav';
import Footer from './Footer';
import notebook from '../assets/notebook.jpg';
import { useForm } from '@formspree/react';

const Contact = () => {

    const [submit, setSubmit] = useForm('mdojgjvq');

    if (submit.succeeded) {
        return (
            <>
                <div className='wrapper'>
                    <Nav />
                    <FadeInSection>
                        <div className="contact-container">
                            <img src={notebook} alt="A blank notebook with a plant" />
                            <p className='successful-submit'>Thank you for your message! We'll be in touch soon.</p>
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
                <p className="contact-message">We're always looking to connect with arts organizations looking to reimagine and restructure their operating policies to align with their core values. If you're interested in hearing more about our work, or discussing how we can support your organization, drop us a line below.</p>

                <div className="contact-container">
                    <img src={notebook} alt="A blank notebook with a plant" />

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

