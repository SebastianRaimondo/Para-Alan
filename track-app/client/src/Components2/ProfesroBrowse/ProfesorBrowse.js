import React from "react";
import { Table } from "reactstrap";
import ProfesorRow from "../ProfesorRow/ProfesorRow";
import api from "../../components/api/apiRar";
import NuevoProfesorForm from "../Forms/NuevoProfesorForm"
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
    console.log("prueba de add")
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
            <div>
          <NuevoProfesor addFn={()=> this.add()}/>
          </div>
          <div>
            <th>Nombre</th>
            <th>Apellido</th>
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
          />
        ))}
         
      </Table>
    );
  }
}
