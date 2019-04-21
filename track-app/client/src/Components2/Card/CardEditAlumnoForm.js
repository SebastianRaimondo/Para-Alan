import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import EditAlumnoFormB from "../EditAlumnoForm/EditAlumnoFormB";

const CardEditAlumnoForm = props => {
  console.log(props);

  return (
    <div>
      <Card>
        <CardImg top width="100%" />
        <CardBody>
          <EditAlumnoFormB {...props} />
        </CardBody>
      </Card>
    </div>
  );
};

export default CardEditAlumnoForm;
