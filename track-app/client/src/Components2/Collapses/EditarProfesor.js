import React, { Component } from 'react';
import { Collapse, Button} from 'reactstrap';
import CardEditProfesorForm from "../Card/CardEditProfesorForm"
import { FaEdit } from 'react-icons/fa';

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
        <Button color="primary" size="sm" onClick={this.toggle}><FaEdit/></Button>
        <Collapse isOpen={this.state.collapse}>
      <CardEditProfesorForm {...this.props} onCollapse={()=> this.toggle()} />
        </Collapse>
      </div>
    );
  }
}

export default EditarProfesor;
