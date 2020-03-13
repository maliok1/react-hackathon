import React, { useState, useEffect } from "react";

import "./App.css";
import DropDownMenu from './DropDown.jsx'

const Nav = props => {
  return (
    <div style={{ display: "flex", flexWrap: "nowrap" }}>
      <DropDownMenu
        type="Depature"
        items={["Valencia", "Barcelona"]}
        header={"Choose Destination"}
        handleClickEvent={props.handleClickDestination}
      />
      <DropDownMenu
        type="Arrival"
        items={["Moscow", "Prague"]}
        header={"Choose Arrival"}
        handleClickEvent={props.handleClickArrival}
      />
      <button type="submit" onClick={()=>{props.handleClickSubmit()}}>Submit</button>
    </div>
  );
};


export default Nav;
