import React from "react";
import { NavLink, useHistory } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <NavLink
              to="/"
              exact
              >
                Home
            </NavLink>
            <NavLink
              to="Search"
              >
                Search
            </NavLink>
            <NavLink
              to="/movies"
              exact
              >
                Movies
            </NavLink>
            <NavLink
              to="/movies/about"
            >
              About Movies
            </NavLink>
        </div>
    )
}

export default NavBar;