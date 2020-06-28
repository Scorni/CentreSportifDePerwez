import React, { useState } from 'react';
import { Dropdown,DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';

function addItem(list){  
  if(list){  
    var newList = [];
    for(let i=0;i < list.length;i++){
      newList[i] =<DropdownItem key={i}>{list[i]}</DropdownItem>;
    };
  }
  return newList;
};

const MyDropdown = (props) => {
  const [isOpen, updateIsOpen] = useState(false);

  return (
    <Dropdown
        {...props}
        toggle={() => updateIsOpen(!isOpen)}
        isOpen={isOpen}
        >
        <DropdownToggle style={{width:"140px"}}>
          {props.name}
        </DropdownToggle>
        <DropdownMenu>            
          {addItem(props.list)} 
        </DropdownMenu>   
    </Dropdown>
      
  );
}

export default MyDropdown;