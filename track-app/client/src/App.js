import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import { Row } from "reactstrap";
import Pestañas from "./Components/Pestañas/Pestañas"
import Curso from "./Components/Curso/Curso"
import CardNuevoCursoForm from "./Components/Cards/CardNuevoCursoForm"
import Pingo from "./ParaProbar/ListaDoble"



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
                  <Route path="/" 
                     exact
                     strict
                     component={Pestañas} />
                 
                  <Route
                    path="/curso/:id"
                    exact
                    strict
                    component={Curso}
                  />
                  <Route
                    path="/prueba2"
                    exact
                    strict
                    component={Pingo}
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
