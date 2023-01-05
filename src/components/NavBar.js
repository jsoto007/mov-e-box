import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav id="nav-bar">
            <NavLink
              to="/"
              exact
              >
                Home
            </NavLink>
            <NavLink
              to="about"
              >
                About
            </NavLink>
            <NavLink
              to="/movies"
              exact
              >
                Movies
            </NavLink>
            <NavLink
              to="/add-movies"
              >
                Add Movies
              </NavLink>
        </nav>
    )
}

export default NavBar;