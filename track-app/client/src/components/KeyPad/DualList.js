import React, { Component } from "react";
import { Alert,Row,Col,Container } from "reactstrap";
import DualListBox from "react-dual-listbox"
import "react-dual-listbox/lib/react-dual-listbox.css"
import "font-awesome/css/font-awesome.min.css"
import api from "../Api/apiRar"







const options = [
//  { value: "Pedro Anido", label: "Pedro Anido" },
//  { value: "Enana Flansilla", label: "Enana Flansilla" }
  
];



class KeyPad extends Component {

  constructor(props) {
    super(props);
    console.log(props)
    
    this.state = {
    selectedAlum: ["5d48307622c165270c273c2d"],
    data: [],
  };
  }

 fillOptionsArray(value,label){
    options.push({value:value, label:label});
 }


 

  componentDidMount() { 
  api.getCurso(this.props.idCurso).then(res => this.setState({data: res.data}));
}


  onChange = selectedAlum => {
    this.setState({ selectedAlum });
  };
  
  render() {


const {data} = this.state
console.log(data)

    const { selectedAlum } = this.state;



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
