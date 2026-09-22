import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiJavascript,
  SiPython,
  SiC,
  SiHtml5,
  SiCss,
  SiReact,
  SiBootstrap,
  SiJquery,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiNumpy,
  SiPandas,
  SiGit,
  SiGithub,
  SiJupyter,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { TbChartLine, TbChartArea, TbChartBar, TbTable } from "react-icons/tb";
import { skills, skillCategories } from "../data/portfolio.js";

// Maps the `icon` string in portfolio.js to a real icon component, plus
// that technology's own brand color. This is what makes the grid feel like
// actual logos instead of a flat, single-tint icon set.
// Add a new entry here if you add a skill with a new icon key.
// Exported so the Projects section can reuse the same real, colored logos
// on its technology badges.
export const TECH_ICONS = {
  javascript: { Icon: SiJavascript, color: "#F7DF1E" },
  python: { Icon: SiPython, color: "#3776AB" },
  c: { Icon: SiC, color: "#A8B9CC" },

  html5: { Icon: SiHtml5, color: "#E34F26" },
  css3: { Icon: SiCss, color: "#663399" },
  react: { Icon: SiReact, color: "#61DAFB" },
  bootstrap: { Icon: SiBootstrap, color: "#7952B3" },
  jquery: { Icon: SiJquery, color: "#0769AD" },

  nodejs: { Icon: SiNodedotjs, color: "#5FA04E" },
  express: { Icon: SiExpress, color: "#8A8A8A" },

  mysql: { Icon: SiMysql, color: "#4479A1" },
  mongodb: { Icon: SiMongodb, color: "#47A248" },

  numpy: { Icon: SiNumpy, color: "#4DABCF" },
  pandas: { Icon: SiPandas, color: "#150458" },
  matplotlib: { Icon: TbChartLine, color: "#E15759" },
  seaborn: { Icon: TbChartArea, color: "#3B82C4" },

  git: { Icon: SiGit, color: "#F05032" },
  github: { Icon: SiGithub, color: "#8B8B8B" },
  vscode: { Icon: VscCode, color: "#007ACC" },
  jupyter: { Icon: SiJupyter, color: "#F37626" },
  powerbi: { Icon: TbChartBar, color: "#F2C811" },
  tableau: { Icon: TbChartArea, color: "#E97627" },
  excel: { Icon: TbTable, color: "#217346" },
};

function Skills() {
  const [active, setActive] = useState("All");

  const visibleSkills =
    active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills">
      <div className="container">
        <span className="section-tag">{"// skills"}</span>
        <h2 className="section-heading">Technologies I work with</h2>
        <p className="section-sub">
          A snapshot of the languages, frameworks and tools I use to build and
          ship projects — hover a card to see where it fits.
        </p>

        <div className="filter-row">
          {skillCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-pill ${active === cat ? "active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="skills-grid">
          <AnimatePresence mode="popLayout">
            {visibleSkills.map((skill) => {
              const entry = TECH_ICONS[skill.icon] || { Icon: SiGithub, color: "#8B8B8B" };
              const { Icon, color } = entry;
              return (
                <motion.div
                  layout
                  key={skill.name}
                  className="skill-card"
                  style={{ "--skill-color": color }}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                >
                  <Icon className="skill-icon" style={{ color }} />
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-cat">{skill.category}</span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
