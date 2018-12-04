import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class DropDown extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret color="info">
          Ver
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>ALumnos</DropdownItem>
          <DropdownItem>
            <Link to="/">Ver Alumnos</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/crearAlumno">Nuevo Alumno</Link>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem header>Profesores</DropdownItem>
          <DropdownItem>
            <Link to="/profesores">Ver Profesores</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/crearProfesor">Nuevo Profesor</Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
export default DropDown;
