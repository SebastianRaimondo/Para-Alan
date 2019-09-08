import React from "react";
import { Table } from "reactstrap";
import AlumnoRow from "../Rows/AlumnoRow";
import api from "../Api/apiRar";
import NuevoAlumno from "../Collapses/NuevoAlumno";

export default class AlumnoBrowser extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  add() {
    api.getAlumumnos().then(res => this.setState({ data: res.data }));
  }

  del(id) {
    api.deleteAlu(id, () =>
      api.getAlumumnos().then(res => this.setState({ data: res.data }))
    );
  }

  componentDidMount() {
    api.getAlumumnos().then(res => this.setState({ data: res.data }));
  }

  render() {
    const { data } = this.state;
    return (
      <Table striped>
        <thead>
          <div>
            <NuevoAlumno addFn={() => this.add()} />
          </div>

          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Legajo</th>
            <th>Git</th>
            <th>Acciones</th>
          </tr>
        </thead>
        {data.map((alu, idx) => (
          <AlumnoRow
            key={idx}
            indice={idx}
            nombre={alu.nombre}
            apellido={alu.apellido}
            nLegajo={alu.nLegajo}
            email={alu.email}
            userGit={alu.userGit}
            id={alu._id}
            cb={id => this.del(id)}
            cbAdd={id => this.add()}
          />
        ))}
      </Table>
    );
  }
}
