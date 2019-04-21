import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import ProfesorBrowse from "../ProfesroBrowse/ProfesorBrowse";

const CardProfesorBrowse = props => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" />
        <CardBody>
          <ProfesorBrowse />
        </CardBody>
      </Card>
    </div>
  );
};

export default CardProfesorBrowse;
