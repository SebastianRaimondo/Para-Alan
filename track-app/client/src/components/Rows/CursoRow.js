import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";
import EditarAlumno from "../Collapses/EditarAlumno"
import { FaTrash } from 'react-icons/fa';



class CursoRow extends Component {
  render() {
    return (
      <tbody>
        <tr key={this.props.indice}>
          <td id="materia">{this.props.materia}</td>
          <td id="sede">{this.props.sede}</td>
          <td id="dias">{this.props.dias}</td>
          <td id="cuatrimestre">{this.props.cuatrimestre}</td>
          <td id="anio">{this.props.anio}</td>

          <td>
          
            <ButtonGroup>
             
              <Button
                className="Delete-Button"
                color="danger"
                size="sm"
                onClick={e => {
                  if (
                    window.confirm(
                      "¿Esta seguro que desea eliminar este curso?"
                    )
                  )
                  this.props.callbackFn(this.props.id);;
                }}
              >
                <FaTrash />
               
              </Button>
            </ButtonGroup>
          </td>
        </tr>
      </tbody>
    );
  }
}
export default CursoRow;
