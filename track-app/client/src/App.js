import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import Curso from "./Components/Curso/Curso";
import "./App.css";
import NavegationBar from "./Components/Navegation/NavegationBar";
import ProfesorBrowser from "./Components/Browsers/ProfesorBrowser";
import AlumnoBrowser from "./Components/Browsers/AlumnoBrowser";
import CursoBrowser from "./Components/Browsers/CursoBrowser";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <NavegationBar />
        </div>
        <br></br>

        <div className="fluid">
          <Router>
            <Switch>
              <Route path="/profesores" component={ProfesorBrowser} />
              <Route path="/alumnos" component={AlumnoBrowser} />
              <Route path="/cursos" component={CursoBrowser} />
              <Route path="/curso/:id" component={Curso} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
