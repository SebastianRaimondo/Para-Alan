import React, { Component } from 'react';
import { Collapse, Button} from 'reactstrap';
import { FaEdit } from 'react-icons/fa';
import CardEditCursoForm from "../Cards/CardEditCursoForm"

class EditarCurso extends Component {
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
      <CardEditCursoForm {...this.props} onCollapse={()=> this.toggle()} />
        </Collapse>
      </div>
    );
  }
}

export default EditarCurso;
