import { Button } from "reactstrap";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../api/apiRar";
import "./FomALumno.css";

class NuevoAlumnoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      apellido: "",
      nLegajo: "",
      email: "",
      userGit: ""
    };
  }

  accept() {
    api.createAlu(this.state, () => this.props.history.push("/"));
  }

  render() {
    return (
      <div className="a">
        <div className="input-group">
          <span>Nombre:</span>
          <input
            type="string"
            value={this.state.nombre}
            onChange={event => this.setState({ nombre: event.target.value })}
          />

          <span>Apellido:</span>
          <input
            type="string"
            value={this.state.apellido}
            onChange={event => this.setState({ apellido: event.target.value })}
          />

          <span>Legajo:</span>
          <input
            type="string"
            value={this.state.nLegajo}
            onChange={event =>
              this.setState({ nLegajo: parseInt(event.target.value) })
            }
          />

          <span>Email:</span>
          <input
            type="mail"
            value={this.state.email}
            onChange={event => this.setState({ email: event.target.value })}
          />

          <span>Usuario Git:</span>
          <input
            type="string"
            value={this.state.userGit}
            onChange={event => this.setState({ userGit: event.target.value })}
          />
        </div>
        <Button className="Edit-Button" onClick={() => this.accept()}>
          Ok
        </Button>

        <Link to="/">
          <Button className="Cancell-Button" color="danger">
            Cancell
          </Button>
        </Link>
      </div>
    );
  }
}

export default NuevoAlumnoForm;
