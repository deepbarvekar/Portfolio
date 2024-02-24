import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    
      <footer id="contact" className="footer-container">
      <div className="text">
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className="links">
        <li className="link">
          <img src={require("../../../assets/Footer/emailIcon.png")} alt="Email icon" />
          <a href="mailto:deepbarvekar2002@gmail.com">deepbarvekar2002@gmail.com</a>
        </li>
        <li className="link">
          <img
            src={require("../../../assets/Footer/githubIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://in.linkedin.com/in/deep-barvekar" target="_blank">linkedin.com/deep-barvekar</a>
        </li>
        <li className="link">
          <img src={require("../../../assets/Footer/linkedinIcon.png")}  alt="Github icon" />
          <a href="https://www.github.com/deepbarvekar" target="_blank">github.com/deepbarvekar</a>
        </li>
      </ul>
    </footer>
      
  );
}
