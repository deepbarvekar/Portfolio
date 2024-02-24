import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container" id="profile">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a
                href="https://in.linkedin.com/in/deep-barvekar"
                target="_blank"
              >
                <i class="fa fa-linkedin-square"></i>
              </a>
              <a href="#">
                <i class="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i class="fa fa-instagram"></i>
              </a>
              <a href="https://www.github.com/deepbarvekar">
                <i class="fa fa-github-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Deep</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Java Developer",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "React Dev",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                skills of developing software with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
                       <a
              href="https://drive.google.com/file/d/1rIToGcnWrHtLLRaPt812ZM0xERpupCGA/view?usp=sharing"
              download="https://drive.google.com/file/d/1rIToGcnWrHtLLRaPt812ZM0xERpupCGA/view?usp=sharing"
              target="_blank" 
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
