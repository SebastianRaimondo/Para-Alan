import { Alert } from 'reactstrap';
import React from 'react';
import maul from "../Images/maul.jpg"

const AlertError = (props) => {
    return (
      <div>
        <Alert color="primary">
        <h1> <span className="label label-default"></span>Mientras tanto...: </h1>
        <div><img src={maul}  /></div>
        </Alert>
      </div>
    );
  };
  
  export default AlertError;