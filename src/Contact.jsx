import React from "react";
import validator from "validator";
import emailjs from "emailjs-com";

const Contact = () => {
  const textareaStyle = {
    resize: "none",
  };

  const parseForm = (event) => {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    let infoBox = document.getElementById("infoBox");

    if (
      validator.isEmpty(name) ||
      validator.isEmpty(email) ||
      validator.isEmpty(subject) ||
      validator.isEmpty(message)
    ) {
      infoBox.innerHTML = "Please fill all the fields";
      infoBox.style.color = "red";
      return;
    } else {
      if (!validator.isEmail(email)) {
        infoBox.innerHTML = "Please enter a valid email";
        infoBox.style.color = "red";
        return;
      } else {
        name = validator.escape(name);
        email = validator.escape(email);
        email = validator.trim(email);
        email = validator.normalizeEmail(email);
        subject = validator.escape(subject);
        message = validator.escape(message);
        const data = {
          name,
          email,
          subject,
          message,
        };

        try {
          emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            data,
            process.env.REACT_APP_EMAILJS_USER_ID
          );

          infoBox.innerHTML = "Email sent successfully";
          infoBox.style.color = "green";
        } catch (error) {
          console.log(error);
          infoBox.innerHTML = "Email not sent. Please try again later";
          infoBox.style.color = "red";
        }
      }
    }
  };

  return (
    <section className="contact section6">
      <h3>Contact</h3>
      <h1>
        Let's <span>Talk!</span>
      </h1>
      <a href="mailto:contact@anuragsawant.tech">
        <i className="fa-light fa-envelope" ></i>
        contact@anuragsawant.tech
      </a>
      <form action="" method="POST" id="contact">
        <div className="group">
          <input type="text" placeholder="Name" id="name" />
          <input type="text" placeholder="Email" id="email" />
        </div>

        <input type="text" placeholder="Subject?" id="subject" />
        <textarea
          name="message"
          placeholder="message"
          cols="30"
          rows="10"
          style={textareaStyle}
          id="message"
        ></textarea>

        <input type="submit" className="submit" onClick={parseForm} />
        <p id="infoBox"></p>
      </form>
      <a href="#intro">Go To Top</a>
      <p id="cr">© 2023 Anurag Sawant</p>
    </section>
  );
};

export default Contact;
