import React, { Component } from "react";
import AdminAlumno from "../Collapses/AdminAlumno";
import { Container, Row, Col } from "reactstrap";
import api from "../Api/apiRar";
import AlertCurso from "../Alerts/AlertCurso/AlertCurso";
import AlertError from "../Alerts/AlertError"


class Curso extends Component {
  constructor() {
    super();
    this.state = {
      materia: "",
      sede: "",
      dias: "",
      cuatrimestre: "",
      anio: "",
      alumnos: [],

      data: []
    };
  }

  componentDidMount() {
    api.getCurso(this.props.match.params.id).then(res => {
      this.setState({ data: res.data });
      console.log("component did mount");
    });
  }

  render() {
    const { data } = this.state;
    console.log(data);
    console.log("soy el curso y me renderize, viva waldo");

    if (data._id !== undefined) {
      return (
        <Container>
          <Row>
            <Col>
              <AlertCurso
                materia={data.materia}
                sede={data.sede}
                dias={data.dias}
                cuatrimestre={data.cuatrimestre}
                anio={data.anio}
                id={data._id}
              />
              <AdminAlumno idCurso={data._id} />
            </Col>
          </Row>
        </Container>
      );
    } else return  <AlertError/>;;
  }
}
export default Curso;
