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
    
    });
  }

  render() {
    const { data } = this.state;

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
              />
              <AdminAlumno
               materia={data.materia}
               sede={data.sede}
               dias={data.dias}
               cuatrimestre={data.cuatrimestre}
               anio={data.anio}
               id={data._id}
               alumnos={data.alumnos} />
            </Col>
          </Row>
        </Container>
      );
    } else return  <AlertError/>;;
  }
}
export default Curso;
