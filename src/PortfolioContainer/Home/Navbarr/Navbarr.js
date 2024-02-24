import React from 'react';
import "./Navbarr.css";
/*import { Navbar,Nav,Container} from 'react-bootstrap'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  
import About from '../About/About';
import Project from '../Project/Project';
import Experience from '../Experience/Experience';
import Footer from '../Footer/Footer';*/
export default function Navbarr() {
  return (
  /* <BrowserRouter>
   <div className="navbar">
    <Navbar bg="dark" data-bs-theme="dark">
    <Container >
      <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
      <Nav className="me-auto">
      <div className="menu">
        <u className="menuitems">
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
        <Nav.Link as={Link} to="/projects">Project</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </u>
        </div>
      </Nav>
    </Container>
  </Navbar>
  <div>
    <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/contact" element={<Footer/>}/>
    </Routes>
  </div>
  </div>
  </BrowserRouter>*/
 <nav className="navbar">
        <a href="#profile" className="title" >Portfolio</a>

        <div className="menu">
        <ul className="menuitems">
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            </div>
        </nav>
  );
}
