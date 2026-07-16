import './Contact.css'

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__content">
        <h2 className="contact__title">Let's Build.</h2>

        <p className="contact__subtitle">
          Open to internships, strong ideas, and meaningful projects.
        </p>

        <p className="contact__car-line">
          <span>//</span> Always ready to talk about cars 🚗
        </p>

        <div className="contact__cards">
          <div className="contact__card">
            <span className="contact__card-label">FOCUS</span>
            <p>Java backend, APIs, databases, and scalable systems</p>
          </div>

          <div className="contact__card">
            <span className="contact__card-label">BASE</span>
            <p>India · Open to remote and Bengaluru opportunities</p>
          </div>

          <div className="contact__card">
            <span className="contact__card-label">STATUS</span>
            <p>B.Tech CSE student, open to software internships</p>
          </div>
        </div>

        <div className="contact__socials">
          <a
            href="https://github.com/UjjwalTyagi-2749"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            GH
          </a>

          <a
            href="https://www.linkedin.com/in/ujjwal-tyagi-5b8b24324/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            in
          </a>

          <a
            href="https://leetcode.com/u/ujwal2749/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
          >
            LC
          </a>

          <a
            href="mailto:tyagiujjwal239@gmail.com"
            aria-label="Email"
          >
            @
          </a>
        </div>

        <div className="contact__footer">
          <span>$ System.exit(0)</span>
          <span>Handcrafted by Ujjwal Tyagi © 2026</span>
        </div>
      </div>
    </section>
  )
}

export default Contact