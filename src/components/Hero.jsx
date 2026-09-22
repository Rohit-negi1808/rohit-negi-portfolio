import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import {
  FiLinkedin,
  FiArrowRight,
  FiFileText,
  FiDownload,
  FiChevronDown,
} from "react-icons/fi";
import {
  SiGithub,
  SiGmail,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiJavascript,
  SiGit,
} from "react-icons/si";
import { profile } from "../data/portfolio.js";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

// Floating tech marks that drift over the backdrop.
// `depth` drives how far each one moves with the pointer — higher values sit
// "closer" to the viewer, which is what sells the parallax.
const FLOATERS = [
  { Icon: SiMongodb, color: "#47A248", top: "16%", left: "6%", depth: 26, delay: 0 },
  { Icon: SiExpress, color: "#cbd5e1", top: "68%", left: "11%", depth: 16, delay: 0.6 },
  { Icon: SiReact, color: "#61DAFB", top: "30%", left: "88%", depth: 30, delay: 1.1 },
  { Icon: SiNodedotjs, color: "#5FA04E", top: "78%", left: "80%", depth: 20, delay: 0.3 },
  { Icon: SiPython, color: "#3776AB", top: "10%", left: "62%", depth: 22, delay: 1.5 },
  { Icon: SiJavascript, color: "#F7DF1E", top: "86%", left: "44%", depth: 14, delay: 0.9 },
  { Icon: SiGit, color: "#F05032", top: "52%", left: "95%", depth: 18, delay: 1.8 },
];

