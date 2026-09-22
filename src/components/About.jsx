import { motion } from "framer-motion";
import { about } from "../data/portfolio.js";

function About() {
  return (
    <section id="about">
      <div className="container">
        <span className="section-tag">{"// about"}</span>
        <h2 className="section-heading">A bit about me</h2>

        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <div className="focus-list">
              {about.focusAreas.map((f) => (
                <div className="focus-item" key={f}>
                  <span className="dot" />
                  {f}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {about.quickFacts.map((fact) => (
              <div className="about-card-row" key={fact.label}>
                <span>{fact.label}</span>
                <span>{fact.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
