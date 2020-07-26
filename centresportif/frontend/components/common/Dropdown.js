import React, { useState } from 'react';
import { Dropdown,DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';
import Link from "next/link";

const DropDownItemsTabs = [
  {
    sports:["Sports individuels",
            "Sports collectifs",
            "Arts martiaux",
            "Sports de raquette",
            "Gymnastique",
            "Danse",
            "Multisports",
            "Infrastructure"
    ],
    actualite:[
            "Actualité Sportives",
            "Evènements",
            "Actualité du Centre",
            "Stage"
    ],
    infos:[
            "Histoire du Centre",
            "Cafétaria",
            "Foire aux questions",
            "Contact",
            "Horaire"
    ]
  }
]
function objectSort(tabs,cat){
  var newList= [];
  var linkWithoutSpace;
  var linkWithoutSpaceHidden;
  for (let index in tabs) {
    for(let value in tabs[index][cat]){
      linkWithoutSpace = (tabs[index][cat][value]).replace(/\s+/g, '-');
      if(cat == "sports"){
        linkWithoutSpaceHidden = cat + "/"+(tabs[index][cat][value]).replace(/\s+/g, '');
      }
      newList[value] = 
        <DropdownItem key={tabs[index][cat][value]}>
          <Link href={'/'+linkWithoutSpaceHidden} as={'/'+linkWithoutSpace}>
            <a>{tabs[index][cat][value]}</a>
          </Link>
        </DropdownItem>
    }
  }
  return(newList)
}
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
          {objectSort(DropDownItemsTabs,props.list)} 
        </DropdownMenu>   
    </Dropdown>
      
  );
}

export default MyDropdown;