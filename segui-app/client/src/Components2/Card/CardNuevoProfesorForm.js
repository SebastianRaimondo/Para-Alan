import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import NuevoProfesorForm from "../Forms/NuevoProfesorForm";

const CardNuevoProfesorForm = props => {
  console.log(props);

  return (
    <div>
      <Card>
        <CardImg top width="100%" />
        <CardBody>
          <NuevoProfesorForm {...props} />
        </CardBody>
      </Card>
    </div>
  );
};

export default CardNuevoProfesorForm;
