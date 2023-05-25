import React, { useEffect } from "react";


const About = () => {
  useEffect(() => {
    function isElementInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function handleIntersection(entries, observer) {
      entries.forEach((entry) => {
        const aboutHeading = document.getElementById("about-heading");
        const aboutParagraph = document.getElementById("about-paragraph");

        if (entry.isIntersecting) {
          aboutHeading.classList.add("animate__jackInTheBox");
          aboutHeading.classList.add("animate__animated");
          aboutParagraph.classList.add("animate__fadeInRight");
          aboutParagraph.classList.add("animate__animated");
          entry.target.classList.remove("hidden");
        } else {
          aboutHeading.classList.remove("animate__jackInTheBox");
          aboutHeading.classList.remove("animate__animated");
          aboutParagraph.classList.remove("animate__fadeInRight");
          aboutParagraph.classList.remove("animate__animated");
          entry.target.classList.add("hidden");
        }
      });
    }

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    const targetSection = document.getElementById("about");

    if (targetSection) {
      observer.observe(targetSection);

      if (isElementInViewport(targetSection)) {
        document
          .getElementById("about-heading")
          .classList.add("animate__jackInTheBox");
        document
          .getElementById("about-heading")
          .classList.add("animate__animated");
        document
          .getElementById("about-paragraph")
          .classList.add("animate__fadeInRight");
        document
          .getElementById("about-paragraph")
          .classList.add("animate__animated");
        targetSection.classList.remove("hidden");
      } else {
        targetSection.classList.add("hidden");
      }
    }
  }, []);

  return (
    <section className="about hidden" id="about">
      <h3 id="about-heading" className="animate__animated">
        About
      </h3>
      <div className="text">
        <div className="head">
          <h4>Background</h4>
        </div>
        <p id="about-paragraph" className="animate__animated">
          Hello, I'm <span>Anurag Sawant</span>, a passionate{" "}
          <span>web developer</span> with a penchant for creating exceptional
          online experiences. At <span>19 years old</span>, I am currently{" "}
          <span>
            pursuing a Bachelor's degree in Information Technology and hold a
            Diploma in IT
          </span>
          . From a young age, I've been captivated by the world of coding and
          have spent the past three years honing my skills in web development.
          It's a journey that has allowed me to explore the limitless
          possibilities of the digital realm and continuously expand my
          knowledge. As a web developer, I possess expertise in various
          programming languages and frameworks, enabling me to{" "}
          <span>craft visually appealing and functional websites</span>. I
          thrive on bringing ideas to life, turning concepts into engaging
          online platforms that leave a lasting impression. Beyond coding, I
          find <span>solace in music</span>. Listening to various genres not
          only helps me relax but also fuels my creativity. It's my way of
          finding inspiration and staying motivated throughout the development
          process. One thing I've learned is the importance of striking a
          balance between hard work and taking breaks. While I'm known to
          procrastinate occasionally, I believe it allows me to recharge and
          approach projects with renewed focus. I'm constantly seeking new
          challenges and opportunities to grow as a developer. Whether it's
          collaborating on exciting projects or continuously learning and
          adapting to emerging technologies, I'm eager to make a positive impact
          in the ever-evolving world of web development. Thank you for visiting
          my portfolio website. I invite you to explore my work and see how my
          passion for web development comes to life through each project I
          undertake.
        </p>
      </div>
    </section>
  );
};

export default About;
