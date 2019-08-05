import React, { Component } from "react";
import AdminAlumno from "../Collapses/AdminAlumno"
import { Container, Row, Col } from 'reactstrap';

class Curso extends Component{

render(){


return(

<Container>
    <Row>
        <Col>
<AdminAlumno/>
</Col>
</Row>

</Container>

);





  }

}
export default Curso;