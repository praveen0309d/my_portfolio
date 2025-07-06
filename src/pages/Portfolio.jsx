// src/pages/Portfolio.jsx

import { useState, useEffect } from "react";
import "./Portfolio.css";

function Portfolio() {
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // simulate loading

      const fetchedData = [
        // {
        //   title: "Personal Portfolio",
        //   description: "A 3D animated, clean, and responsive React + Three.js portfolio to showcase my skills, certificates, and projects.",
        //   image: "/images/portfolio1.jpg",
        //   link: "https://your-portfolio-link.com",
        //   tech: ["React", "Three.js", "Tailwind"],
        // },
        // {
        //   title: "E-Commerce Web App",
        //   description: "A full-stack e-commerce platform with product listings, cart, payment integration, and admin panel.",
        //   image: "/images/portfolio2.jpg",
        //   link: "https://your-ecommerce-link.com",
        //   tech: ["React", "Spring Boot", "MySQL"],
        // },
        // {
        //   title: "Chat App",
        //   description: "A real-time chat application with authentication and user management.",
        //   image: "/images/portfolio3.jpg",
        //   link: "https://your-chat-app-link.com",
        //   tech: ["React", "Socket.io", "Node.js"],
        // },
      ];

      setPortfolioData(fetchedData);
    };

    fetchPortfolioData();
  }, []);

  if (!portfolioData || portfolioData.length === 0) {
    return (
      <div className="portfolio-loading-container">
        <div className="portfolio-spinner"></div>
        <p className="portfolio-loading-text">Loading portfolio projects...</p>
      </div>
    );
  }

  return (
    <div className="portfolio-container">
      <h2 className="portfolio-header">🚀 My <span>Portfolio</span></h2>

      <div className="portfolio-grid">
        {portfolioData.map((project, index) => (
          <div className="portfolio-card" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
            <img src={project.image} alt={project.title} className="portfolio-img" />
            <div className="portfolio-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="portfolio-tags">
                {project.tech.map((tech, idx) => (
                  <span className="portfolio-tag" key={idx}>{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
