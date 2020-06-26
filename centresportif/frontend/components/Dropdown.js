import React, { useState } from 'react';
import { Dropdown,DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';

const MyDropdown = (props) => {
  const [isOpen, updateIsOpen] = useState(false);

  return (
    <Dropdown
        {...props}
        onMouseOver={() => updateIsOpen(true)}
        onFocus={() => updateIsOpen(true)}
        onMouseLeave={() => updateIsOpen(false)}
        onBlur={() => updateIsOpen(false)}
        toggle={() => updateIsOpen(!isOpen)}
        isOpen={isOpen}
        >
        <DropdownToggle>
            {props.name}
        </DropdownToggle>
        
        <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem>{props.liste}</DropdownItem>
            <DropdownItem disabled>Action (disabled)</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Foo Action</DropdownItem>
            <DropdownItem>Bar Action</DropdownItem>
            <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>   
    </Dropdown>
      
  );
}

export default MyDropdown;