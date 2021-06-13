import React, { useState } from "react";
import logo from "../assets/logo/webscript.png";
import user from "../assets/user.jpg";

/**
 * @author
 * @function SideMenu
 **/

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="webscript" />
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i class="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i class="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>

      <div className="search-controller">
        <button className="search-btn">
          <i class="bi bi-search"></i>
        </button>

        <input type="text" placeholder="search" />
      </div>

      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-speedometer2"></i>
              </div>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-newspaper"></i>
              </div>
              <span>Content</span>
            </a>
            <ul className="sub-menu">
              <li>
                <a>Courses</a>
              </li>
              <li>
                <a>Videos</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-vector-pen"></i>
              </div>
              <span>Design</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="side-menu-footer">
        <div className="avatar">
          <img src={user} alt="user" />
        </div>
        <div className="user-info">
          <h5>Rizwan Khan</h5>
          <p>rizwankhan@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
