import React from "react";
import { Table } from "reactstrap";
import { Button} from "reactstrap";
import api from "../Api/apiRar";


export default class CursoBrowser extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  add() {
  
    
  }

  del(id) {
   
  }

  componentDidMount() {
   
  }

  render() {
    const { data } = this.state;
    return (


      <Table>
        <thead>
        <div>
        <Button margin="left" color= "primary"> Crear un curso</Button>
        </div> 
      
          <tr>
            <th>Materia</th>
            <th>Sede</th>
            <th>Dias</th>
            <th>Cuatrimestre</th>
            <th>Año</th>
            <th>Acciones</th>
          </tr>

         
        <tr>
          <td>Objetos 1</td>
          <td>General Belgrano</td>
          <td>Miercoles y viernes</td>
          <td>Segundo</td>
          <td>1984</td>
          <td><Button margin="left" color= "primary"> Editar</Button>
          <Button margin="left">Ir</Button>
          </td>
  

          
          </tr>
        </thead>
        
      </Table>
    );
  }
}
