import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { projects } from "../data/portfolio.js";
import { TECH_ICONS } from "./Skills.jsx";

const TECH_NAME_TO_ICON = {
  React: "react",
  "React.js": "react",
  "Node.js": "nodejs",
  "Express.js": "express",
  MongoDB: "mongodb",
  HTML: "html5",
  CSS: "css3",
  JavaScript: "javascript",
  Bootstrap: "bootstrap",
  jQuery: "jquery",
  MySQL: "mysql",
  Python: "python",
};

function TechBadge({ name }) {
  const entry = TECH_ICONS[TECH_NAME_TO_ICON[name]];

  return (
    <span
      className="tech-badge"
      style={entry ? { "--tech-color": entry.color } : {}}
    >
      {entry && (
        <entry.Icon
          className="tech-badge-icon"
          style={{ color: entry.color }}
        />
      )}
      {name}
    </span>
  );
}

function displayUrl(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function DetailsMedia({ project }) {
  const hasLive = Boolean(project.live);

  const Wrapper = hasLive ? "a" : "div";

  const wrapperProps = hasLive
    ? {
        href: project.live,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <div className="details-media">
      <div className="details-media-bar">
        <span className="terminal-dot red" />
        <span className="terminal-dot yellow" />
        <span className="terminal-dot green" />

        <span className="details-media-url">
          {hasLive
            ? displayUrl(project.live)
            : "preview — not deployed yet"}
        </span>
      </div>

      <Wrapper
        className="details-media-frame"
        {...wrapperProps}
      >
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="details-media-img"
        />

        {hasLive && (
          <div className="details-media-overlay">
            <span className="details-media-cta">
              <FiExternalLink /> Open Live Site
            </span>
          </div>
        )}
      </Wrapper>
    </div>
  );
}

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <section className="project-details-page">
      <div className="container">

        {/* Back link */}
        <Link to="/projects" className="back-link">
          <FiArrowLeft />
          Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >

          {/* Project heading */}
          <div className="project-header-row">

            <div className="project-heading-content">
              <span className="section-tag">
                {project.category}
              </span>

              <h1 className="section-heading project-detail-title">
                {project.title}
              </h1>

              <p className="section-sub project-detail-period">
                {project.period}
              </p>
            </div>


          </div>

          {/* Project screenshot */}
          <DetailsMedia project={project} />

          {/* Project information */}
          <div className="details-grid">

            <div>
              <div className="details-block">
                <h3>Overview</h3>
                <p>{project.overview}</p>
              </div>

              <div className="details-block">
                <h3>Problem</h3>
                <p>{project.problem}</p>
              </div>

              <div className="details-block">
                <h3>Solution</h3>
                <p>{project.solution}</p>
              </div>

              <div className="details-block">
                <h3>Key Features</h3>

                <ul className="feature-list">
                  {project.features.map((f) => (
                    <li key={f}>
                      <span style={{ color: "var(--primary-2)" }}>
                        ▹
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="details-sidebar">

              <h4>Technologies</h4>

              <div
                className="tech-badges"
                style={{ marginBottom: 24 }}
              >
                {project.technologies.map((t) => (
                  <TechBadge name={t} key={t} />
                ))}
              </div>

              <h4>Links</h4>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glow btn-outline"
                  >
                    <SiGithub />
                    View Code
                  </a>
                ) : (
                  <span
                    style={{
                      color: "var(--muted)",
                      fontSize: "0.9rem",
                    }}
                  >
                    Source code not published yet.
                  </span>
                )}

                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glow btn-outline"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                ) : null}
              </div>

            </aside>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

export default ProjectDetails;