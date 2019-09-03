import React, { Component } from "react";
import { Alert,Row,Col,Container, Button } from "reactstrap";
import DualListBox from "react-dual-listbox"
import "react-dual-listbox/lib/react-dual-listbox.css"
import "font-awesome/css/font-awesome.min.css"




const options = [];

class DualListProfesor extends Component {

  constructor(props) {
    super(props);
    this.state = {
    selectedProf: []
  };
}

 fillOptionsArray(value,label){
    options.push({value:value, label:label});
 }


 componentWillMount(){
    this.setState({selectedProf : this.props.pElegidos})
 }
 componentDidUpdate(){
 
 }

  componentDidMount() { 
 
    this.props.profesores.forEach((prof) => 
     {options.push({value: prof._id , label: prof.nombre + " " +prof.apellido })});

  }


  onChange = selectedProf => {
    this.setState({ selectedProf });
  };
  
  render() {
const { selectedProf } = this.state;
console.log(selectedProf)
    return (
      <div>
        <Alert color="dark">
          <Container>
            <Row>
              <Col xs="9">
         <h5>Profesores cargados</h5>
         </Col>

         <Col xs="3" >
         <h5>Profesores del curso</h5>


         </Col>
         </Row>
         </Container>
        </Alert>
        <DualListBox
          options={options}
          selected={selectedProf}
          onChange={this.onChange}
        />
        
<Button color="success" size="md"   onClick={() => {this.props.cbFnProf(this.state.selectedProf); this.props.onCollapse();console.log(this.state.selectedProf)}}>Aceptar</Button>

      </div>
    );
  }
}

export default DualListProfesor;
