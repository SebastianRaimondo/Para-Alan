import React from "react";
import { Form, FormGroup, Label, Input, Button, ButtonGroup } from "reactstrap";
import { Link } from "react-router-dom";
import api from "../../components/api/apiRar";

export default class NuevoProfesorForm extends React.Component {
  constructor(props) {
    super(props);
    this.clean = this.clean.bind(this);
    
    this.state = {
      nombre: "",
      apellido: ""
    };
  }


 clean(){
  this.setState(state=>{state.nombre= ""; state.apellido= ""});
  this.props.onCollapse();

 }

  accept() {

    api.createProf(this.state, ()=> this.props.addFn());
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
          <Link to="/">
            <Button className="Cancell-Button" color="danger"  onClick={() => this.clean()}>
              Cancel
            </Button>
          </Link>
        </ButtonGroup>
      </Form>
    );
  }
}
