import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

// Preview component for Contact Page
const Contact = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <main>
        <h1>${entry.getIn(['data', 'title'], null)}</h1>
        <hr/>

        ${this.props.widgetFor('body')}

        <!-- Contact Form Placeholder (for illustrative purposes) -->
        <form class="contact-form" name="contact">
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            autocomplete="name"
            placeholder="Your name"
            title="Please enter your name"
            required
          />
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            autocomplete="email"
            placeholder="Your email address"
            title="The domain portion of the email address is invalid (the portion after the @)."
            required
          />
          <label for="message">Message</label>
          <textarea name="message" id="message" placeholder="Write your message here" rows="7" required></textarea>
          <button class="contact-form__submit btn" type="submit" name="submit">Send Message</button>
        </form>
      </main>
    `;
  },
});

export default Contact;
