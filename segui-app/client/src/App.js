import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import NavBar from "./Components2/NavBar/NavBar";
import CardAlumnoBrowse from "./Components2/Card/CardAlumnoBrowse";
import CardAlumnoForm from "./Components2/Card/CardAlumnoForm";
import { Row, Col } from "reactstrap";
import CardEditAlumnoForm from "./Components2/Card/CardEditAlumnoForm";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div className="container">
            <Route path="/" exact component={CardAlumnoBrowse} />

            <Row>
              <Col sm="3">
                <Route
                  path="/crearAlumno"
                  exact
                  strict
                  component={CardAlumnoForm}
                />
              </Col>
            </Row>

            <Row>
              <Col sm="3">
                <Route
                  path="/editAlumno/:id"
                  exact
                  strict
                  component={CardEditAlumnoForm}
                />
              </Col>
            </Row>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
