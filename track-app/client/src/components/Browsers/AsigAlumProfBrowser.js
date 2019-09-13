import React from "react";
import { Table } from "reactstrap";
import api from "../Api/apiRar";
import AsigProfAluRow from "../Rows/AsigProfAluRow";

export default class AsigAlumProfBrowser extends React.Component {
  constructor() {
    super();
    this.state = {
      dataAl: []
    };
  }

  add() {}

  componentDidMount() {
    api.getAlumumnos().then(res => this.setState({ dataAl: res.data }));
  }

  render() {
    const { dataAl } = this.state;
    return (
      <div className="container">
        <div className="row">
          <Table striped>
            <thead>
              <tr>
                <div className="row">
                  <div className="col-8">
                    {" "}
                    <th>Nombre y apellido del alumno</th>
                  </div>

                  <div className="col-4">
                    {" "}
                    <th>Asignar a</th>{" "}
                  </div>
                </div>
              </tr>
            </thead>
            {dataAl.map((prof, idx) => (
              <AsigProfAluRow
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
        </div>
      </div>
    );
  }
}
