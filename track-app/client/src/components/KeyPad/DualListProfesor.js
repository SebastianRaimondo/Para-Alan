import React, { Component } from "react";
import { Alert, Row, Col, Container, Button, ButtonGroup } from "reactstrap";
import DualListBox from "react-dual-listbox";
import "react-dual-listbox/lib/react-dual-listbox.css";
import "font-awesome/css/font-awesome.min.css";
import { FaTimes, FaRegSave} from 'react-icons/fa';

const options = [];

class DualListProfesor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProf: [],
      userSelect: false
    };
  }

  fillOptionsArray(value, label) {
    options.push({ value: value, label: label });
  }

  componentWillMount() {
    this.setState({ selectedProf: this.props.pElegidos });
  }

  componentDidMount() {
    this.props.profesores.forEach(prof => {
      options.push({
        value: prof._id,
        label: prof.nombre + " " + prof.apellido
      });
    });
  }

  onChange = selectedProf => {
    this.setState({ selectedProf });
    this.setState({ userSelect: true });
  };

  render() {
    const { selectedProf } = this.state;
    console.log(selectedProf);
    return (
      <div>
        <Alert color="dark">
          <Container>
            <Row>
              <Col xs="9">
                <h5>Profesores cargados</h5>
              </Col>

              <Col xs="3">
                <h5>Profesores del curso</h5>
              </Col>
            </Row>
          </Container>
        </Alert>
        <DualListBox
          options={options}
          selected={selectedProf}
          onChange={this.onChange}
        />

        
        <div className="card-header"  >
          <ButtonGroup>
            <Button
              color="primary"
              size="sm"
              disabled={!this.state.userSelect}
              onClick={() => {
                this.props.cbFnProf(this.state.selectedProf);
                this.setState({ userSelect: false });
                this.props.onCollapse();
              }}
            >
               <FaRegSave/>
            </Button>
            <Button
              color="danger"
              size="sm"
              onClick={() => {
                this.setState({ selectedProf: this.props.pElegidos });
                this.setState({ userSelect: false });
                this.props.onCollapse();
              }}
            >
               <FaTimes/>
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

export default DualListProfesor;
