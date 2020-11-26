/* Navigation bar. */

// Setup.
import React from "react";
import { Link } from "react-router-dom";

// Styles.
import { Navbar, Nav } from "react-bootstrap";
import "../styles/MyNav.css";

// Rendering function
function MyNav() {
  return (
    <Navbar className="myNavbar">
      <Nav className="myNav">
        <Link to="/">Home</Link>
        <Link to="/random-cerveza">Random</Link>
        <Link to="/new-cerveza">New</Link>
      </Nav>
    </Navbar>
  );
}

export default MyNav;
