import { FiLinkedin } from "react-icons/fi";
import { SiGithub, SiGmail } from "react-icons/si";
import { profile } from "../data/portfolio.js";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="nav-logo" style={{ marginBottom: 8 }}>
              rohit<span>.dev</span>
            </div>
            <p style={{ fontSize: "0.9rem" }}>{profile.title}</p>
          </div>

          <ul className="footer-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <div className="footer-socials">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{ "--icon-color": "#8B8B8B" }}
            >
              <SiGithub />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{ "--icon-color": "#0A66C2" }}
            >
              <FiLinkedin />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              style={{ "--icon-color": "#EA4335" }}
            >
              <SiGmail />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} {profile.name}. All rights reserved.
          </span>
          <span>Built with React</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
