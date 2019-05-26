import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";
import { Link } from "react-router-dom";
import EditarAlumno from "../Collapses/EditarAlumno"

class AlumnoRow extends Component {
  render() {
    return (
      <tbody>
        <tr key={this.props.indice}>
          <td id="nombre">{this.props.nombre}</td>
          <td id="Apellido">{this.props.apellido}</td>
          <td id="email">{this.props.email}</td>
          <td id="num legajo">{this.props.nLegajo}</td>
          <td id="user git">{this.props.userGit}</td>

          <td>
          
            <ButtonGroup>
            <EditarAlumno {...this.props} />
              <Button
                className="Delete-Button"
                color="danger"
                onClick={e => {
                  if (
                    window.confirm(
                      "¿Esta seguro que desea eliminar este alumno?"
                    )
                  )
                    this.props.cb(this.props.id);
                }}
              >
                Eliminar
              </Button>
            </ButtonGroup>
          </td>
        </tr>
      </tbody>
    );
  }
}
export default AlumnoRow;
