import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import api from "../Api/apiRar";

export default class SelectProfForm extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    api.getProfesores().then(res => this.setState({ data: res.data }));
  }

  render() {
    const store = this.state.data.map(prof => {
      return { value: prof._id, display: prof.nombre + " " + prof.apellido };
    });
    console.log(this.state.profs);
    console.log(this.state.data);
    return (
      <Form>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            {store.map(prof => (
              <option key={prof.value} value={prof.value}>
                {prof.display}
              </option>
            ))}
          </Input>
        </FormGroup>
      </Form>
    );
  }
}
