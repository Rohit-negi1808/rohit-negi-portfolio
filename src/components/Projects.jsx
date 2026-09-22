import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { projects, projectCategories } from "../data/portfolio.js";
import { TECH_ICONS } from "./Skills.jsx";

// Maps a technology's display name (as written in portfolio.js) to the
// icon key used in Skills.jsx's TECH_ICONS map, so badges here show the
// same real, colored logos as the Skills section.
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
    <span className="tech-badge" style={entry ? { "--tech-color": entry.color } : {}}>
      {entry && <entry.Icon className="tech-badge-icon" style={{ color: entry.color }} />}
      {name}
    </span>
  );
}

function ProjectCard({ project }) {
  const navigate = useNavigate();
  const detailsUrl = `/projects/${project.id}`;

  return (
    <motion.div
      layout
      className="project-card"
      role="link"
      tabIndex={0}
      onClick={() => navigate(detailsUrl)}
      onKeyDown={(e) => {
        if (e.key === "Enter") navigate(detailsUrl);
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="project-image">
        <img src={project.image} alt={`${project.title} preview`} />
      </div>
      <div className="project-body">
        <span className="project-category">{project.category}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.shortDescription}</p>

        <div className="tech-badges">
          {project.technologies.map((t) => (
            <TechBadge name={t} key={t} />
          ))}
        </div>

        <div className="project-links">
          <Link
            to={detailsUrl}
            className="project-link"
            onClick={(e) => e.stopPropagation()}
          >
            View Details <FiArrowUpRight />
          </Link>
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link muted-link"
              aria-label={`${project.title} GitHub repository`}
              onClick={(e) => e.stopPropagation()}
            >
              <SiGithub />
            </a>
          ) : null}
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link muted-link"
              aria-label={`${project.title} live demo`}
              onClick={(e) => e.stopPropagation()}
            >
              <FiExternalLink />
            </a>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

// `limit`: used on the home page to show only a few "featured" projects.
// When omitted (on the /projects route), all projects + filters are shown.
function Projects({ limit }) {
  const [active, setActive] = useState("All");
  const isFeatured = Boolean(limit);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  const visible = isFeatured ? projects.slice(0, limit) : filtered;

  return (
    <section id="projects">
      <div className="container">
        <span className="section-tag">{"// projects"}</span>
        <h2 className="section-heading">
          {isFeatured ? "Featured projects" : "All projects"}
        </h2>
        <p className="section-sub">
          {isFeatured
            ? "A few things I've built recently. Click a card for the full breakdown."
            : "Everything I've built, filterable by category. Click a card for the full breakdown."}
        </p>

        {!isFeatured && (
          <div className="filter-row">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                className={`filter-pill ${active === cat ? "active" : ""}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </AnimatePresence>
        </motion.div>

        {isFeatured && (
          <div className="view-all-wrap">
            <Link to="/projects" className="btn-glow btn-outline">
              View All Projects
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
