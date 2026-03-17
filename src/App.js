// import React from "react";
// import "./Portfolio.css";
// import { FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// export default function Portfolio() {

//   // https://coruscating-belekoy-f864df.netlify.app/
//   return (
//     <div className="profile-wrapper" style={{
//       minHeight: "100vh",
//       backgroundImage: "url('/background.jpg')",
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//       backgroundRepeat: "no-repeat",
//     }}>
   

//         <aside className="profile-sidebar">
//           <div className="profile-image">
//             <img src="th.jpg" alt="Aradhya Kumar Mishra" />
//           </div>

//           <h1 className="name">Aradhya Kumar Mishra</h1>
//           <p className="tagline">Crafting Modern Web Experiences</p>
//           <p className="role">React.js Developer</p>

//           <div className="social-links">
//             <a href="https://www.linkedin.com/in/aradhya-kumar-mishra-006288251" target="_blank" rel="noopener noreferrer" className="social-link">
//               <FaLinkedin size={24} />
//             </a>
//             <a href="https://github.com/AradhyaKumarMishra" target="_blank" rel="noopener noreferrer" className="social-link">
//               <FaGithub size={24} />
//             </a>
//           </div>

//           <div className="contact-info">
//             <p><FaPhoneAlt className="contact-icon" /> +91-6264361891</p>
//             <p><FaEnvelope className="contact-icon" /> aradhyakumargautam@gmail.com</p>
//             <p><FaMapMarkerAlt className="contact-icon" /> Indore, India</p>
//           </div>

//         <button className="download-resume">  
//           <a href="/AKMCV.pdf" download="AKMCV.pdf">
//           Download Resume
//         </a></button>

//           <div className="freelance-available">
//             <p>🚀 Available for Freelance Projects!</p>
//           </div>
//         </aside>

//       <main className="profile-main">
//         <section className="about-section">
//           <h2>ABOUT ME</h2>
//           <p>Hello! I'm Aradhya, a passionate React.js Developer with over 2.8 years of experience in creating responsive and optimized web applications. My focus is on writing clean code, solving problems, and delivering elegant UI experiences.</p>
//         </section>

//         <section className="projects-section">
//           <h2>My Projects</h2>
//           <div className="project-list">
//             <div className="project-card">
//               <h3>Do It Center (E-commerce Platform)</h3>
//               <p><strong>Tech Stack:</strong> Next.js, Redux, REST API, Material-UI, Tailwind CSS</p>
//               <p><strong>Related to:</strong>This project is Related on E-commerce there are multiple types of product avilable in this website and there are two types of user on here like Guest and Member</p>
//               <ul>
//                 <li>Developed a high-performance e-commerce web app with seamless functionality for both guest and member users.</li>
//                 <li>Implemented complete "Add to Cart" functionality with dynamic quantity and pricing logic.</li>
//                 <li>Integrated "Sold Out" logic across listings, cart, and wishlist.</li>
//                 <li>Handled guest vs. logged-in cart flow, including cart sync after login.</li>
//                 <li>Used Redux for global state management and Next.js SSR for performance and SEO.</li>
//               </ul>
//             </div>

//             <div className="project-card">
//               <h3>Fit Spider (Admin Panel for Gym App)</h3>
//               <p><strong>Tech Stack:</strong> React.js, Redux, TypeScript, REST API, Material-UI</p>
//               <p><strong>Related to:</strong>FSP (Fit Spider) is a comprehensive fitness application designed to connect users with fitness professionals and facilities. The app features three distinct types of profiles: Users, Professionals, and Facilities. Based on a match percentage, the app presents a list of relevant users, facilities, and professionals in the profile section. Users can</p>
//               <ul>
//                 <li>Built an admin dashboard for managing gym owners, trainers, and fitness facilities.</li>
//                 <li>Developed match-based user discovery between users, professionals, and facilities.</li>
//                 <li>Enabled features like profile following, appointment scheduling, and profile insights.</li>
//                 <li>Integrated dynamic data via REST APIs and designed a fully responsive layout using MUI.</li>
//               </ul>
//             </div>

//             <div className="project-card">
//               <h3>Mentor Booth (Audiobook/E-book Platform)</h3>
//               <p><strong>Tech Stack:</strong> React.js, Redux, REST API, HTML5, CSS3, MUI</p>
//               <p><strong>Related to:</strong> Mentorbooth is an integrated E-book and audiobook platform enabling users to read, listen, and make notes across multiple books. It offers a comprehensive library with diverse author and coach profiles, along with audio and video content. Users can stay updated with book news via a dedicated feed and bookmark favourite content for easy access.</p>
//               <ul>
//                 <li>Created a multi-format reading platform supporting audiobooks, e-books, and videos.</li>
//                 <li>Implemented bookmarks, personalized notes, and feeds for content tracking.</li>
//                 <li>Developed user interfaces for exploring authors, coaches, and trending books.</li>
//                 <li>Ensured fast loading and interactive UX across devices.</li>
//               </ul>
//             </div>

