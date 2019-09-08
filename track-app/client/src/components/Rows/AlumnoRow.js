import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";
import EditarAlumno from "../Collapses/EditarAlumno";
import { FaTrash } from "react-icons/fa";

class AlumnoRow extends Component {
  render() {
    return (
      <tbody>
        <tr key={this.props.indice}>
          <div className="row">
            <div className="col-1">
              <td id="nombre">{this.props.nombre}</td>
            </div>
            <div className="col-1">
              <td id="Apellido">{this.props.apellido}</td>
            </div>
            <div className="col-2">
              <td id="email">{this.props.email}</td>
            </div>
            <div className="col-1">
              <td id="num legajo">{this.props.nLegajo}</td>
            </div>
            <div className="col-2">
              <td id="user git">{this.props.userGit}</td>
            </div>{" "}
            <div className="col-3">
              <td>
                <ButtonGroup>
                  <EditarAlumno {...this.props} />

                  <div>
                    <Button
                      className="Delete-Button"
                      color="danger"
                      size="sm"
                      onClick={e => {
                        if (
                          window.confirm(
                            "¿Esta seguro que desea eliminar este alumno?"
                          )
                        )
                          this.props.cb(this.props.id);
                      }}
                    >
                      <FaTrash />
                    </Button>
                  </div>
                </ButtonGroup>
              </td>
            </div>
          </div>
        </tr>
      </tbody>
    );
  }
}
export default AlumnoRow;
