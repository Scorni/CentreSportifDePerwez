{/**import React, { useState } from 'react';
import { object } from 'prop-types';
import { Dropdown,DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';


const test = [
    {
        test: "test"
    },
    {
        test: "test2"
    }
]
const ListSports = [
    "Sports individuels",
    "Sports collectifs",   
    "Arts martiaux",
    "Sports de raquette",
    "Gymnastique",
    "Danse",
    "Infrastructure",
]  
const DropDownItems = [
    {
        sports:["Sports individuels",
        "Sports collectifs",
        "Arts martiaux",
        "Sports de raquette",
        "Gymnastique",
        "Danse",
        "Infrastructure"],
        actualite:[
            "Actualité Sportives",
            "Evènements",
            "Actualité du Centre",
            "Stage"
        ]
    }
]
function testFunc(test){
    var cheh= []
    for (let index = 0; index < test.length; index++) {
            {test.map(test => (
                cheh = <div>
                <div>{`Band: ${test.sports}`}</div>
                <div>{`Band: ${test.actualite}`}</div>
                </div>
                ))
            }
        }
        
   
    return(
        cheh
    )
  }

  const Mytest = () => {
    const [isOpen, updateIsOpen] = useState(false);

      return(
        <Dropdown
        toggle={() => updateIsOpen(!isOpen)}
        isOpen={isOpen}
        >
            <DropdownToggle style={{width:"140px"}}>
            </DropdownToggle>
            <DropdownMenu>   
                
                    {testFunc(DropDownItems)}
                
            </DropdownMenu>   
        </Dropdown>
      )
  }
export   default  Mytest */}