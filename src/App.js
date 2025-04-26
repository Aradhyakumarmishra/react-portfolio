import React from "react";
import "./Portfolio.css";
import { FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
export default function Portfolio() {
  return (
    <div className="profile-wrapper">
      {/* <aside className="profile-sidebar">
        <div className="profile-image"><img src="aradhya.jpg"/></div>
        <h1 className="name">Aradhya Kumar Mishra</h1>
        <p className="role">React.js Developer</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/aradhya-kumar-mishra-006288251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
    Linkedin
          </a>
          <a
            href="https://github.com/AradhyaKumarMishra"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
         Github
          </a>
        </div>

        <div className="contact-info">
          <p><strong>Phone:</strong> +91-6264361891</p>
          <p><strong>Email:</strong> aradhyakumargautam@gmail.com</p>
          <p><strong>Location:</strong> Indore, India</p>
        </div>
        <button className="download-resume">Download Resume</button>
      </aside> */}

        <aside className="profile-sidebar">
          <div className="profile-image">
            <img src="th.jpg" alt="Aradhya Kumar Mishra" />
          </div>

          <h1 className="name">Aradhya Kumar Mishra</h1>
          <p className="tagline">Crafting Modern Web Experiences</p>
          <p className="role">React.js Developer</p>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/aradhya-kumar-mishra-006288251" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/AradhyaKumarMishra" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub size={24} />
            </a>
          </div>

          <div className="contact-info">
            <p><FaPhoneAlt className="contact-icon" /> +91-6264361891</p>
            <p><FaEnvelope className="contact-icon" /> aradhyakumargautam@gmail.com</p>
            <p><FaMapMarkerAlt className="contact-icon" /> Indore, India</p>
          </div>

        <button className="download-resume">  
          <a href="/AKMCV.pdf" download="AKMCV.pdf">
          Download Resume
        </a></button>

          <div className="freelance-available">
            <p>🚀 Available for Freelance Projects!</p>
          </div>
        </aside>

      <main className="profile-main">
        <section className="about-section">
          <h2>ABOUT ME</h2>
          <p>Hello! I'm Aradhya, a passionate React.js Developer with over 2 years of experience in creating responsive and optimized web applications. My focus is on writing clean code, solving problems, and delivering elegant UI experiences.</p>
        </section>

        <section className="projects-section">
          <h2>My Projects</h2>
          <div className="project-list">
            <div className="project-card">
              <h3>Do It Center (E-commerce Platform)</h3>
              <p><strong>Tech Stack:</strong> Next.js, React.js, Redux, REST API, Material-UI, Tailwind CSS</p>
              <p><strong>Related to:</strong>This project is Related on E-commerce there are multiple types of product avilable in this website and there are two types of user on here like Guest and Member</p>
              <ul>
                <li>Developed a high-performance e-commerce web app with seamless functionality for both guest and member users.</li>
                <li>Implemented complete "Add to Cart" functionality with dynamic quantity and pricing logic.</li>
                <li>Integrated "Sold Out" logic across listings, cart, and wishlist.</li>
                <li>Handled guest vs. logged-in cart flow, including cart sync after login.</li>
                <li>Used Redux for global state management and Next.js SSR for performance and SEO.</li>
              </ul>
            </div>

            <div className="project-card">
              <h3>Fit Spider (Admin Panel for Gym App)</h3>
              <p><strong>Tech Stack:</strong> React.js, Redux, TypeScript, REST API, Material-UI</p>
              <p><strong>Related to:</strong>FSP (Fit Spider) is a comprehensive fitness application designed to connect users with fitness professionals and facilities. The app features three distinct types of profiles: Users, Professionals, and Facilities. Based on a match percentage, the app presents a list of relevant users, facilities, and professionals in the profile section. Users can</p>
              <ul>
                <li>Built an admin dashboard for managing gym owners, trainers, and fitness facilities.</li>
                <li>Developed match-based user discovery between users, professionals, and facilities.</li>
                <li>Enabled features like profile following, appointment scheduling, and profile insights.</li>
                <li>Integrated dynamic data via REST APIs and designed a fully responsive layout using MUI.</li>
              </ul>
            </div>

            <div className="project-card">
              <h3>Mentor Booth (Audiobook/E-book Platform)</h3>
              <p><strong>Tech Stack:</strong> React.js, Redux, REST API, HTML5, CSS3, MUI</p>
              <p><strong>Related to:</strong> Mentorbooth is an integrated E-book and audiobook platform enabling users to read, listen, and make notes across multiple books. It offers a comprehensive library with diverse author and coach profiles, along with audio and video content. Users can stay updated with book news via a dedicated feed and bookmark favourite content for easy access.</p>
              <ul>
                <li>Created a multi-format reading platform supporting audiobooks, e-books, and videos.</li>
                <li>Implemented bookmarks, personalized notes, and feeds for content tracking.</li>
                <li>Developed user interfaces for exploring authors, coaches, and trending books.</li>
                <li>Ensured fast loading and interactive UX across devices.</li>
              </ul>
            </div>

            <div className="project-card">
              <h3>E-DOCNG (Online Document Generator)</h3>
              <p><strong>Tech Stack:</strong> React.js, Redux, REST API, MUI</p>
              <p><strong>Related to:</strong> E-DOCNG is an innovative online platform that simplifies and streamlines the process of obtaining official documents such as birth certificates marriage certificates, and educational transcripts for its clients.</p>
              <ul>
                <li>Built a document automation platform for generating birth/marriage certificates and transcripts.</li>
                <li>Designed intuitive application forms with live validation and secure uploads.</li>
                <li>Provided document status tracking and digital delivery functionality.</li>
                <li>Ensured user-friendly UI using MUI components and responsive forms.</li>
              </ul>
            </div>

            <div className="project-card">
              <h3>SafeY (Crypto Platform - Ongoing)</h3>
              <p><strong>Tech Stack:</strong> React.js, Redux, TypeScript, REST API, MUI</p>
              <p><strong>Related to:</strong> This project is related on cypto currency like Bitcoin Ethereum Etc and this project is on going</p>
              <ul>
                <li>Developing frontend features for a secure Ethereum-based platform.</li>
                <li>Integrated Affiliate Dashboard and commission tracking.</li>
                <li>Implemented Two-Factor Authentication (2FA) across user and admin logins.</li>
                <li>Contributed to frontend logic for wallet, dashboard, and secure user flows.</li>
                <li>Used WebSocket for real-time implementation.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}