import React, { useState } from 'react';
import './Navbarr.css';

export default function Navbarr() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="#profile" className="title">
        &lt;Deep/&gt;
      </a>

      {!isOpen && (
        <span
          class="mobile-bars"
          onClick={() => {
            setIsOpen(true);
          }}>
          <i class="fa-solid fa-bars"></i>
        </span>
      )}

      {isOpen && (
        <div className="menu">
          <a href="#profile" className="title">
            &lt;Deep/&gt;
          </a>
          <span
            class="mobile-cross"
            onClick={() => {
              setIsOpen(false);
            }}>
            <i class="fa-solid fa-xmark"></i>
          </span>
          <ul className="menuitems">
            <li
              onClick={() => {
                setIsOpen(false);
              }}>
              <a href="#about">About</a>
            </li>
            <li
              onClick={() => {
                setIsOpen(false);
              }}>
              <a href="#experience">Experience</a>
            </li>
            <li
              onClick={() => {
                setIsOpen(false);
              }}>
              <a href="#projects">Projects</a>
            </li>
            <li
              onClick={() => {
                setIsOpen(false);
              }}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}

      <div className="menu nav-lg">
        <span class="mobile-cross">
          <i class="fa-solid fa-xmark"></i>
        </span>
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
