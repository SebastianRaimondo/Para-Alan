import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import AlumnoBrowse from "../AlumnoBrowse/AlumnoBrowse";

const CardAlumnosAsignadosBrowse = props => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" />
        <CardBody>
          <AlumnoBrowse />
        </CardBody>
      </Card>
    </div>
  );
};

export default CardAlumnosAsignadosBrowse;
