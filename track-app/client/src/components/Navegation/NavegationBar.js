import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

export default class NavegationBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar
          className="navbar-dark bg-dark"
          style={{ backgroundColor: " #4077D0" }}
          light
          expand="md"
        >
          <NavbarBrand href="/">Home</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/profesores/">Profesores</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/alumnos">Alumnos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/cursos">Cursos</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