//             <div className="project-card">
//               <h3>E-DOCNG (Online Document Generator)</h3>
//               <p><strong>Tech Stack:</strong> React.js, Redux, REST API, MUI</p>
//               <p><strong>Related to:</strong> E-DOCNG is an innovative online platform that simplifies and streamlines the process of obtaining official documents such as birth certificates marriage certificates, and educational transcripts for its clients.</p>
//               <ul>
//                 <li>Built a document automation platform for generating birth/marriage certificates and transcripts.</li>
//                 <li>Designed intuitive application forms with live validation and secure uploads.</li>
//                 <li>Provided document status tracking and digital delivery functionality.</li>
//                 <li>Ensured user-friendly UI using MUI components and responsive forms.</li>
//               </ul>
//             </div>

//             <div className="project-card">
//               <h3>SafeY (Crypto Platform - Ongoing)</h3>
//               <p><strong>Tech Stack:</strong> React.js, Redux, TypeScript, REST API, MUI</p>
//               <p><strong>Related to:</strong> This project is related on cypto currency like Bitcoin Ethereum Etc and this project is on going</p>
//               <ul>
//                 <li>Developing frontend features for a secure Ethereum-based platform.</li>
//                 <li>Integrated Affiliate Dashboard and commission tracking.</li>
//                 <li>Implemented Two-Factor Authentication (2FA) across user and admin logins.</li>
//                 <li>Contributed to frontend logic for wallet, dashboard, and secure user flows.</li>
//                 <li>Used WebSocket for real-time implementation.</li>
//               </ul>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }










import React, { useEffect, useRef, useState } from "react";
import "./Portfolio.css";
import {
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaChartBar,
  FaShoppingCart,
  FaDumbbell,
  FaBook,
  FaFileAlt,
  FaBitcoin,
  FaCloud,
} from "react-icons/fa";

const skills = [
  { name: "React.js", level: 92 },
  { name: "Next.js", level: 80 },
  { name: "TypeScript", level: 75 },
  { name: "Redux", level: 88 },
  { name: "Material UI", level: 85 },
  { name: "Tailwind CSS", level: 80 },
  { name: "REST APIs", level: 90 },
  { name: "Highcharts", level: 78 },
];

const projects = [
  {
    icon: <FaCloud size={22} />,
    title: "Go-Beyond Cloud",
    stack: "React.js, Redux, TypeScript, REST API, Highcharts, MUI",
    tag: "Cybersecurity · SaaS · Enterprise",
    highlights: [
      "Built a multi-tenant cybersecurity platform supporting multiple parent companies, each with their own child companies and isolated service environments.",
      "Implemented granular Role-Based Access Control (RBAC) for managing permissions across different user roles and hierarchical company structures.",
      "Integrated Two-Factor Authentication (2FA) and secure refresh token rotation for robust session management.",
      "Developed a comprehensive analytics dashboard using Highcharts — including line, bar, pie, area, and drill-down charts for visualizing threat data and service metrics.",
      "Managed complex state across deeply nested multi-company hierarchies using Redux with normalized data structures.",
    ],
  },
  {
    icon: <FaShoppingCart size={22} />,
    title: "Do It Center (E-commerce Platform)",
    stack: "Next.js, Redux, REST API, Material-UI, Tailwind CSS",
    tag: "E-commerce · SSR · Performance",
    highlights: [
      "Developed a high-performance e-commerce web app with seamless functionality for both guest and member users.",
      "Implemented complete 'Add to Cart' functionality with dynamic quantity and pricing logic.",
      "Integrated 'Sold Out' logic across listings, cart, and wishlist.",
      "Handled guest vs. logged-in cart flow, including cart sync after login.",
      "Used Redux for global state management and Next.js SSR for performance and SEO.",
    ],
  },
  {
    icon: <FaDumbbell size={22} />,
    title: "Fit Spider (Admin Panel for Gym App)",
    stack: "React.js, Redux, TypeScript, REST API, Material-UI",
    tag: "Fitness · Dashboard · Admin",
    highlights: [
      "Built an admin dashboard for managing gym owners, trainers, and fitness facilities.",
      "Developed match-based user discovery between users, professionals, and facilities.",
      "Enabled features like profile following, appointment scheduling, and profile insights.",
      "Integrated dynamic data via REST APIs and designed a fully responsive layout using MUI.",
    ],
  },
  {
    icon: <FaBook size={22} />,
    title: "Mentor Booth (Audiobook/E-book Platform)",
    stack: "React.js, Redux, REST API, HTML5, CSS3, MUI",
    tag: "EdTech · Media · Content",
    highlights: [
      "Created a multi-format reading platform supporting audiobooks, e-books, and videos.",
      "Implemented bookmarks, personalized notes, and feeds for content tracking.",
      "Developed user interfaces for exploring authors, coaches, and trending books.",
      "Ensured fast loading and interactive UX across devices.",
    ],
  },
  {
    icon: <FaFileAlt size={22} />,
    title: "E-DOCNG (Online Document Generator)",
    stack: "React.js, Redux, REST API, MUI",
    tag: "GovTech · Automation · Forms",
    highlights: [
      "Built a document automation platform for generating birth/marriage certificates and transcripts.",
      "Designed intuitive application forms with live validation and secure uploads.",
      "Provided document status tracking and digital delivery functionality.",
      "Ensured user-friendly UI using MUI components and responsive forms.",
    ],
  },
  {
    icon: <FaBitcoin size={22} />,
    title: "SafeY (Crypto Platform)",
    stack: "React.js, Redux, TypeScript, REST API, MUI, WebSocket",
    tag: "Crypto · Web3 · Real-time",
    highlights: [
      "Developing frontend features for a secure Ethereum-based platform.",
      "Integrated Affiliate Dashboard and commission tracking.",
      "Implemented Two-Factor Authentication (2FA) across user and admin logins.",
      "Contributed to frontend logic for wallet, dashboard, and secure user flows.",
      "Used WebSocket for real-time crypto data implementation.",
    ],
  },
];

