// src/pages/Skill.jsx

import { useInView } from "react-intersection-observer";
import "./Skill.css";

const skillsData = [
  {
    category: "Core Programming",
    skills: [
      { name: "Java", description: "Strong OOP, data structures, algorithms, backend dev", level: 80 },
      { name: "C", description: "Foundational knowledge in system-level programming", level: 60 },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "React.js", description: "Component-driven UI, routing, state management", level: 50 },
      { name: "JavaScript", description: "ES6+, DOM manipulation, API integration", level: 60 },
      { name: "HTML5", description: "Semantic HTML, accessibility, responsive layout", level: 90 },
      { name: "CSS3", description: "Responsive design, animations, Flex/Grid layout", level: 80 },
      { name: "Tailwind CSS", description: "Utility-first CSS framework for fast styling", level: 50 },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Spring Boot", description: "REST APIs, MVC, CRUD, JPA, Thymeleaf", level: 50 },
      { name: "Spring Security (JWT)", description: "Token-based authentication & access control", level: 50 },
      { name: "MySQL", description: "Relational db design, joins, indexing, optimization", level: 80 },
      { name: "MongoDB", description: "Basic CRUD, schema-less document DB, NoSQL", level: 20 },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", description: "Version control, collaboration, branching strategies", level: 90 },
      { name: "Docker", description: "Containerization of Spring Boot & React apps", level: 70 },
      { name: "Postman, IntelliJ, VS Code", description: "API testing & efficient development tooling", level: 80 },
    ],
  },
  {
    category: "Languages",
    skills: [
      { name: "English – Fluent", description: "Proficient in reading, writing, and technical communication", level: 70 },
      { name: "Tamil – Native", description: "Native speaker with strong communication ability", level: 100 },
    ],
  },
];

function Skill() {
  return (
    <div className="skill-container">
      <h2 className="skill-header">✨ Explore <span>My Skill Set</span></h2>
      {skillsData.map((section, idx) => {
        const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
        return (
          <div ref={ref} key={idx} className={`skill-section ${inView ? "show" : ""}`}>
            <h3 className="skill-category">{section.category}</h3>
            {section.skills.map((skill, index) => (
              <div className="skill-bar-container" key={index}>
                <div className="skill-info">
                  <strong>{skill.name}</strong>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-bar-fill"
                    style={{ width: inView ? `${skill.level}%` : "0%" }}
                  ></div>
                </div>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Skill;
