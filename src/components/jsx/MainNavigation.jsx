import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/MainNavigation.css";

function MainNavigation() {
  return (
    <header className="header">
      <nav>
        <ul className="list">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="/"
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="/products"
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
