import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import ProfesorBrowse from "../ProfesroBrowse/ProfesorBrowse";
import { Button} from "reactstrap";
import NuevoProfesor from "../Collapses/NuevoProfesor"


const CardProfesorBrowse = props => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" />
        <CardBody>
        <NuevoProfesor/>
          <ProfesorBrowse />
        </CardBody>
      </Card>
    </div>
  );
};

export default CardProfesorBrowse;
