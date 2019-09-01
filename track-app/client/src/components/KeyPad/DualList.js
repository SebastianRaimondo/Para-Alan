import React, { Component } from "react";
import { Alert,Row,Col,Container, Button } from "reactstrap";
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
    data: [],
    selectedAlum: [],
    alumnosDelCurso: []
  
  };
  }

 fillOptionsArray(value,label){
    options.push({value:value, label:label});
 }


 componentWillMount(){
   this.state.selectedAlum = this.props.alumnos
 }

  componentDidMount() { 
    api.getAlumumnos().
      then(res => this.setState({ data: res.data })).
         then(()=> {this.state.data.forEach((alum) => 
           {options.push({value: alum._id , label: alum.nombre + " " +alum.apellido })})});
  }


modify(){

  api.editCurso(this.props.id, 
    {"materia" : this.props.materia,
     "sede" : this.props.sede,
      "anio" : this.props.anio, 
      "dias" : this.props.dias,
      "cuatrimestre" : this.props.cuatrimestre, 
     "alumnos" : this.state.selectedAlum })
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
        
<Button color="success" size="md"   onClick={() => this.modify()}>Aceptar</Button>

      </div>
    );
  }
}

export default KeyPad;
