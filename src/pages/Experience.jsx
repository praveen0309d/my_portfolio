// src/pages/Experience.jsx

import { useState, useEffect } from "react";
import "./Experience.css";

function Experience() {
  const [experienceData, setExperienceData] = useState(null);

  useEffect(() => {
    const fetchExperienceData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const fetchedData = [
        // {
        //   company: "CodeSoft",
        //   role: "Java Intern",
        //   duration: "May 2023 ➔ Jul 2023",
        //   description:
        //     "Worked on backend API logic using Java and Spring Boot, building REST endpoints, and learning codebase management with Git.",
        // },
        // {
        //   company: "Freelance Projects",
        //   role: "Full Stack Developer",
        //   duration: "Aug 2023 ➔ Present",
        //   description:
        //     "Building scalable MERN and Java Spring Boot web apps, focusing on clean UI, API integration, and deployment workflows.",
        // },
      ];

      setExperienceData(fetchedData);
    };

    fetchExperienceData();
  }, []);

  if (!experienceData || experienceData.length === 0) {
    return (
      <div className="exp-loading-container">
        <div className="exp-spinner"></div>
        <p className="exp-loading-text">Loading experience data...</p>
      </div>
    );
  }

  return (
    <div className="exp-container">
      <h2 className="exp-header">💼 My <span>Experience</span></h2>

      <div className="exp-timeline">
        {experienceData.map((exp, index) => (
          <div className="exp-item" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="exp-content">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>
              <span className="exp-duration">{exp.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
