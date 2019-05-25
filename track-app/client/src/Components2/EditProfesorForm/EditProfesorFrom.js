import React from "react";
import { Form, FormGroup, Label, Input, Button, ButtonGroup } from "reactstrap";
import { Link } from "react-router-dom";
import api from "../../components/api/apiRar";

export default class EditProfesorForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      apellido: ""
    };
  }

  cancell(){
    
    this.props.onCollapse();
   }
   
  accept() {
    api.editProf(this.props.id, this.state,this.props.cbAdd
    );
  }

  componentDidMount() {
    api.getProf(this.props.id).then(res => {
      this.setState(res.data);
    });
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
          <Button className="Edit-Button" color="success" onClick={() => this.accept()}>
            Ok
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          
          <Button className="Cancell-Button" color="danger"  onClick={() => this.cancell()}>
              Cancel
            </Button>
         
        </ButtonGroup>
      </Form>
    );
  }
}
