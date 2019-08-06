import React, { Component } from 'react';
import { Collapse, Button} from 'reactstrap';
import CardNuevoCursoForm from "../Cards/CardNuevoCursoForm"

class NuevoCurso extends Component {
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
        <Button color="primary" size="sm" onClick={this.toggle}   style={{ marginBottom: '1rem' }}>Crear curso</Button>
        <Collapse isOpen={this.state.collapse}>
      <CardNuevoCursoForm {...this.props} onCollapse={()=> this.toggle()} />
        </Collapse>
      </div>
    );
  }
}

export default NuevoCurso;
