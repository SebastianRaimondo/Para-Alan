import React, { Component } from "react";
import AdminAlumno from "../Collapses/AdminAlumno"
import { Container, Row, Col } from 'reactstrap';
import api from "../Api/apiRar"
import AlertCurso from "../AlertCurso/AlertCurso"




class Curso extends Component{
  constructor() {
    super();
    this.state = {
      data: []
    };
  }



  componentDidMount() {

    api.getCurso(this.props.match.params.id).then(res => {
      this.setState({data: res.data})
    });
  }

  

render(){

  const { data } = this.state


return(
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




<AdminAlumno/>
</Col>
</Row>

</Container>

);

  }

}
export default Curso;