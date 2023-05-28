import React from "react";

const Skills = () => {
  const images = [
    { img: "https://img.icons8.com/?size=512&id=3753&format=png", prof: "90%" },
    {
      img: "https://img.icons8.com/?size=512&id=vMqgHSToxrJR&format=png",
      prof: "50%",
    },
    {
      img: "https://img.icons8.com/?size=512&id=qGUfLiYi1bRN&format=png",
      prof: "70%",
    },
    {
      img: "https://img.icons8.com/?size=512&id=74402&format=png",
      prof: "65%",
    },
    {
      img: "https://img.icons8.com/?size=512&id=wPohyHO_qO1a&format=png",
      prof: "40%",
    },
    {
      img: "https://img.icons8.com/?size=512&id=54087&format=png",
      prof: "80%",
    },
    {
      img: "https://img.icons8.com/?size=512&id=13441&format=png",
      prof: "70%",
    },
    {
      img: "https://img.icons8.com/?size=512&id=MHcMYTljfKOr&format=png",
      prof: "70%",
    },
    {
      img: "https://img.icons8.com/?size=512&id=108784&format=png",
      prof: "90%",
    },
    {
      img: "https://img.icons8.com/?size=512&id=21278&format=png",
      prof: "95%",
    },
    {
      img: "https://img.icons8.com/?size=512&id=20909&format=png",
      prof: "95%",
    },
    {
      img: "https://www.guayerd.com/wp-content/uploads//2021/04/expressjs-logo.svg",
      prof: "80%",
    },
  ];

  const showprof = (event) => {
    const key = event.target.getAttribute("index");
    console.log("KEY", key);
    const text = document.getElementById(key);
    text.className = "show-prof";
  };

  const hideprof = (event) => {
    event.target.className = "text";
  };

  return (
    <div className="skills">
      <h3>SKILLS</h3>
      <p>Hover to See Current Proficiency</p>
      <div class="grid-container">
        {images.map((img, index) => {
          return (
            <div class="grid-item">
              <div className="img">
                <img
                  srcSet={img.img}
                  onMouseOver={showprof}
                  key={index}
                  index={index}
                />
                <div className="text" id={index} onMouseOut={hideprof}>
                  {img.prof}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
