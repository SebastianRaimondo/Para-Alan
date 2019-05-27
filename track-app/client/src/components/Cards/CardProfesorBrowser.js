import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import ProfesorBrowser from "../Browsers/ProfesorBrowser";

const CardProfesorBrowse = props => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" />
        <CardBody>
          <ProfesorBrowser />
        </CardBody>
      </Card>
    </div>
  );
};

export default CardProfesorBrowse;
