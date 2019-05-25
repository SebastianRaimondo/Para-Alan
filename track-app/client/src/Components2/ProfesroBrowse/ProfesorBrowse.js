import React from "react";
import { Table } from "reactstrap";
import ProfesorRow from "../ProfesorRow/ProfesorRow";
import api from "../../components/api/apiRar";
import NuevoProfesor from "../Collapses/NuevoProfesor"

export default class ProfesorBrowse extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  delete(id) {
    api.deleteProf(id, () =>
      api.getProfesores().then(res => this.setState({ data: res.data }))
    );
  }

  add() {
  
      api.getProfesores().then(res => this.setState({ data: res.data }))
  }

  componentDidMount() {
    api.getProfesores().then(res => this.setState({ data: res.data }));
  }

  render() {
    const { data } = this.state;
    return (

     

      <Table>
           
        <thead>
          <tr>
            
       
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Acciones</th>
        
            <div>
            <th> <NuevoProfesor addFn={()=> this.add()}/></th>
            </div>
          </tr>
        </thead>
        {data.map((prof, idx) => (
          <ProfesorRow
            key={idx}
            indice={idx}
            nombre={prof.nombre}
            apellido={prof.apellido}
            id={prof._id}
            callbackFn={id => this.delete(id)}
            cbAdd={id => this.add()}
          />
        ))}
         
      </Table>
    );
  }
}
