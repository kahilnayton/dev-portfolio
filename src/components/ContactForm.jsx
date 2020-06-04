import React from 'react';

export default function ContactForm() {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact</h2>

      <form action="https://formspree.io/kahilnayton@gmail.com" method="POST">
        <input
          type="text"
          id="name"
          className="name-input"
          name="name"
          placeholder="Name"
          required
        />

        <input
          type="email"
          id="email"
          className="email-input"
          name="_replyto"
          placeholder="Email"
          required
        />

        <textarea
          name="message"
          id="message"
          className="message-input"
          placeholder="Type your message here"
          spellcheck="true"
          required
        ></textarea>

        <input
          type="submit"
          id="submit"
          className="submit-btn"
          name="submit"
          value="Submit"
        />
      </form>

      <div className="email">
        <i className="fas fa-envelope"></i>
        <a href="mailto:kahilnayton@gmail.com">kahilnayton@gmail.com</a>
      </div>
    </section>
  );
}
