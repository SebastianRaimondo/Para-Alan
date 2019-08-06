import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import NuevoCursoForm from "../Forms/NuevoCursoForm";

const CardNuevoCursoForm = props => {
  console.log(props);

  return (
    <div>
      <Card>
        <CardImg top width="100%" />
        <CardBody>
          <NuevoCursoForm {...props} />
        </CardBody>
      </Card>
    </div>
  );
};

export default CardNuevoCursoForm;
