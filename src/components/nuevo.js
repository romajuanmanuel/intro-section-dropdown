import React, { useState } from "react";
import "../styles/NavBar.css";
import logo from "../img/logo.svg";
import todo from "../img/icon-todo.svg";
import calendar from "../img/icon-reminders.svg";
import planning from "../img/icon-planning.svg";
import reminder from "../img/icon-reminders.svg";
import menu from "../img/icon-menu.svg";

function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    console.log("Menú desplegable activado");
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className={`dropdowns ${active ? 'active' : ''} ${active ? 'sidebar' : ''}`}>
        <div className="dropdown">
          Features
          <div className="dropdown-content">
            <ol>
              <li>
                <img src={todo} alt=""></img> To do List
              </li>
              <li>
                <img src={calendar} alt=""></img> Calendar
              </li>
              <li>
                <img src={reminder} alt=""></img> Reminder
              </li>
              <li>
                <img src={planning} alt=""></img> Planning
              </li>
            </ol>
          </div>
        </div>
        <div className="dropdown">
          Company
          <div className="dropdown-content">
            <ol>
              <li> History</li>
              <li> Out Team</li>
              <li> Blog</li>
            </ol>
          </div>
          s
        </div>
        <div className="dropdown">Careers</div>
        <div className="dropdown">About</div>
        <div className={`empty ${active ? "active" : ""}`}></div>
        <div className={`buttons ${active ? "active" : ""}`}>
          <div className="button-container">
            <div className="dropdown">Login</div>
            <button>Register</button>
          </div>
        </div>
      </div>
      <div className="menu">
        <img onClick={handleClick} src={menu} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
