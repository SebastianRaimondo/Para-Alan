import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./TableRow.css";

class AlumnoTableRow extends Component {
  render() {
    return (
      <tbody className="tb">
        <tr key={this.props.indice}>
          <td id="nombre">{this.props.nombre}</td>
          <td id="Apellido">{this.props.apellido}</td>
          <td id="num legajo">{this.props.nLegajo}</td>
          <td id="email">{this.props.email}</td>
          <td id="user git">{this.props.userGit}</td>

          <td className="Action-Buttons">
            <Link to={"/editCar/" + this.props.id} color="info">
              <Button className="Edit-Button">Editar</Button>
            </Link>

            <Button
              className="Delete-Button"
              color="danger"
              onClick={e => {
                if (
                  window.confirm("¿Esta seguro que desea eliminar este Alumno?")
                )
                  this.props.cb(this.props.id);
              }}
            >
              Eliminar
            </Button>
          </td>
        </tr>
      </tbody>
    );
  }
}
export default AlumnoTableRow;
