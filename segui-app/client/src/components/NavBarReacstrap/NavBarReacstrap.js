import React, { Component } from "react";
import { Navbar, Button } from "reactstrap";
import "./Button.css";
import DropDown from "../DropDown/DropDown";

//<Button className="btn1">Docentes</Button>
//<Button className="btn2">Alumnos</Button>
//<Button className="btn3">Entregas</Button>
// <Button className="btn4">Curso</Button>
//<Button className="btn5">Asignacion Alumno/Docente</Button>;

class NavBarReactstrap extends Component {
  render() {
    return (
      <Navbar className="nv" light expand="md">
        <DropDown />
      </Navbar>
    );
  }
}
export default NavBarReactstrap;
