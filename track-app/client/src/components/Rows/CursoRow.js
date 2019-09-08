import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";
import EditarCurso from "../Collapses/EditarCurso";
import { FaArrowAltCircleRight, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

class CursoRow extends Component {
  render() {
    return (
      <tbody>
        <tr key={this.props.indice}>
          <div className="row">
            <div className="col-1">
              <td id="materia">{this.props.materia}</td>
            </div>
            <div className="col-2">
              <td id="sede">{this.props.sede}</td>
            </div>
            <div className="col-2">
              <td id="dias">{this.props.dias}</td>
            </div>
            <div className="col-2">
              <td id="cuatrimestre">{this.props.cuatrimestre}</td>
            </div>
            <div className="col-1">
              <td id="anio">{this.props.anio}</td>
            </div>
            <div className="col-4">
              <td>
                <ButtonGroup>
                  <EditarCurso {...this.props} />
                  <div>
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
                          this.props.callbackFn(this.props.id);
                      }}
                    >
                      <FaTrash />
                    </Button>
                  </div>
                  <div>
                    <Link
                      to={"/curso/" + this.props.id}
                      className="btn btn-primary Edit-Button btn-sm"
                    >
                      <FaArrowAltCircleRight />
                    </Link>
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
export default CursoRow;
