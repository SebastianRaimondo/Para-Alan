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
     
      data: [],
      profParaElegir : [],
      alumParaElegir : []
    };
  }

  

  componentDidMount() {
    api.getCurso(this.props.match.params.id).then(res => {
      this.setState({ data: res.data });
      api.getProfesores().then(res =>{this.setState({profParaElegir : res.data})});
      api.getAlumumnos().then(res => this.setState({alumParaElegir : res.data}))

     console.log("component did mount curso")

    
    });
  }


refresh(){
  api.getCurso(this.props.match.params.id).then(res => {
    this.setState({ data: res.data });
    api.getProfesores().then(res =>{this.setState({profParaElegir : res.data})});
    api.getAlumumnos().then(res => this.setState({alumParaElegir : res.data}))

   console.log("component did mount curso")

  
  });
}

 modifyAlu(alumnos){
   var newState ={
    "materia" : this.state.data.materia,
    "sede" : this.state.data.sede,
     "anio" : this.state.data.anio, 
     "dias" : this.state.data.dias,
     "cuatrimestre" : this.state.data.cuatrimestre,
     "profesores" : this.state.data.profesores,
     "_id": this.state.data._id,
     "alumnos": alumnos
   }
   console.log(newState)
   this.setState({data:newState})
    api.editCurso(this.state.data._id, 
      {"materia" : this.state.data.materia,
       "sede" : this.state.data.sede,
        "anio" : this.state.data.anio, 
        "dias" : this.state.data.dias,
        "cuatrimestre" : this.state.data.cuatrimestre,
        "profesores" : this.state.data.profesores,
       "alumnos" : alumnos})
  }

  modifyProf(profesores){
    var newState ={
      "materia" : this.state.data.materia,
      "sede" : this.state.data.sede,
       "anio" : this.state.data.anio, 
       "dias" : this.state.data.dias,
       "cuatrimestre" : this.state.data.cuatrimestre,
       "profesores" : profesores,
       "_id": this.state.data._id,
       "alumnos": this.state.data.profesores
     }
    this.setState({data: newState})
    api.editCurso(this.state.data._id, 
      {"materia" : this.state.data.materia,
       "sede" : this.state.data.sede,
        "anio" : this.state.data.anio, 
        "dias" : this.state.data.dias,
        "cuatrimestre" : this.state.data.cuatrimestre,
        "profesores" : profesores,
       "alumnos" : this.state.data.alumnos})
  }


  render() {
    const { alumParaElegir } = this.state;
    const { profParaElegir } = this.state;
    const { data } = this.state;
   console.log(data)
    if ((profParaElegir.length > 0) && (alumParaElegir.length > 0) && (data !== undefined)) {
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
               cbFnAlu= { alu => this.modifyAlu(alu)}
               alumnos = {alumParaElegir}
               aElegidos = {data.alumnos}
               />


           <AdminProfesor
             cbFnProf= { prof => this.modifyProf(prof)}
             profesores = {profParaElegir}
             pElegidos = {data.profesores}
           />

            </Col>
          </Row>
        </Container>
      );
    } else return  <AlertError/>;;
  }
}
export default Curso;
