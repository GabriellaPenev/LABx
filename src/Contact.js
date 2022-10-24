const Contact = () => {
    return (
        <>
            <form id="contact-form" action="https://formspree.io/f/mdojgjvq" method="POST">
                <fieldset>

                    <label for="name" class="sr-only">Name</label>
                    <input type="text" name="name" id="name" placeholder="name" maxlength="60" required></input>

                    <label for="email" class="sr-only">Email</label>
                    <input type="email" name="email" id="email" placeholder="email" maxlength="60" required></input>

                    <label for="submit" class="sr-only">write me a message</label>
                    <textarea id="submit" name="message" placeholder="write me a message" maxlength="500"
                        required></textarea>

                    <button type="submit" class="submit">Send Message</button>

                </fieldset>
                <p id="form-status"></p>
            </form>

        </>
    )
}

export default Contact;