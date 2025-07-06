// src/pages/Education.jsx

import { useInView } from "react-intersection-observer";
import "./Education.css";
import velammalLogo from "../assets/velammal-logo.png";
import schoolLogo from "../assets/school-logo.png";

function Education() {
  const educationData = [
    {
      img: velammalLogo,
      title: "B.Tech in Artificial Intelligence and Data Science",
      institution: "Velammal Engineering College, Chennai (Anna University)",
      description:
        "Currently pursuing a Bachelor's degree in Artificial Intelligence and Data Science with a CGPA of 7.8. Gained hands-on experience in full-stack development using React, Spring Boot, and MySQL. Actively participated in technical events and hackathons to enhance problem-solving and collaboration skills.",
      date: "Sep 2023 ➔ Present",
    },
    {
      img: schoolLogo,
      title: "HSC (12th Standard)",
      institution: "Sri Sankara Matric Hr. Sec. School, Peralam",
      description:
        "Completed Higher Secondary Education with 86.04% under the Tamil Nadu State Board in 2023, focusing on Computer Science and Mathematics.",
      date: "Jun 2022 ➔ Apr 2023",
    },
    {
      img: schoolLogo,
      title: "HSC (11th Standard)",
      institution: "Sri Sankara Matric Hr. Sec. School, Peralam",
      description:
        "Completed Higher Secondary Education with 72.04% under the Tamil Nadu State Board in 2022, focusing on Computer Science and Mathematics.",
      date: "Jun 2021 ➔ Apr 2022",
    },
    {
      img: schoolLogo,
      title: "SSLC (10th Standard)",
      institution: "Sri Sankara Matric Hr. Sec. School, Peralam",
      description:
        "Completed Secondary School Leaving Certificate (SSLC) with ALL PASS due to coronavirus 😁 under the Tamil Nadu State Board in 2020.",
      date: "Jun 2019 ➔ Apr 2020",
    },
  ];

  return (
    <div className="edu-container">
      <h2 className="edu-header">
        🧑‍🎓 This is my <span>Educational Background</span>
      </h2>
      <div className="edu-timeline">
        {educationData.map((edu, index) => {
          const { ref, inView } = useInView({
            threshold: 0.2,
            triggerOnce: true,
          });
          return (
            <div
              ref={ref}
              className={`edu-timeline-item ${inView ? "show" : ""}`}
              key={index}
            >
              <img src={edu.img} alt="Institution Logo" className="edu-logo" />
              <div className="edu-content">
                <h3>{edu.title}</h3>
                <h4>{edu.institution}</h4>
                <p>{edu.description}</p>
                <span className="edu-date">{edu.date}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Education;
