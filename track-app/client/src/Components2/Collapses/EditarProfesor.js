import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import CardEditProfesorForm from "../Card/CardEditProfesorForm"

class EditarProfesor extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {

    this.setState(state => ({ collapse: !state.collapse }));
  }


  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>Editar</Button>
        <Collapse isOpen={this.state.collapse}>
      <CardEditProfesorForm {...this.props} onCollapse={()=> this.toggle()} />
        </Collapse>
      </div>
    );
  }
}

export default EditarProfesor;
