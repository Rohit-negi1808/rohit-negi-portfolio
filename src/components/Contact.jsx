import { useState } from "react";
import { motion } from "framer-motion";
import { FiLinkedin, FiPhone, FiSend, FiCopy, FiCheck } from "react-icons/fi";
import { SiGithub, SiGmail } from "react-icons/si";
import { profile } from "../data/portfolio.js";

// standalone: true when rendered on its own /contact route (adds top padding
// since there's no hero above it there).
function Contact({ standalone = false }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // "sent" | null
  const [copied, setCopied] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setStatus(null);
  }

  // Build the subject/body once so every "send" route uses the same text.
  function buildMessage() {
    const subject = `Portfolio enquiry from ${form.name || "a visitor"}`;
    const body = `Hi Rohit,\n\n${form.message}\n\n—\n${form.name}\n${form.email}`;
    return {
      subject: encodeURIComponent(subject),
      body: encodeURIComponent(body),
    };
  }

  // Gmail's web compose window. This works in any browser, even when the
  // visitor has no desktop mail app configured — which is why it's the
  // default route rather than a plain mailto: link.
  function gmailUrl() {
    const { subject, body } = buildMessage();
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      profile.email
    )}&su=${subject}&body=${body}`;
  }

  function mailtoUrl() {
    const { subject, body } = buildMessage();
    return `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  function handleSubmit(e) {
    e.preventDefault();
    window.open(gmailUrl(), "_blank", "noopener,noreferrer");
    setStatus("sent");
  }

  // Fallback for anyone who prefers their own mail app.
  function openMailApp() {
    window.location.href = mailtoUrl();
    setStatus("sent");
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      // Clipboard API can be blocked; the address is visible above anyway.
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section
      id="contact"
      style={standalone ? { paddingTop: "calc(var(--nav-h) + 60px)" } : {}}
    >
      <div className="container">
        <span className="section-tag">{"// contact"}</span>
        <h2 className="section-heading">Let's work together</h2>
        <p className="section-sub">
          Have a role, project or just want to say hi? My inbox is open.
        </p>

        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="contact-info-item">
              <span className="icon-wrap" style={{ "--icon-color": "#EA4335" }}>
                <SiGmail />
              </span>
              <div>
                <div className="label">Email</div>
                <a className="value" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </div>
              <button
                type="button"
                className="copy-btn"
                onClick={copyEmail}
                aria-label="Copy email address"
                title="Copy email address"
              >
                {copied ? <FiCheck /> : <FiCopy />}
              </button>
            </div>

            <div className="contact-info-item">
              <span className="icon-wrap">
                <FiPhone />
              </span>
              <div>
                <div className="label">Phone</div>
                <a className="value" href={`tel:${profile.phone}`}>
                  {profile.phone}
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="icon-wrap" style={{ "--icon-color": "#8B8B8B" }}>
                <SiGithub />
              </span>
              <div>
                <div className="label">GitHub</div>
                <a
                  className="value"
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {profile.social.github.replace("https://", "")}
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="icon-wrap" style={{ "--icon-color": "#0A66C2" }}>
                <FiLinkedin />
              </span>
              <div>
                <div className="label">LinkedIn</div>
                <a
                  className="value"
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {profile.social.linkedin.replace("https://", "")}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="form-control-custom"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className="form-control-custom"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about the role or project…"
                className="form-control-custom"
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <div className="form-actions">
              <button type="submit" className="btn-glow btn-primary">
                Send Message <FiSend />
              </button>
              <button
                type="button"
                className="btn-glow btn-outline"
                onClick={openMailApp}
              >
                Use my mail app
              </button>
            </div>

            {status === "sent" ? (
              <p className="form-note form-note-ok">
                Your message is ready in a compose window — just hit send there
                and it lands straight in my inbox. If nothing opened, write to{" "}
                <a href={`mailto:${profile.email}`}>{profile.email}</a>.
              </p>
            ) : (
              <p className="form-note">
                Sending opens a pre-filled compose window addressed to me, so
                your message reaches my inbox directly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
