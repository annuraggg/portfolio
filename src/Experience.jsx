import React, { useEffect } from "react";
import "animate.css";
import quasar from "./img/quasar.png";
import symbiosis from "./img/SIT.png";
import sahu from "./img/sahu.jpeg";

const Experience = () => {
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
        const element1 = document.getElementById("experience");

        if (entry.isIntersecting) {
          element1.classList.add("animate__fadeInDown", "animate__animated");
          entry.target.classList.remove("hidden");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.4  ,
    });

    const targetSection = document.getElementById("experience");

    if (targetSection) {
      observer.observe(targetSection);

      if (isElementInViewport(targetSection)) {
        const experience = document.getElementById("experience");

        experience.classList.add("animate__fadeInDown", "animate__animated");
        targetSection.classList.remove("hidden");
      } else {
        targetSection.classList.add("hidden");
      }
    }
  }, []);

  const exp = [
    {
      image: quasar,
      role: "Runner Up - Hackathon",
      company: "VPPCOE&VA Quasar",
      stack: [
        '<i><img srcSet="https://img.icons8.com/?size=512&id=20909&format=png"/></i>',
        '<i><img srcSet="https://img.icons8.com/?size=512&id=21278&format=png"/></i>',
        '<i><img srcSet="https://img.icons8.com/?size=512&id=108784&format=png"/></i>',
        '<i class="fa-brands fa-bootstrap"></i>',
        '<i><img srcSet="https://img.icons8.com/?size=512&id=qGUfLiYi1bRN&format=png"/></i>',
        '<i><img srcSet="https://img.icons8.com/?size=512&id=9OGIyU8hrxW5&format=png"/></i>',
      ],
      duration: "March 2023",
      description: [
        "App using HTML, CSS, JS, Node.js, Express.js, and Flutter for farmer-laborer connections in agriculture sector.",
        "Responsive platform like LinkedIn for convenient farmer-laborer connections on different devices.",
        "Comprehensive solution (front-end, back-end, mobile app) using HTML, CSS, JS, Node.js, Express.js, Flutter for farmers and laborers.",
        "Cross-platform mobile app (Flutter) for seamless access to the platform on Android and iOS devices.",
      ],
    },

    {
      image: symbiosis,
      role: "Runner Up - Symbiosis Protech",
      company: "Protech - Symbiosis Institue of Technology, Pune",
      stack: [
        '<i><img srcSet="https://img.icons8.com/?size=512&id=20909&format=png"/></i>',
        '<i><img srcSet="https://img.icons8.com/?size=512&id=21278&format=png"/></i>',
        '<i><img srcSet="https://img.icons8.com/?size=512&id=108784&format=png"/></i>',
        '<i class="fa-brands fa-bootstrap"></i>',
        '<i><img srcSet="https://img.icons8.com/?size=512&id=qGUfLiYi1bRN&format=png"/></i>',
        '<i><img srcSet="https://img.icons8.com/?size=512&id=9OGIyU8hrxW5&format=png"/></i>',
      ],
      duration: "July 2022",
      description: [
        "Emotion Detection App: Developed an app using machine learning to monitor employee emotions, improving well-being and productivity.",
        "Machine Learning and AI: Utilized advanced techniques for precise emotion analysis based on facial expressions and voice tone.",
        "Employee Engagement and Well-being: Promoted emotional intelligence and supported a positive work culture.",
        "Data Analytics and Insights: Derived actionable information from emotion data to drive data-driven decision-making and organizational improvement.",
      ],
    },
    {
      image: sahu,
      role: "UI/UX Designer - INTERN",
      company: "Sahu Technologies",
      stack: [
        '<i><img srcSet="https://img.icons8.com/?size=512&id=20909&format=png"/></i>',
        '<i><img srcSet="https://img.icons8.com/?size=512&id=21278&format=png"/></i>',
        '<i><img srcSet="https://img.icons8.com/?size=512&id=108784&format=png"/></i>',
        '<i class="fa-brands fa-bootstrap"></i>',
        '<i><img srcSet="https://img.icons8.com/?size=512&id=qGUfLiYi1bRN&format=png"/></i>',
        '<i><img srcSet="https://img.icons8.com/?size=512&id=9OGIyU8hrxW5&format=png"/></i>',
      ],
      duration: "JULY 2021 - OCT 2021",
      description: [
        "Developed website clones with HTML, CSS, JavaScript, and Bootstrap.",
        "Communicated effectively to meet project milestones and deadlines.",
        "Conducted quality assurance testing and implemented improvements.",
        "Applied web development best practices for functionality and design.",
      ],
    },
  ];

  return (
    <section className="experience section3 hidden" id="experience">
      <h3>EXPERIENCE / Code-Offs</h3>
      <div className="carousel">
        {exp.map((item, index) => {
          return (
            <div className="carousel-box" key={index}>
              <div
                className="img"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>

              <p className="role">{item.role}</p>
              <p className="company">{item.company}</p>
              <div className="icons" id="icons">
                {item.stack.map((lang, lang_index) => (
                  <div
                    dangerouslySetInnerHTML={{ __html: lang }}
                    key={lang_index}
                  ></div>
                ))}
              </div>
              <p className="duration">{item.duration}</p>
              <ul className="desc">
                {item.description.map((desc, desc_index) => (
                  <li key={desc_index}>{desc}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
