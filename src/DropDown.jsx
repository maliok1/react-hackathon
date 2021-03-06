import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";


const DropDownStyle = {
  height:"100%",
  borderRadius:0,
  marginRight:'5px'
}

function DropDownMenu(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);
  const {handleClickEvent} = props
  const items = props.items.map((item, index) => {
    return (
      <DropdownItem 
        key={index}
        onClick={() => handleClickEvent(item)}
      >
        {item}
      </DropdownItem>
    );
  });

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret style={DropDownStyle}>{props.header}</DropdownToggle>
      <DropdownMenu>{items}</DropdownMenu>
    </Dropdown>
  );
}

export default DropDownMenu;
