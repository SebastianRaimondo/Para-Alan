import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "reactstrap";

export default class NavegationBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar
          className="navbar-dark bg-dark"
          style={{ backgroundColor: " #4077D0" }}
          light
          expand="md"
        >
          <Nav className="mr-auto" inline>
            <Button color="link">
              <Link to={"/profesores"}>Profesores</Link>
            </Button>

            <Button color="link">
              <Link to={"/alumnos"}> Alumnos</Link>
            </Button>
            <Button color="link">
              <Link to={"/cursos"}> Cursos</Link>
            </Button>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
