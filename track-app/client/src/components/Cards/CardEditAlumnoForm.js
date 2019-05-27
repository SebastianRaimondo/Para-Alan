import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import EditAlumnoForm from "../Forms/EditAlumnoForm";

const CardEditAlumnoForm = props => {
  console.log(props);

  return (
    <div>
      <Card>
        <CardImg top width="100%" />
        <CardBody>
          <EditAlumnoForm {...props} />
        </CardBody>
      </Card>
    </div>
  );
};

export default CardEditAlumnoForm;
