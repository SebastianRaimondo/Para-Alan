import React, { Component } from "react";
import { Alert, Row, Col, Container, Button, ButtonGroup } from "reactstrap";
import DualListBox from "react-dual-listbox";
import "react-dual-listbox/lib/react-dual-listbox.css";
import "font-awesome/css/font-awesome.min.css";

const options = [];

class DualListAlumno extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAlum: [],
      userSelect: false
    };
  }

  fillOptionsArray(value, label) {
    options.push({ value: value, label: label });
  }

  componentWillMount() {
    this.setState({ selectedAlum: this.props.aElegidos });
    console.log("component will mount dual list alumno");
  }

  componentDidMount() {
    this.props.alumnos.forEach(alum => {
      options.push({
        value: alum._id,
        label: alum.nombre + " " + alum.apellido
      });
    });
    console.log("Component did mount dual list alumno");
  }

  onChange = selectedAlum => {
    this.setState({ selectedAlum });
    this.setState({ userSelect: true });
  };

  render() {
    const { selectedAlum } = this.state;
    return (
      <div>
        <Alert color="dark">
          <Container>
            <Row>
              <Col xs="9">
                <h5>Alumnos cargados</h5>
              </Col>

              <Col xs="3">
                <h5>Alumnos del curso</h5>
              </Col>
            </Row>
          </Container>
        </Alert>

        <DualListBox
          options={options}
          selected={selectedAlum}
          onChange={this.onChange}
        />

        <br></br>
        <div>
          <ButtonGroup>
            <Button
              color="success"
              size="sm"
              disabled={!this.state.userSelect}
              onClick={() => {
                this.props.cbFnAlu(this.state.selectedAlum);
                this.setState({ userSelect: false });
                this.props.onCollapse();
              }}
            >
              Guardar
            </Button>
            <Button
              color="danger"
              size="sm"
              onClick={() => {
                this.setState({ selectedAlum: this.props.aElegidos });
                this.setState({ userSelect: false });
                this.props.onCollapse();
              }}
            >
              Cancelar
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

export default DualListAlumno;
