import React from "react";
import "./Project.css";
export default function Project() {
  return (
    <section className="Project-container" id="projects">
      <h2 className="Project-title">Projects</h2>
      <div className="projects">
        <div className="pro-container">
          <img
            src={require("../../../assets/Project/fort.jpg")}
            alt="Fort"
            className="pro-image"
          />
          <h3 className="pro-title">Fort Guide System:</h3>
          <p className="pro-description">
            Worked on Fort Guide System project that enables user to see
            information of forts, distance from one fort to another. Technology
            used HTML CSS JS for Frontend and PHP MySQL for Backend.
          </p>
        </div>

        <div className="pro-container">
          <img
            src={require("../../../assets/Project/tpc.jpg")}
            alt="Fort"
            className="pro-image"
          />
          <h3 className="pro-title">Virtual Training and Placement Cell</h3>
          <p className="pro-description">
            Worked on Virtual TPC project that enables students and placement
            officer to upload resumes, manage data, assign companies, practicing
            Aptitude tests along with the other employability features.
            Technology used HTML CSS JS for Frontend and PHP MySQL for Backend.
          </p>
        </div>

        <div className="pro-container">
          <img
            src={require("../../../assets/Project/oes.jpg")}
            alt="Fort"
            className="pro-image"
          />
          <h3 className="pro-title">Online Expense System</h3>
          <p className="pro-description">
            Worked on Online Expense System project using Core Java and Advance
            Java concepts such as class, packages, java collection, constructor,
            Servlet, JSP, Hibernate etc.
          </p>
        </div>
      </div>
    </section>
  );
}
