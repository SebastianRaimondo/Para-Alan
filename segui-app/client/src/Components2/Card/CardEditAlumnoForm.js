import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import EditAlumnoFormB from "../Forms/NuevoAlumnoForm";

const CardEditAlumnoForm = props => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" />
        <CardBody>
          <EditAlumnoFormB />
        </CardBody>
      </Card>
    </div>
  );
};

export default CardEditAlumnoForm;
