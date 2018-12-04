import React from "react";
import { Form, FormGroup, Label, Input, Button, ButtonGroup } from "reactstrap";
import { Link } from "react-router-dom";
import api from "../../components/api/apiRar";

export default class NuevoAlumnoForm extends React.Component {
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
      <Form>
        <FormGroup>
          <Label>Nombre:</Label>
          <Input
            type="string"
            name="nombre"
            value={this.state.nombre}
            onChange={event => this.setState({ nombre: event.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label>Apellido:</Label>
          <Input
            type="string"
            name="apellido"
            value={this.state.apellido}
            onChange={event => this.setState({ apellido: event.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label>Legajo:</Label>
          <Input
            type="number"
            name="legajo"
            value={this.state.nLegajo}
            onChange={event =>
              this.setState({ nLegajo: parseInt(event.target.value) })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label>Mail:</Label>
          <Input
            type="email"
            name="email"
            value={this.state.email}
            onChange={event => this.setState({ email: event.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label>Usuario Git:</Label>
          <Input
            type="string"
            name="usuarioGit"
            value={this.state.userGit}
            onChange={event => this.setState({ userGit: event.target.value })}
          />
        </FormGroup>

        <ButtonGroup>
          <Button className="Edit-Button" onClick={() => this.accept()}>
            Ok
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Link to="/">
            <Button className="Cancell-Button" color="danger">
              Cancell
            </Button>
          </Link>
        </ButtonGroup>
      </Form>
    );
  }
}
