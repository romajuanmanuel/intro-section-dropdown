import React from 'react';
import '../styles/NavBar.css';

function Navbar() {
    return (
      <div className="navbar">
        <div className="logo">Logo</div>
        <div className="dropdowns">
          <div className="dropdown">
            Dropdown 1
            <div className="dropdown-content">
              <ol>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ol>
            </div>
          </div>
          <div className="dropdown">
            Dropdown 2
            <div className="dropdown-content">
              <ol>
                <li className=''>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ol>
            </div>
          </div>
          <div className="dropdown">
            Dropdown 3
            <div className="dropdown-content">
              <ol>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="empty"></div>
        <div className="buttons">
          <button>Button 1</button>
          <button>Button 2</button>
        </div>
      </div>
    );
  }
  
  export default Navbar;