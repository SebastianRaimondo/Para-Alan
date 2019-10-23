import React from "react";
import { Form, FormGroup, Input, Button, ButtonGroup } from "reactstrap";
import api from "../Api/apiRar";
import { FaCheck } from "react-icons/fa";

export default class SelectProfForm extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      profSelected: []
    };
  }

  componentDidMount() {
    // api.getProfesores().then(res => this.setState({ data: res.data }));
    //this.setState({ profSelected: this.props.id });
  }

  render() {
    const store = this.state.data.map(prof => {
      return { value: prof._id, display: prof.nombre + " " + prof.apellido };
    });
    //  console.log(this.props);
    return (
      <Form>
        <FormGroup>
          <ButtonGroup>
            <Input
              type="select"
              name="select"
              id="exampleSelect"
              value={this.state.profSelected}
              onChange={e => this.setState({ profSelected: e.target.value })}
            >
              {store.map(prof => (
                <option key={prof.value} value={prof.value}>
                  {prof.display}
                </option>
              ))}
            </Input>

            <Button
              className="Edit-Button"
              size="sm"
              color="success"
              onClick={() => {
                this.accept();
              }}
            >
              <FaCheck />
            </Button>
          </ButtonGroup>
        </FormGroup>
      </Form>
    );
  }
}
