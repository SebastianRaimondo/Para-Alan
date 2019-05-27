import React, { Component } from 'react';
import { Collapse, Button} from 'reactstrap';
import { FaUserPlus } from 'react-icons/fa';
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
        <Button color="primary" size="sm" onClick={this.toggle}   style={{ marginBottom: '1rem' }}><FaUserPlus/></Button>
        <Collapse isOpen={this.state.collapse}>
      <CardNuevoProfesorForm {...this.props} onCollapse={()=> this.toggle()} />
        </Collapse>
      </div>
    );
  }
}

export default NuevoProfesor;
