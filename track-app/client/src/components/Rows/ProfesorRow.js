import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";
import EditarProfesor from "../Collapses/EditarProfesor";
import { FaTrash } from "react-icons/fa";

class ProfesorRow extends Component {
  render() {
    return (
      <tbody>
        <tr key={this.props.indice}>
          <div className="row">
            <div className="col-4">
              <td id="nombre">{this.props.nombre}</td>
            </div>

            <div className="col-4">
              <td id="Apellido">{this.props.apellido}</td>
            </div>
            <div className="col-4">
              <td>
                <ButtonGroup>
                  <EditarProfesor {...this.props} />
                  <div>
                    <Button
                      className="Delete-Button"
                      color="danger"
                      size="sm"
                      onClick={e => {
                        if (
                          window.confirm(
                            "¿Esta seguro que desea eliminar este profesor?"
                          )
                        )
                          this.props.callbackFn(this.props.id);
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
export default ProfesorRow;
