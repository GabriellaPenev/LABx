import FadeInSection from './FadeInSection';
import Footer from './Footer';
import notebook from './notebook.jpg';


const Contact = () => {
    return (
        <>
        <FadeInSection>
            <p className="contact-message">We're always looking to connect with arts organizations looking to reimagine and restructure their operating policies to align with their core values. If you're interested in hearing more about our work, or discussing how we can support your organization, drop us a line below.</p>

            <div className="contact-container">
                <img src={notebook} alt="A blank notebook with a plant" />

                <form id="contact-form" action="https://formspree.io/f/mdojgjvq" method="POST">
                    <fieldset>

                        <label htmlFor="name" className="sr-only">Name</label>
                        <input type="text" name="name" id="name" placeholder="name" maxLength="60" required></input>

                        <label htmlFor="email" className="sr-only">Email</label>
                        <input type="email" name="email" id="email" placeholder="email" maxLength="60" required></input>

                        <label htmlFor="submit" className="sr-only">write message</label>
                        <textarea id="submit" name="message" placeholder="write message" maxLength="500"
                            required></textarea>

                        <button type="submit" className="submit">send message</button>

                    </fieldset>
                    <p id="form-status"></p>
                </form>

            </div>

            <Footer />
                </FadeInSection>
        </>
    )
}

export default Contact;