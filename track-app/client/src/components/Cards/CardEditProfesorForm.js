import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import EditProfesorForm from "../Forms/EditProfesorForm";

const CardEditProfesorForm = props => {
  console.log(props);

  return (
    <div>
      <Card>
        <CardImg top width="100%" />
        <CardBody>
          <EditProfesorForm {...props} />
        </CardBody>
      </Card>
    </div>
  );
};

export default CardEditProfesorForm;