function SkillBar({ name, level }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skill-item" ref={ref}>
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="skill-bar-bg">
        <div
          className="skill-bar-fill"
          style={{ width: animated ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`project-card ${open ? "expanded" : ""}`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="project-card-header" onClick={() => setOpen(!open)}>
        <div className="project-icon-wrap">{project.icon}</div>
        <div className="project-title-block">
          <h3>{project.title}</h3>
          <span className="project-tag">{project.tag}</span>
        </div>
        <span className={`expand-arrow ${open ? "rotated" : ""}`}>›</span>
      </div>
      <div className="project-stack">
        <span className="stack-label">Stack:</span> {project.stack}
      </div>
      <div className={`project-highlights ${open ? "visible" : ""}`}>
        <ul>
          {project.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="portfolio-root">
      <div className="bg-grid" />
      <div className="bg-glow glow-1" />
      <div className="bg-glow glow-2" />

      <div className="layout">
        {/* ─── SIDEBAR ─── */}
        <aside className="sidebar">
          <div className="avatar-ring">
            <img src="th.jpg" alt="Aradhya Kumar Mishra" className="avatar" />
          </div>

          <h1 className="sidebar-name">Aradhya Kumar Mishra</h1>
          <p className="sidebar-role">React.js Developer</p>
          <p className="sidebar-tagline">Crafting Modern Web Experiences</p>

          <div className="exp-badge">
            <span className="exp-number">2.11</span>
            <span className="exp-label">Years Experience</span>
          </div>

          <div className="social-row">
            <a
              href="https://www.linkedin.com/in/aradhya-kumar-mishra-006288251"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              title="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://github.com/AradhyaKumarMishra"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              title="GitHub"
            >
              <FaGithub size={18} />
            </a>
          </div>

          <div className="contact-block">
            <div className="contact-row">
              <FaPhoneAlt className="c-icon" />
              <span>+91-6264361891 / 9200309303</span>
            </div>
            <div className="contact-row">
              <FaEnvelope className="c-icon" />
              <span>aradhyakumargautam@gmail.com</span>
            </div>
            <div className="contact-row">
              <FaMapMarkerAlt className="c-icon" />
              <span>Indore, India</span>
            </div>
          </div>

          <a href="/AKMCV.pdf" download="AKMCV.pdf" className="resume-btn">
            ↓ Download Resume
          </a>

          <div className="freelance-badge">
            <span className="pulse-dot" />
            Available for Freelance
          </div>
        </aside>

        {/* ─── MAIN ─── */}
        <main className="main-content">
          {/* About */}
          <section className="section">
            <div className="section-label">01 — About</div>
            <h2 className="section-title">Who I Am</h2>
            <p className="about-text">
              Hello! I'm <strong>Aradhya</strong>, a passionate{" "}
              <strong>React.js Developer</strong> with over{" "}
              <strong>2.11 years</strong> of hands-on experience building
              responsive, scalable, and high-performance web applications. From
              enterprise-grade cybersecurity dashboards to crypto platforms and
              e-commerce sites, I bring clean architecture, sharp UI instincts,
              and a deep care for user experience to every project I touch.
            </p>
          </section>

          {/* Skills */}
          <section className="section">
            <div className="section-label">02 — Skills</div>
            <h2 className="section-title">Technical Arsenal</h2>
            <div className="skills-grid">
              {skills.map((s) => (
                <SkillBar key={s.name} name={s.name} level={s.level} />
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="section">
            <div className="section-label">03 — Work</div>
            <h2 className="section-title">Projects</h2>
            <div className="projects-list">
              {projects.map((p, i) => (
                <ProjectCard key={p.title} project={p} index={i} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}





