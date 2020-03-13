import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import searchFlights from "./searchFlights.js";
import "./App.css";

const Nav = (props) => {
 

  return (
    <div style={{ display: 'flex', flexWrap: 'nowrap'}}>
      <DropDownMenu items={[1,2]} header={'Choose Destination'}/>
      <DropDownMenu items={[1,2]} header={'Choose Arrival'}/>
    </div>

  );
}

export default Nav;

function DropDownMenu(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);
  
  const items = props.items.map(item => {
    return <DropdownItem>{item}</DropdownItem>
  })
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
    <DropdownToggle caret>
    {props.header}
      </DropdownToggle>
    <DropdownMenu>
     {items}
    </DropdownMenu>
  </Dropdown>
  )
}