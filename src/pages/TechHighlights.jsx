// src/pages/TechHighlights.jsx

import { useState, useEffect } from "react";
import "./TechHighlights.css";

function TechHighlights() {
  const [techData, setTechData] = useState(null);

  useEffect(() => {
    const fetchTechData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1200)); // simulate load

      const fetchedData = [
        {
          title: "Full Stack Development",
          description: "Building scalable web apps with React, Spring Boot, MySQL, and Docker ensuring production readiness.",
          icon: "💻",
        },
        {
          title: "3D & Interactive UI",
          description: "Integrating Three.js and GSAP for immersive, animated, and responsive front-end experiences.",
          icon: "🎨",
        },
        {
          title: "Problem Solving",
          description: "Consistent DSA practice on LeetCode to strengthen logical thinking and algorithm design.",
          icon: "🧠",
        },
        {
          title: "Cloud & DevOps",
          description: "Deploying applications using Docker, GitHub Actions, and monitoring for reliability.",
          icon: "☁️",
        },
      ];

      setTechData(fetchedData);
    };

    fetchTechData();
  }, []);

  if (!techData || techData.length === 0) {
    return (
      <div className="tech-loading-container">
        <div className="tech-spinner"></div>
        <p className="tech-loading-text">Loading technical highlights...</p>
      </div>
    );
  }

  return (
    <div className="tech-container">
      <h2 className="tech-header">⚡ My <span>Technical Highlights</span></h2>

      <div className="tech-grid">
        {techData.map((tech, index) => (
          <div className="tech-card" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="tech-icon">{tech.icon}</div>
            <h3>{tech.title}</h3>
            <p>{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechHighlights;
