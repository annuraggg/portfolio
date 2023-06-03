import React, { useEffect } from "react";
import p1 from "./img/p1.png";
import p2 from "./img/p2.png";

const Projects = () => {
  useEffect(() => {
    const isElementInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        const element1 = document.getElementById("project");

        if (entry.isIntersecting) {
          element1.classList.add("animate__zoomIn", "animate__animated");
          entry.target.classList.remove("hidden");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    const targetSection = document.getElementById("project");

    if (targetSection) {
      observer.observe(targetSection);

      if (isElementInViewport(targetSection)) {
        const experience = document.getElementById("project");

        experience.classList.add("animate__zoomIn", "animate__animated");
        targetSection.classList.remove("hidden");
      } else {
        targetSection.classList.add("hidden");
      }
    }
  }, []);

  const projects = [
    {
      name: "CallMaven",
      desc: "<span>CallMaven </span> is an efficient app designed to <span>streamline </span> call center management. It offers a range of features to optimize operations and enhance customer service. With <span> real-time </span> analytics and reporting, supervisors can monitor key performance indicators, empowering them to make data-driven decisions. Agents have access to a <span>centralized knowledge base</span> for efficient issue resolution",
      github: "https://github.com/annuraggg/CallMaven",
      img: p1,
    },

    {
      name: "Spycrop",
      desc: "<span>Spycrop </span>is a powerful app designed to streamline attendance management through <span>face recognition technology</span>. It utilizes advanced algorithms to accurately detect whether individuals are wearing masks in <span>real-time</span>. With Spycrop, marking attendance is effortless as employees simply need to stand in front of the camera for the app to recognize their faces, verify mask compliance, and record their attendance. This eliminates the need for manual tracking and reduces administrative overhead.",
      github: "https://github.com/annuraggg/SpyCrop-Desktop-App",
      img: p2,
    },
  ];
  return (
    <section className="projects section5" id="project">
      <div className="ribbon"></div>
      <h3>Projects</h3>
      <div className="project-container">
        {projects.map((project, index) => {
          return (
            <div className="project" key={index}>
              <img srcSet={project.img} alt="" />
              <h4>{project.name}</h4>
              <p dangerouslySetInnerHTML={{ __html: project.desc }}></p>
              <a href={project.github} target="_blank" rel="noreferrer">
                Github
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
