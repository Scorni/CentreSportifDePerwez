import React, { useState } from 'react';
import { Dropdown,DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';

function addItem(liste){
  var drop = [
    "Sports individuels",
    "Sports collectifs",   
    "Arts martiaux",
    "Sports de raquette",
    "Gymnastique/Danse",
    "Infrastructure"
  ];   
  var newDrop = [];
  for(let i=0;i < drop.length;i++){
    newDrop[i] =<DropdownItem key={i}>{drop[i]}</DropdownItem>;
  };
  return newDrop;
};

const MyDropdown = (props) => {
  const [isOpen, updateIsOpen] = useState(false);

  return (
    <Dropdown
        {...props}
        onMouseOver={() => updateIsOpen(true)}
        onFocus={() => updateIsOpen(true)}
        toggle={() => updateIsOpen(!isOpen)}
        isOpen={isOpen}
        >
        <DropdownToggle style={{width:"140px"}}>
            {props.name}
        </DropdownToggle>
        <DropdownMenu
        onMouseLeave={() => updateIsOpen(false)}
        onBlur={() => updateIsOpen(false)}
        >
            
            
            {addItem()}
            
        </DropdownMenu>   
    </Dropdown>
      
  );
}

export default MyDropdown;