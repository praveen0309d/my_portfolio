// src/pages/About.jsx
import './About.css';
import profileImg from '../assets/myimg.jpg'; // replace with your image path
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import AnimatedCounter from "../components/AnimatedCounter";

function About() {
  return (
    <div className="about-hero-container">
      {/* LEFT CARD */}
      <div className="about-card">
        <img src={profileImg} alt="Praveen" className="about-card-img" />
        <div className="about-card-info">
          <p>Praveen D</p>
          <p>Base in Chennai, India</p>
        </div>
        <div className="about-social-icons">
          <a href="https://www.instagram.com/d.praveen0309?igsh=MXA0MWU2c3A2cmVlcA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://github.com/praveen0309d" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/praveen-d-52181a2ba/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
         <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=praveen002006@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaEnvelope />
</a>

        </div>
        
      </div>

      {/* RIGHT HERO */}
      <div className="about-hero-content">
  <p className="about-introduce">INTRODUCE</p>
  <h1>
    Say Hi from <span className="accent">Praveen D</span>,<br />
    Pre-Final Year From Ai&Ds Student
  </h1>
  <section class="about-bio">
  <p>I’m currently pursuing my <strong>pre-final year in Artificial Intelligence and Data Science</strong>, building scalable, high-performance web applications using <strong>Java, React, MySQL, and Python (Flask)</strong>.</p>
  <p>Passionate about <strong>clean, maintainable, and efficient code</strong>, I enjoy transforming ideas into real, production-ready projects while constantly learning and growing.</p>
  <p>Alongside web development, I actively work on <strong>machine learning projects</strong>, exploring how data-driven solutions can solve real-world problems, from predictive analytics to recommendation systems.</p>
  <p>✨ Let’s collaborate and bring impactful, intelligent applications to life!</p>
</section>


  <div className="about-links">
   <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=praveen002006@gmail.com"
  target="_blank"
  rel="noopener noreferrer" className="about-button"
>
      📧 Email
    </a>
    <a href="https://github.com/tharunraj" target="_blank" rel="noopener noreferrer" className="about-button">
      💻 GitHub
    </a>
<a
  href="/files/Praveen_resume.pdf"
  download="Praveen.pdf"
  className="about-button"
>
  📄 Resume
</a>

  </div>

      <div className="about-stats">
      <div>
        <AnimatedCounter target={3} />
        <p>YEARS OF LEARNING & BUILDING</p>
      </div>
      <div>
        <AnimatedCounter target={0} />
        <p>PROJECTS COMPLETED</p>
      </div>
    </div>

</div>

    </div>
  
  );
}

export default About;
