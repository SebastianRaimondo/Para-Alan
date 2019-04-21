import React from "react";
import { Table } from "reactstrap";
import AlumnoRow from "../AlumnoRow/AlumnoRow";
import api from "../../components/api/apiRar";

export default class AlumnoBrowse extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
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
      <Table>
        <thead>
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
          />
        ))}
      </Table>
    );
  }
}
