// ============================================================
// PORTFOLIO DATA
// ------------------------------------------------------------
// This is the ONLY file you should need to edit to keep your
// portfolio up to date. Update your name, links, skills,
// projects, education and certifications here — the components
// just read from this file.
// ============================================================

export const profile = {
  name: "Rohit Negi",
  title: "MERN Stack Developer",
  tagline:
    "Full-stack developer building production-ready web applications with the MERN stack, with a working command of Python for data analysis.",
  // Shown as a badge in the hero and in the About card.
  availability: "Open to full-time roles",
  availabilityNote: "Available immediately",
  location: "Chandigarh, India",
  email: "negirohit1808@gmail.com",
  phone: "+91-9084581050",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/Rohit-negi1808",
    linkedin: "https://linkedin.com/in/rohit-negi-287a0b30b",
  },
};

// About section short story + focus areas
export const about = {
  paragraphs: [
    "I'm a MERN stack developer based in India. I hold a Master of Computer Applications from Chandigarh University, where I graduated with a CGPA of 8.92 and built a strong foundation in full-stack development and problem-solving.",
    "My work centers on the MERN stack — I take an application from a rough idea to a working product with a clean, responsive interface, a well-structured API and a database layer that holds up. Alongside that, I work with Python and its data libraries for analysis and visualization.",
    "I'm currently open to full-time opportunities where I can contribute to a real engineering team, ship software that people actually use, and keep growing as an engineer.",
  ],
  focusAreas: [
    "Full-Stack (MERN) Development",
    "Frontend Engineering & UI",
    "Python for Data Analysis",
    "Problem Solving & DSA",
  ],
  // Quick-facts card shown next to the About text.
  quickFacts: [
    { label: "Status", value: "Open to full-time roles" },
    { label: "Role", value: "MERN Stack Developer" },
    { label: "Education", value: "MCA — Chandigarh University (2026)" },
    { label: "Location", value: "Chandigarh, India" },
    { label: "Notice", value: "Available immediately" },
  ],
};

// Skill categories — used for both display and the filter buttons.
// Add/remove a skill by editing this array only.
export const skills = [
  { name: "JavaScript", category: "Programming", icon: "javascript" },
  { name: "Python", category: "Programming", icon: "python" },
  { name: "C", category: "Programming", icon: "c" },

  { name: "HTML5", category: "Frontend", icon: "html5" },
  { name: "CSS3", category: "Frontend", icon: "css3" },
  { name: "React.js", category: "Frontend", icon: "react" },
  { name: "Bootstrap", category: "Frontend", icon: "bootstrap" },
  { name: "jQuery", category: "Frontend", icon: "jquery" },

  { name: "Node.js", category: "Backend", icon: "nodejs" },
  { name: "Express.js", category: "Backend", icon: "express" },

  { name: "MySQL", category: "Database", icon: "mysql" },
  { name: "MongoDB", category: "Database", icon: "mongodb" },

  { name: "NumPy", category: "Data Science", icon: "numpy" },
  { name: "Pandas", category: "Data Science", icon: "pandas" },
  { name: "Matplotlib", category: "Data Science", icon: "matplotlib" },
  { name: "Seaborn", category: "Data Science", icon: "seaborn" },

  { name: "Git", category: "Tools", icon: "git" },
  { name: "GitHub", category: "Tools", icon: "github" },
  { name: "VS Code", category: "Tools", icon: "vscode" },
  { name: "Jupyter Notebook", category: "Tools", icon: "jupyter" },
  { name: "Power BI", category: "Tools", icon: "powerbi" },
  { name: "Tableau", category: "Tools", icon: "tableau" },
  { name: "Excel", category: "Tools", icon: "excel" },
];

export const skillCategories = [
  "All",
  "Programming",
  "Frontend",
  "Backend",
  "Database",
  "Data Science",
  "Tools",
];

