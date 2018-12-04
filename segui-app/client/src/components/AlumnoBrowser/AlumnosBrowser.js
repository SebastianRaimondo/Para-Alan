import React, { Component } from "react";
import { Table } from "reactstrap";
import "./AlumnoBrowser.css";

import api from "../api/apiRar";
import AlumnoTableRow from "../TableRow/AlumnoTableRow";

class AlumnosBrowser extends Component {
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
      <div className="divTa">
        <Table bordered dark>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Legajo</th>
              <th>Mail</th>
              <th>Usuario Git</th>
              <th>Acciones</th>
            </tr>
          </thead>

          {data.map((alu, idx) => (
            <AlumnoTableRow
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
      </div>
    );
  }
}
export default AlumnosBrowser;
