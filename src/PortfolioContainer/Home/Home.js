import React from "react";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import "./Home.css";
import Navbarr from "./Navbarr/Navbarr";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Project from "./Project/Project";
export default function Home() {
  return (
    <div className="home-container" id="home">
      <Navbarr />
      <Profile />
      <About/>
     <Experience/>
     <Project/>
      <Footer />
    </div>
  );
}
