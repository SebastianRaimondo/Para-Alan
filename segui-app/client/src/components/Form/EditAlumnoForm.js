import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../api/apiRar";

class EditAlumnoForm extends Component {
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
    api.editAlu(this.props.match.params.id, this.state, () =>
      this.props.history.push("/")
    );
  }

  componentDidMount() {
    api.getAlu(this.props.match.params.id).then(res => {
      this.setState(res.data);
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="w-25 p-3">
          <InputGroup>
            <div>
              <InputGroupAddon>Nombre</InputGroupAddon>
              <Input
                type="string"
                value={this.state.nombre}
                onChange={event =>
                  this.setState({ nombre: event.target.value })
                }
              />
            </div>

            <div>
              <InputGroupAddon>Apellido</InputGroupAddon>
              <Input
                type="string"
                value={this.state.apellido}
                onChange={event =>
                  this.setState({ apellido: event.target.value })
                }
              />
            </div>
            <div>
              <InputGroupAddon>Legajo</InputGroupAddon>
              <Input
                type="number"
                value={this.state.nLegajo}
                onChange={event =>
                  this.setState({ nLegajo: parseInt(event.target.value) })
                }
              />

              <div style={{ fontSize: 20, color: "red" }} />
            </div>
            <div>
              <InputGroupAddon>Email</InputGroupAddon>
              <Input
                type="mail"
                value={this.state.email}
                onChange={event => this.setState({ email: event.target.value })}
              />
            </div>

            <div>
              <InputGroupAddon>Usuario Git</InputGroupAddon>
              <Input
                type="string"
                value={this.state.userGit}
                onChange={event =>
                  this.setState({ userGit: event.target.value })
                }
              />
            </div>
          </InputGroup>

          <Button
            className="Edit-Button"
            color="info"
            onClick={() => {
              this.accept();
            }}
          >
            Ok
          </Button>

          <Link to="/">
            <Button className="Cancell-Button" color="danger">
              Cancell
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default EditAlumnoForm;
