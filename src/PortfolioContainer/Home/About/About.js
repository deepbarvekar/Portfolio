import React from 'react'
import "./About.css"
export default function About() {
  return (
    <div className='"about-container'>
    <section className="about-parent" id="about">
      <h2 className="about-title">About</h2>
      <div className="about-content">
        <img
          src={require("../../../assets/About/deep.jpg")}
          alt="Me sitting with a laptop"
          className="aboutImage"
        />
        <ul className="aboutItems">
          <li className="aboutItem">
            <img src={require("../../../assets/About/cursorIcon.png")}  alt="Cursor icon" />
            <div className="aboutItemText">
              <h3>Frontend Developer</h3>
              <p>
              I work with technologies such as HTML, CSS, and JavaScript to design and implement the responsive web pages that users interact with.
                
              </p>
            </div>
          </li>
          <li className="aboutItem">
            <img src={require("../../../assets/About/serverIcon.png")}  alt="Server icon" />
            <div className="aboutItemText">
              <h3>Backend Developer</h3>
              <p>
              I work with technologies such as PHP and Java to create and maintain the server-side logic and databases of websites.
              </p>
            </div>
          </li>
          <li className="aboutItem">
          <img src={require("../../../assets/About/uiIcon.png")}  alt="Server icon" />
            <div className="aboutItemText">
              <h3>Content Writer</h3>
              <p>
              I have create engaging and informative written material for various purposes, such as websites, blogs, social media, and marketing collateral.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    </div>
  )
}
