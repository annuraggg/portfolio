import React, { useEffect } from "react";

const Skills = () => {
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
        const element1 = document.getElementById("skills");

        if (entry.isIntersecting) {
          element1.classList.add("animate__fadeInDown", "animate__animated");
          entry.target.classList.remove("hidden");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    const targetSection = document.getElementById("skills");

    if (targetSection) {
      observer.observe(targetSection);

      if (isElementInViewport(targetSection)) {
        const experience = document.getElementById("skills");

        experience.classList.add("animate__fadeInDown", "animate__animated");
        targetSection.classList.remove("hidden");
      } else {
        targetSection.classList.add("hidden");
      }
    }
  }, []);

  const images = [
    {
      name: "PHP",
      img: "https://img.icons8.com/?size=512&id=3753&format=png",
      prof: "90%",
    },
    {
      name: "TypeScript",
      img: "https://img.icons8.com/?size=512&id=vMqgHSToxrJR&format=png",
      prof: "50%",
    },
    {
      name: "MySQL",
      img: "https://img.icons8.com/?size=512&id=qGUfLiYi1bRN&format=png",
      prof: "70%",
    },
    {
      name: "MongoDB",
      img: "https://img.icons8.com/?size=512&id=74402&format=png",
      prof: "65%",
    },
    {
      name: "React.JS",
      img: "https://img.icons8.com/?size=512&id=wPohyHO_qO1a&format=png",
      prof: "40%",
    },
    {
      name: "Node.JS",
      img: "https://img.icons8.com/?size=512&id=54087&format=png",
      prof: "80%",
    },
    {
      name: "Python",
      img: "https://img.icons8.com/?size=512&id=13441&format=png",
      prof: "70%",
    },
    {
      name: "Flask",
      img: "https://img.icons8.com/?size=512&id=MHcMYTljfKOr&format=png",
      prof: "70%",
    },
    {
      name: "JavaScript",
      img: "https://img.icons8.com/?size=512&id=108784&format=png",
      prof: "90%",
    },
    {
      name: "Cascading Style Sheet",
      img: "https://img.icons8.com/?size=512&id=21278&format=png",
      prof: "95%",
    },
    {
      name: "Hypertext Markup Language",
      img: "https://img.icons8.com/?size=512&id=20909&format=png",
      prof: "95%",
    },
    {
      name: "Express",
      img: "https://www.guayerd.com/wp-content/uploads//2021/04/expressjs-logo.svg",
      prof: "80%",
    },
  ];

  const showprof = (event) => {
    const key = event.target.getAttribute("index");
    const aliveElem = document.getElementsByClassName("show-prof");
    for (let i = 0; i < aliveElem.length; i++) {
      aliveElem[i].className = "text";
    }

    const text = document.getElementById(key);
    text.className = "show-prof";
  };

  const hideprof = (event) => {
    event.target.className = "text";
  };

  return (
    <section className="skills section4 hidden" id="skills">
      <h3>SKILLS</h3>
      <p>Hover to See Current Proficiency</p>
      <div className="grid-container">
        {images.map((img, index) => {
          return (
            <div className="grid-item" key={index}>
              <div className="img">
                <img
                  alt={img.name}
                  srcSet={img.img}
                  onMouseEnter={showprof}
                  key={index}
                  index={index}
                />
                <div className="text" id={index} onMouseLeave={hideprof}>
                  {img.prof}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