// Projects — id is used for the /projects/:id route.
// Leave github/live empty ("") if a link isn't available yet;
// the UI hides that button automatically.
export const projects = [
  {
    id: "campus-finds",
    title: "Campus Finds",
    period: "Aug 2025 – Nov 2025",
    category: "MERN",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    image: "/projects/campusfinds.png",
    shortDescription:
      "A MERN stack web app for managing campus lost & found items, with separate user and admin panels.",
    overview:
      "Campus Finds helps a college community report and recover lost items. Users can report lost or found items and submit complaints, while admins manage claims, verification, feedback and users from a dedicated panel.",
    problem:
      "Lost and found items on a campus are usually tracked informally, which makes it hard for owners to find their belongings and for staff to verify legitimate claims.",
    solution:
      "Built a full MERN application with distinct user and admin flows: users report and search items, and admins verify claims and manage the reporting workflow end to end.",
    features: [
      "User panel to report lost or found items",
      "Admin panel for claim verification and user management",
      "Complaint submission and feedback handling",
      "Responsive, interactive UI for tracking items",
    ],
    github: "",
    live: "",
  },
  {
    id: "grocery-picker",
    title: "Grocery Picker",
    period: "Mar 2025 – Apr 2025",
    category: "Frontend",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/projects/grocery-picker.png",
    shortDescription:
      "A grocery selection and cart management app using fractional and 0/1 knapsack algorithms for optimized picking.",
    overview:
      "Grocery Picker lets a user build a cart under a budget or weight constraint while getting an optimized selection of items, using classic knapsack algorithms behind a simple, responsive UI.",
    problem:
      "Manually picking the best combination of grocery items under a constraint (like budget) is tedious and rarely optimal.",
    solution:
      "Implemented fractional and 0/1 knapsack algorithms in JavaScript to suggest an optimized cart, paired with dynamic cart updates and live price tracking.",
    features: [
      "Interactive item selection",
      "Dynamic cart updates",
      "Live price tracking",
      "Fractional & 0/1 knapsack based optimization",
    ],
    github: "",
    live: "",
  },
  {
    id: "netflix-ui-replica",
    title: "Netflix UI Replica",
    period: "Feb 2025 – Apr 2025",
    category: "Frontend",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/projects/netflix-ui.png",
    shortDescription:
      "A front-end clone of Netflix showcasing authentication flow and streaming-service UI behavior.",
    overview:
      "A front-end recreation of the Netflix experience, focused on replicating the login flow and dynamic content browsing of a real streaming service.",
    problem:
      "Recreating a well-known, highly polished UI is a good way to practice front-end fundamentals: layout, state-driven UI and interaction design.",
    solution:
      "Simulated a user login flow and built dynamic content display sections using HTML, CSS and JavaScript.",
    features: [
      "Simulated authentication flow",
      "Dynamic content browsing UI",
      "Streaming-service-style layout",
    ],
    github: "",
    live: "",
  },
  {
    id: "linkedin-replica",
    title: "LinkedIn Replica",
    period: "Aug 2024 – Dec 2024",
    category: "Frontend",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/projects/linkedin-replica.png",
    shortDescription:
      "A LinkedIn-inspired web app with a login page, dynamic home page, post creation and profile viewing.",
    overview:
      "A responsive, LinkedIn-inspired front-end application replicating core social-network functionality: authentication, a dynamic feed, post creation and profile viewing.",
    problem:
      "Social platforms combine several UI patterns — feeds, forms, profiles — in one cohesive product, making them a strong practice ground for frontend fundamentals.",
    solution:
      "Built a responsive, user-friendly frontend with a login page, dynamic home page, post creation flow and profile viewing using HTML, CSS and JavaScript.",
    features: [
      "Login page",
      "Dynamic home feed",
      "Post creation",
      "Profile viewing",
    ],
    github: "",
    live: "",
  },
];

export const projectCategories = ["All", "MERN", "Frontend"];

// Education — most recent first.
export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Chandigarh University, Chandigarh",
    period: "July 2024 – June 2026",
    score: "CGPA: 8.92",
  },
  {
    degree: "Bachelor of Science (B.Sc.)",
    institution: "PG College, Rishikesh",
    period: "July 2020 – Sep 2023",
    score: "70.97%",
  },
  {
    degree: "Intermediate (12th)",
    institution: "SGRR Public School, Bhaniyawala",
    period: "Apr 2019 – Apr 2020",
    score: "77.5%",
  },
  {
    degree: "Matriculation (10th)",
    institution: "SGRR Public School, Rishikesh",
    period: "Apr 2017 – Apr 2018",
    score: "66.2%",
  },
];

// Certifications shown alongside education/experience.
export const certifications = [
  {
    title: "Developing Back-End Apps with Node.js and Express",
    issuer: "Coursera",
    date: "Nov 2025",
  },
  {
    title: "React JS",
    issuer: "Infosys Springboard",
    date: "Feb 2025",
  },
  {
    title: "Web Development (HTML, CSS, JavaScript)",
    issuer: "Udemy",
    date: "Sep 2024",
  },
  {
    title: "C Programming Language",
    issuer: "Learn C Programming App",
    date: "Dec 2023",
  },
];
