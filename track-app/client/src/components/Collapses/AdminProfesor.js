import { Collapse, Button} from 'reactstrap';
import React, { Component } from 'react';
import DualListProfesor from "../KeyPad/DualListProfesor"

class AdminProfesor extends Component {
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
        <Button color="primary" size="slg" block onClick={this.toggle}><h5>Profesores</h5></Button>
        <Collapse isOpen={this.state.collapse}>
      <DualListProfesor {...this.props} onCollapse={()=> this.toggle()}/>
      
        </Collapse>
      </div>
    );
  }
}

export default AdminProfesor;
