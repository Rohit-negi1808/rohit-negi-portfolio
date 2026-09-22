import { motion } from "framer-motion";
import { education, certifications } from "../data/portfolio.js";

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <span className="section-tag">{"// experience"}</span>
        <h2 className="section-heading">Education & certifications</h2>
        <p className="section-sub">
          My academic background alongside the certifications I've earned
          while sharpening my development skills.
        </p>

        <div className="two-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h3 style={{ fontSize: "1.15rem", marginBottom: 24 }}>Education</h3>
            <div className="timeline">
              {education.map((item) => (
                <div className="timeline-item" key={item.degree}>
                  <span className="timeline-period">{item.period}</span>
                  <h4 className="timeline-title">{item.degree}</h4>
                  <p className="timeline-sub">
                    {item.institution} ({item.score})
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 style={{ fontSize: "1.15rem", marginBottom: 24 }}>
              Certifications
            </h3>
            {certifications.map((cert) => (
              <div className="cert-card" key={cert.title}>
                <div className="cert-title">{cert.title}</div>
                <div className="cert-meta">
                  {cert.issuer} ({cert.date})
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
