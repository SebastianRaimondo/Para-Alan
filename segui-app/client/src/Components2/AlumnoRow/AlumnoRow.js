import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";
import { Link } from "react-router-dom";

class AlumnoRow extends Component {
  render() {
    return (
      <tbody>
        <tr key={this.props.indice}>
          <td id="nombre">{this.props.nombre}</td>
          <td id="Apellido">{this.props.apellido}</td>
          <td id="num legajo">{this.props.nLegajo}</td>
          <td id="email">{this.props.email}</td>
          <td id="user git">{this.props.userGit}</td>

          <td>
            <Link to={"/editAlumno/" + this.props.id} color="info">
              <Button className="Edit-Button">Editar</Button>
            </Link>
            <ButtonGroup>
              <Button
                className="Delete-Button"
                color="danger"
                onClick={e => {
                  if (
                    window.confirm(
                      "¿Esta seguro que desea eliminar este Alumno?"
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
