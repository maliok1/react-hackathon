import React, { useState, useEffect } from "react";

import "./App.css";
import DropDownMenu from './DropDown.jsx'

const NavStyle = {
  display: "flex",
  flexWrap: "nowrap",
  backgroundColor: "#282c34",
}

const SubmitStyle = {
  backgroundColor:"#212529",
  color: "white"
}

const Nav = props => {
  return (
    <div style={NavStyle}>
      <DropDownMenu
        type="Depature"
        items={["Valencia", "Barcelona", "Brussels", "Vienna"]}
        header={props.to ? props.to : "Choose Arrival"}
        handleClickEvent={props.handleClickDestination}
        
      />
      <DropDownMenu
        type="Arrival"
        items={["Moscow", "Prague","London","Paris"]}
        header={ props.from ? props.from : "Choose Arrival"}
        handleClickEvent={props.handleClickArrival}
      />
      <button type="submit" onClick={()=>{props.handleClickSubmit()}} style={SubmitStyle}>Submit</button>
    </div>
  );
};

export default Nav;