// Each floater is its own component because useTransform is a hook and
// hooks cannot be called inside a .map() callback.
function Floater({ Icon, color, top, left, depth, delay, index, sx, sy, still }) {
  const x = useTransform(sx, (v) => v * depth);
  const y = useTransform(sy, (v) => v * depth);

  return (
    <motion.span
      className="hero-floater"
      style={still ? { top, left, color } : { top, left, color, x, y }}
      animate={still ? {} : { y: [0, -14, 0] }}
      transition={{
        duration: 6 + index,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <Icon />
    </motion.span>
  );
}

// One row of the code card: a line number in its own gutter column plus
// the syntax-highlighted content. `blank` renders an empty spacer row
// without a number, matching how editors show gaps between blocks.
function CodeLine({ n, indent, blank, children }) {
  return (
    <div className="code-line">
      <span className="line-no">{blank ? "" : n}</span>
      <span className={`line-content ${indent ? "indent" : ""}`}>
        {children}
      </span>
    </div>
  );
}

function Hero() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

  // --- scroll-driven backdrop ---------------------------------------
  // The backdrop stays put while the hero content scrolls up over it,
  // then dissolves as the section leaves the viewport.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // The artwork translates downward at ~45% of the scroll distance, so it
  // reads as pinned while the content slides up and away over it.
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.14]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // --- pointer parallax ---------------------------------------------
  // Values are normalised to roughly -0.5..0.5 so each layer can scale
  // the same signal by its own depth.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spring = { stiffness: 60, damping: 18, mass: 0.6 };
  const sx = useSpring(px, spring);
  const sy = useSpring(py, spring);

  const imgX = useTransform(sx, (v) => v * -28);
  const gridX = useTransform(sx, (v) => v * 16);
  const gridY = useTransform(sy, (v) => v * 12);

  function handlePointerMove(e) {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handlePointerLeave() {
    px.set(0);
    py.set(0);
  }

  return (
    <section
      id="home"
      className="hero"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {/* ---------------- BACKDROP ---------------- */}
      <motion.div
        className="hero-backdrop"
        aria-hidden="true"
        style={{ opacity: reduceMotion ? 1 : bgOpacity }}
      >
        {/* The artwork. It translates down at a fraction of the scroll
            distance, so it reads as pinned while the content moves away. */}
        <motion.div
          className="hero-photo"
          style={
            reduceMotion
              ? undefined
              : { scale: bgScale, x: imgX, y: bgY }
          }
        />

        {/* Readability veil — without this the headline fights the artwork. */}
        <div className="hero-veil" />

        {/* Circuit grid drifting the opposite way to the photo. */}
        <motion.div
          className="hero-circuit"
          style={reduceMotion ? undefined : { x: gridX, y: gridY }}
        />

        {/* Scanline sweep. */}
        <div className="hero-scan" />

        {/* Floating tech marks. */}
        {FLOATERS.map((f, i) => (
          <Floater
            key={i}
            {...f}
            index={i}
            sx={sx}
            sy={sy}
            still={reduceMotion}
          />
        ))}

        {/* Fades the artwork into the page background at the seam. */}
        <div className="hero-fade" />
      </motion.div>

      <div className="hero-glow" aria-hidden="true" />

      {/* ---------------- CONTENT ---------------- */}
      <motion.div
        className="container hero-grid"
        style={
          reduceMotion ? undefined : { y: contentY, opacity: contentOpacity }
        }
      >
        <div>
          <motion.div
            className="hero-badge"
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            <span className="pulse" aria-hidden="true" />
            {profile.availability}
          </motion.div>

          <motion.span
            className="hero-eyebrow"
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            {"// hello, I'm"}
          </motion.span>

          <motion.h1
            className="hero-name"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
          >
            {profile.name}
          </motion.h1>

          <motion.p
            className="hero-title"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
          >
            {profile.title}
          </motion.p>

          <motion.p
            className="hero-tagline"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.3}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            className="hero-actions"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.4}
          >
            <a href="#projects" className="btn-glow btn-primary">
              View Projects <FiArrowRight />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow btn-outline"
            >
              <FiFileText /> View Resume
            </a>
            <a
              href={profile.resumeUrl}
              download="Rohit-Negi-Resume.pdf"
              className="btn-glow btn-outline"
            >
              <FiDownload /> Download
            </a>
            <a href="#contact" className="btn-glow btn-primary">
              Connect With Me
            </a>
          </motion.div>

          <motion.div
            className="hero-socials"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.5}
          >
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
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="hero-terminal"
        >
          <div className="terminal-bar">
            <span className="terminal-dot red" />
            <span className="terminal-dot yellow" />
            <span className="terminal-dot green" />
            <span className="terminal-path">rohit-negi / portfolio.tsx</span>
          </div>

          <div className="code-body">
            <CodeLine n={1}>
              <span className="tok-kw">const</span>{" "}
              <span className="tok-var">developer</span> = {"{"}
            </CodeLine>
            <CodeLine n={2} indent>
              <span className="tok-prop">name</span>:{" "}
              <span className="tok-str">"{profile.name}"</span>,
            </CodeLine>
            <CodeLine n={3} indent>
              <span className="tok-prop">focus</span>:{" "}
              <span className="tok-str">"Full-Stack (MERN)"</span>,
            </CodeLine>
            <CodeLine n={4} indent>
              <span className="tok-prop">skills</span>: [
              <span className="tok-str">"React"</span>,{" "}
              <span className="tok-str">"Node"</span>,{" "}
              <span className="tok-str">"MongoDB"</span>,{" "}
              <span className="tok-str">"Python"</span>],
            </CodeLine>
            <CodeLine n={5} indent>
              <span className="tok-prop">build</span>: () {"=>"}{" "}
              <span className="tok-str">"clear, working software"</span>,
            </CodeLine>
            <CodeLine n={6}>{"};"}</CodeLine>
            <CodeLine n={7} blank />
            <CodeLine n={8}>
              <span className="tok-kw">export default</span>{" "}
              <span className="tok-var">developer</span>;
            </CodeLine>
          </div>

          <div className="code-status">
            <span className="pulse" aria-hidden="true" />
            {profile.availability?.toUpperCase() || "OPEN TO OPPORTUNITIES"}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        className="hero-scroll"
        aria-label="Scroll to about section"
        style={reduceMotion ? undefined : { opacity: contentOpacity }}
        animate={reduceMotion ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>scroll</span>
        <FiChevronDown />
      </motion.a>
    </section>
  );
}

export default Hero;
