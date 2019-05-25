import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

import EditProfesorForm from "../EditProfesorForm/EditProfesorForm"

class EditarP extends Component {
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
        <Button color="primary" onClick={this.toggle}   style={{ marginBottom: '1rem' }}>Agregar Alumno</Button>
        <Collapse isOpen={this.state.collapse}>
      <EditProfesorForm {...this.props} onCollapse={()=> this.toggle()} />
        </Collapse>
      </div>
    );
  }
}

export default EditarP;

