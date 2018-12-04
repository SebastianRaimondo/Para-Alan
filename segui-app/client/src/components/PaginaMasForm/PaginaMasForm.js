import React, { Component } from "react";
import AlumnoBrowser from "../AlumnoBrowser/AlumnosBrowser";
import NuevoAlumnoForm from "../Form/NuevoAlumnoForm";
import "./PaginaMasForm.css";

class PaginaMasForm extends Component {
  render() {
    return (
      <div className="">
        <div className="a">
          <NuevoAlumnoForm />
        </div>

        <div className="b">
          <NuevoAlumnoForm />
        </div>
        <div className="c">
          <NuevoAlumnoForm />
        </div>
        <div className="d">
          <NuevoAlumnoForm />
        </div>
        <div className="e">
          <NuevoAlumnoForm />
        </div>
      </div>
    );
  }
}
export default PaginaMasForm;
