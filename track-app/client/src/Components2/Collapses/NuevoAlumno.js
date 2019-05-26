import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import CardAlumnoForm from "../Card/CardAlumnoForm"
import { FaUserPlus } from 'react-icons/fa';

class NuevoAlumno extends Component {
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
        <Button color="primary" size="sm" onClick={this.toggle}   style={{ marginBottom: '1rem' }}><FaUserPlus/></Button>
        <Collapse isOpen={this.state.collapse}>
      <CardAlumnoForm {...this.props} onCollapse={()=> this.toggle()} />
        </Collapse>
      </div>
    );
  }
}

export default NuevoAlumno;
