import React, { Component } from "react";
import { Alert,Row,Col,Container } from "reactstrap";
import DualListBox from "react-dual-listbox"
import "react-dual-listbox/lib/react-dual-listbox.css"
import "font-awesome/css/font-awesome.min.css"
import api from "../Api/apiRar"







const options = [
 // { value: "Pedro Anido", label: "Pedro Anido" },
 // { value: "Enana Flansilla", label: "Enana Flansilla" }
  
];



class KeyPad extends Component {

  constructor(props) {
    super(props);
    this.state = {
    selectedAlum: [],
    alumnosDelCurso: []
  
  };
  }

 fillOptionsArray(value,label){
    options.push({value:value, label:label});
  // this.state.alumnosDelCurso.push(value)
 }


 

  componentDidMount() { 
    this.props.alumnos.forEach(e => {
      api.getAlu(e).then(res => this.fillOptionsArray(res.data._id, res.data.nombre + " " + res.data.apellido ))
    });
  }


  onChange = selectedAlum => {
    this.setState({ selectedAlum });
  };
  
  render() {
const {alumnosDelCurso} = this.state
const { selectedAlum } = this.state;

console.log(this.props) 
console.log(alumnosDelCurso)
console.log(selectedAlum)


  
 



    return (
      <div>
        <Alert color="dark">
          <Container>
            <Row>
              <Col xs="9">
         <h5>Alumnos cargados</h5>
         </Col>

         <Col xs="3" >
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
      </div>
    );
  }
}

export default KeyPad;
