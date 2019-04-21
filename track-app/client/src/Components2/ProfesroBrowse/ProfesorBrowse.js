import React from "react";
import { Table } from "reactstrap";
import ProfesorRow from "../ProfesorRow/ProfesorRow";
import api from "../../components/api/apiRar";

export default class ProfesorBrowse extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  del(id) {
    api.deleteProf(id, () =>
      api.getProfesores().then(res => this.setState({ data: res.data }))
    );
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
          </tr>
        </thead>
        {data.map((alu, idx) => (
          <ProfesorRow
            key={idx}
            indice={idx}
            nombre={alu.nombre}
            apellido={alu.apellido}
            id={alu._id}
            cb={id => this.del(id)}
          />
        ))}
      </Table>
    );
  }
}
