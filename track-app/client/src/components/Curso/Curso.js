import React, { Component } from "react";
import AdminAlumno from "../Collapses/AdminAlumno";
import AdminProfesor from "../Collapses/AdminProfesor"
import { Container, Row, Col } from "reactstrap";
import api from "../Api/apiRar";
import AlertCurso from "../Alerts/AlertCurso/AlertCurso";
import AlertError from "../Alerts/AlertError"


class Curso extends Component {
  constructor() {
    super();
    this.state = {
     
      data: []
    };
  }

  componentDidMount() {
    api.getCurso(this.props.match.params.id).then(res => {
      this.setState({ data: res.data });

    
    });
  }

  modifyAlu(alumnos){

    api.editCurso(this.state.data._id, 
      {"materia" : this.state.data.materia,
       "sede" : this.state.data.sede,
        "anio" : this.state.data.anio, 
        "dias" : this.state.data.dias,
        "cuatrimestre" : this.state.data.cuatrimestre,
        "profesores" : this.state.data.profesores,
       "alumnos" : alumnos })
  }

  modifyProf(profesores){

    api.editCurso(this.state.data._id, 
      {"materia" : this.state.data.materia,
       "sede" : this.state.data.sede,
        "anio" : this.state.data.anio, 
        "dias" : this.state.data.dias,
        "cuatrimestre" : this.state.data.cuatrimestre,
        "profesores" : profesores,
       "alumnos" : this.state.data.alumnos })
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
               id={data._id}
               cbFnAlu= { alu => this.modifyAlu(alu)}
               alumnos = {data.alumnos}
               />


           <AdminProfesor
             id={data._id}
             cbFnProf= { prof => this.modifyProf(prof)}
             profesores = {data.profesores}
           />

            </Col>
          </Row>
        </Container>
      );
    } else return  <AlertError/>;;
  }
}
export default Curso;
