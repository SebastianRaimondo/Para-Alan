import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import CardNuevoProfesorForm from "../Card/CardNuevoProfesorForm"

class NuevoProfesor extends Component {
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
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Agregar Profesor</Button>
        <Collapse isOpen={this.state.collapse}>
      <CardNuevoProfesorForm/>
        </Collapse>
      </div>
    );
  }
}

export default NuevoProfesor;
