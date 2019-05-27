import React from "react";
import { Alert } from "reactstrap";
import DropDown from "../DropDown/DropDown";

const NavBar = props => {
  return (
    <div>
      <Alert color="success">
        <DropDown />
      </Alert>
    </div>
  );
};

export default NavBar;
