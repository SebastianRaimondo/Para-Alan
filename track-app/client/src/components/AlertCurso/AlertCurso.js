import { Alert } from 'reactstrap';
import React from 'react';

const AlertCurso = (props) => {
    return (
      <div>
        <Alert color="dark">
        <h6>Materia: <span class="label label-default"></span>{props.materia} </h6>
        <h6>Sede: <span class="label label-default">{props.sede}</span></h6>
        <h6>Dias: <span class="label label-default">{props.dias}</span></h6>
        <h6>Cuatrimestre: <span class="label label-default">{props.cuatrimestre}</span></h6>
        <h6>Año: <span class="label label-default"></span>{props.anio}</h6> 
        </Alert>
      </div>
    );
  };
  
  export default AlertCurso;