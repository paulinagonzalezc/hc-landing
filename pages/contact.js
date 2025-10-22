import styles from '../components/Contact.module.css'

export default function ContactPage() {
  return (
    <section className={styles.contactSection}>
      <h1>Get in Touch</h1>
      <p>We’d love to hear from you. Reach out with any questions, feedback, or ideas.</p>

      <div className={styles.contactOptions}>
        <div>
          <h3>Email</h3>
          <p>hello@hashconsole.com</p>
        </div>
        <div>
          <h3>Support</h3>
          <p>Visit our Help Center</p>
        </div>
        <div>
          <h3>Follow Us</h3>
          <p>GitHub · Twitter · LinkedIn</p>
        </div>
      </div>

      <form className={styles.contactForm}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  )
}
