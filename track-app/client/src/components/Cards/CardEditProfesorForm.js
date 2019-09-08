import React from "react";
import { Card, CardBody } from "reactstrap";
import EditProfesorForm from "../Forms/EditProfesorForm";

const CardEditProfesorForm = props => {
  console.log(props);

  return (
    <div>
      <Card>
        <CardBody>
          <EditProfesorForm {...props} />
        </CardBody>
      </Card>
    </div>
  );
};

export default CardEditProfesorForm;
