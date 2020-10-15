import React, { useState } from 'react';
import { Dropdown,DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';
import Link from "next/link";

const DropDownItemsTabs = [
  {
    sports:["Sports individuels",
            "Sports collectifs",
            "Arts martiaux",
            "Sports de raquettes",
            "Gymnastique",
            "Danse",
            "Multisports",
            "Infrastructure"
    ],
    actualite:[
            "Actualités Sportives",
            "Evènements",
            "Actualités du Centre",
            "Stages"
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
      }else if( cat == "actualite"){
        if(tabs[index][cat][value] === "Actualités Sportives"){
          linkWithoutSpaceHidden = cat + "/actuality"
        }else if(tabs[index][cat][value] === "Evènements"){
          linkWithoutSpaceHidden = cat + "/evenements"
        }else if(tabs[index][cat][value] === "Actualités du centre"){
          linkWithoutSpaceHidden = cat + "/actualiteDuCentre"
        }else if(tabs[index][cat][value] === "Stages"){
          linkWithoutSpaceHidden = cat + "/stage"
        }
      }
      newList[value] = 
        <DropdownItem key={tabs[index][cat][value]}>
          <Link href={'/'+linkWithoutSpaceHidden}>
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
        <DropdownToggle className="customDropdown"  >
          {props.name}
        </DropdownToggle>
        <DropdownMenu>            
          {objectSort(DropDownItemsTabs,props.list)} 
        </DropdownMenu>   
    </Dropdown>
      
  );
}

export default MyDropdown;