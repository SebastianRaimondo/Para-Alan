import React, { Component } from "react";
import AdminAlumno from "../Collapses/AdminAlumno"
import { Container, Row, Col } from 'reactstrap';
import api from "../Api/apiRar"
class Curso extends Component{


  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }



  componentDidMount() {

    api.getCurso(this.props.match.params.id).then(res => {
      this.setState({data:res.data})
    });
  }

  

render(){

console.log(this.state)

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