import React from "react";
import { Form, FormGroup, Label, Input, Button, ButtonGroup } from "reactstrap";
import { Link } from "react-router-dom";
import api from "../../components/api/apiRar";

export default class NuevoProfesorForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      apellido: ""
    };
  }

  accept() {
    api.createProf(this.state, () => this.props.history.push("/profesores"));
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

        <ButtonGroup>
          <Button className="Edit-Button" onClick={() => this.accept()}>
            Ok
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Link to="/profesores">
            <Button className="Cancell-Button" color="danger">
              Cancel
            </Button>
          </Link>
        </ButtonGroup>
      </Form>
    );
  }
}
