import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import Curso from "./Components/Curso/Curso";
import "./App.css";
import NavegationBar from "./Components/Navegation/NavegationBar";
import ProfesorBrowser from "./Components/Browsers/ProfesorBrowser";
import AlumnoBrowser from "./Components/Browsers/AlumnoBrowser";
import CursoBrowser from "./Components/Browsers/CursoBrowser";
import AsigAlumProfBrowser from "./Components/Browsers/AsigAlumProfBrowser";

class App extends Component {
  render() {
    return (
      <div>
        <div className="fluid">
          <Router>
            <div>
              <Route path="/" component={NavegationBar} />
              <br></br>
              <Route path="/profesores" component={ProfesorBrowser} />
              <Route path="/alumnos" component={AlumnoBrowser} />
              <Route path="/cursos" component={CursoBrowser} />
              <Route path="/curso/:id" component={Curso} />
              <Route path="/profAl" component={AsigAlumProfBrowser} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
