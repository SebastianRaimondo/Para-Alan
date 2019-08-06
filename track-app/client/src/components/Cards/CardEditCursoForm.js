import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import EditCursoForm from "../Forms/EditCursoForm";

const CardEditCursoForm = props => {
  console.log(props);

  return (
    <div>
      <Card>
        <CardImg top width="100%" />
        <CardBody>
          <EditCursoForm {...props} />
        </CardBody>
      </Card>
    </div>
  );
};

export default CardEditCursoForm;
