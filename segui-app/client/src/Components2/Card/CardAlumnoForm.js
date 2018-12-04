import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import NuevoAlumnoForm from "../Forms/NuevoAlumnoForm";

const CardAlumnoForm = props => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" />
        <CardBody>
          <NuevoAlumnoForm />
        </CardBody>
      </Card>
    </div>
  );
};

export default CardAlumnoForm;
