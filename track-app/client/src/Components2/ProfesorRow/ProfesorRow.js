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

          <td>
            <Link to={"/editarProfesor/" + this.props.id} color="info">
              <Button className="Edit-Button">Editar</Button>
            </Link>
            <ButtonGroup>
              <Button
                className="Delete-Button"
                color="danger"
                onClick={e => {
                  if (
                    window.confirm(
                      "¿Esta seguro que desea eliminar este profesor?"
                    )
                  )
                    this.props.cb(this.props.id);
                }}
              >
                Eliminar
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button className="Edit-Button" color="info">
                Alumnos asignados
              </Button>
            </ButtonGroup>
          </td>
        </tr>
      </tbody>
    );
  }
}
export default AlumnoRow;
