import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";
import EditarAlumno from "../Collapses/EditarAlumno"
import { FaTrash } from 'react-icons/fa';



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
        </tr>
      </tbody>
    );
  }
}
export default AlumnoRow;
