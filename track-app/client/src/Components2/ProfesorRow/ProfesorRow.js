import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";
import EditarProfesor from "../Collapses/EditarProfesor"
import { FaTrash } from 'react-icons/fa';

class ProfesorRow extends Component {
  render() {
    return (
      <tbody>
        <tr key={this.props.indice}>
          <td id="nombre">{this.props.nombre}</td>
          <td id="Apellido">{this.props.apellido}</td>

          <td>
         
         <ButtonGroup>
         <EditarProfesor {...this.props} />
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
                <FaTrash/>
                

              </Button>

              
              </ButtonGroup>
          </td>
        </tr>
      </tbody>
    );
  }
}
export default ProfesorRow;
