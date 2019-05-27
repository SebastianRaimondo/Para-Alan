import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import { Row } from "reactstrap";
import Pestañas from "./Components/Pestañas/Pestañas"
import ProfesorBrowse from "./Components/Browsers/ProfesorBrowser"

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
                    path="/prueba"
                    exact
                    strict
                    component={ProfesorBrowse}
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
