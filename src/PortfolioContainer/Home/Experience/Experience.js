import React from "react";
import "./Experience.css";

export default function Experience() {
  return (
    <section className="Experience-container " id="experience">
      <h2 className="Experience-title">Experience</h2>
      <div className="Experience-content">
      <div className="skills">
          
              <div  className="skill">
                <div className="skillImageContainer">
                <img src={require("../../../assets/Experience/html.png")} alt="HTML"  />
                </div>
                <p>HTML</p>
              </div>

              <div  className="skill">
                <div className="skillImageContainer">
                <img src={require("../../../assets/Experience/css.png")} alt="CSS"  />
                </div>
                <p>CSS</p>
              </div>

              <div  className="skill">
                <div className="skillImageContainer">
                <img src={require("../../../assets/Experience/java-script.png")} alt="Java-script" />
                </div>
                <p>Java-script</p>
              </div>

              <div  className="skill">
                <div className="skillImageContainer">
                <img src={require("../../../assets/Experience/react.png")} alt="React" />
                </div>
                <p>React</p>
              </div>

              <div  className="skill">
                <div className="skillImageContainer">
                <img src={require("../../../assets/Experience/php.png")} alt="PHP" />
                </div>
                <p>PHP</p>
              </div>

              <div  className="skill">
                <div className="skillImageContainer">
                <img src={require("../../../assets/Experience/mysql.png")} alt="MySQl" />
                </div>
                <p>MySQl</p>
              </div>

              <div  className="skill">
                <div className="skillImageContainer">
                <img src={require("../../../assets/Experience/java.png")} alt="Java" />
                </div>
                <p>Java</p>
              </div>
       </div>
        <ul className="history">
          
              <li className="historyItem">
              <img src={require("../../../assets/Experience/css.png")} alt="CSS"  />
                <div className="historyItemDetails">
                  <h3>Content Writer, HyperSteller Technology </h3>
                  <p>Dec 2023 - Present</p>
                  <ul>
                    Creates the posts and informative written material such as blogs, Case studies.
                  </ul>
                </div>
              </li>
            
              <li className="historyItem">
              <img src={require("../../../assets/Experience/css.png")} alt="CSS"  />
                <div className="historyItemDetails">
                  <h3>Web Full Stack Developer, Sahu Technologies </h3>
                  <p>June 2022 - August 2022</p>
                  <ul>
                    Crete web pages by using Technologies such as HTML,CSS,Javascript for front end and php for backend
                  </ul>
                </div>
              </li>

              <li className="historyItem">
              <img src={require("../../../assets/Experience/css.png")} alt="CSS"  />
                <div className="historyItemDetails">
                  <h3>Front end Developer, C-TECH CONTINENTALS </h3>
                  <p>June 2020 - August 2020</p>
                  <ul>
                  Build the responsive web pages by using HTML,CSS.
                  </ul>
                </div>
              </li>
        </ul>
      </div>
      
    </section>
  );
}
