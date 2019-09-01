import React, { Component } from "react";
import { Alert,Row,Col,Container, Button } from "reactstrap";
import DualListBox from "react-dual-listbox"
import "react-dual-listbox/lib/react-dual-listbox.css"
import "font-awesome/css/font-awesome.min.css"
import api from "../Api/apiRar"


const options = [];


class DualListAlumno extends Component {

  constructor(props) {
    super(props);
    this.state = {
    data: [],
    selectedAlum: []
  };
}

 fillOptionsArray(value,label){
    options.push({value:value, label:label});
 }


 componentWillMount(){
   this.setState({selectedAlum : this.props.alumnos})
 }

  componentDidMount() { 
    api.getAlumumnos().then(res => this.setState({ data: res.data })).then(()=> {this.state.data.forEach((alum) => 
           {options.push({value: alum._id , label: alum.nombre + " " +alum.apellido })})});
  }


  onChange = selectedAlum => {
    this.setState({ selectedAlum });
  };
  
  render() {

const { selectedAlum } = this.state;
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
        
        <Button color="success" size="md"   onClick={() => {this.props.cbFnAlu(this.state.selectedAlum); this.props.onCollapse()}}>Aceptar</Button>
     
        <DualListBox
          options={options}
          selected={selectedAlum}
          onChange={this.onChange}
        />
        

      </div>
    );
  }
}

export default DualListAlumno;
