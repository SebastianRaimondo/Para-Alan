import React, { Component } from "react";
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
        <DropdownToggle caret>Ver</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Profesores</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Alumnos</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Entregas</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Asignacion Docente/Alumno</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
export default DropDown;
