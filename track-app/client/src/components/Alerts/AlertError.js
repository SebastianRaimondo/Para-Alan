import { Alert } from 'reactstrap';
import React from 'react';
import mau from "../Images/mau.jpg"

const AlertError = (props) => {
    return (
      <div>
        <Alert color="primary">
        <h1> <span className="label label-default"></span>Hubo un error, esto fue debido a que: </h1>
        <div><img src={mau}  /></div>
        </Alert>
      </div>
    );
  };
  
  export default AlertError;