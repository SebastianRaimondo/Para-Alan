import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import CursoBrowser from "../Browsers/CursoBrowser";

const CardCursoBrowser = props => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" />
        <CardBody>
          <CursoBrowser/>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardCursoBrowser;
