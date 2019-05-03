import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import NavBar from "./Components2/NavBar/NavBar";
import CardAlumnoBrowse from "./Components2/Card/CardAlumnoBrowse";
import CardAlumnoForm from "./Components2/Card/CardAlumnoForm";
import { Row } from "reactstrap";
import CardEditAlumnoForm from "./Components2/Card/CardEditAlumnoForm";
import CardNuevoProfesorForm from "./Components2/Card/CardNuevoProfesorForm";
import CardProfesorBrowse from "./Components2/Card/CardProfesorBrowse";
import CardEditProfesorForm from "./Components2/Card/CardEditProfesorForm";
import CardAlumnosAsignadosBrowser from "./Components2/Card/CardAlumnosAsignadoBrowser";
import Pestañas from "./Components2/Pestañas/Pestañas"

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Router>
            <div>
              
              <Row>
                <Switch>
                  <Route
                    path="/crearProfesor"
                    exact
                    component={CardNuevoProfesorForm}
                  />

                  <Route
                    path="/profesores"
                    exact
                    strict
                    component={CardProfesorBrowse}
                  />
                  <Route path="/" 
                     exact
                     strict
                     component={Pestañas} />
                  <Route
                    path="/editarProfesor/:id"
                    exact
                    component={CardEditProfesorForm}
                  />
                  <Route
                    path="/crearAlumno"
                    exact
                    strict
                    component={CardAlumnoForm}
                  />
                  <Route
                    path="/editAlumno/:id"
                    exact
                    strict
                    component={CardEditAlumnoForm}
                  />
                </Switch>
              </Row>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
