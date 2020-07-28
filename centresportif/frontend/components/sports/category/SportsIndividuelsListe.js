import React,{ useRef, useEffect, useState } from 'react';
import {CardGenerator} from './generator';

var tabs = ["Athlétisme","Course à pieds","Triathlon"]

const SportIndividuels = (props) => {
    return (
        <div>
          <CardGenerator tabs = {"athletisme.jpg"}></CardGenerator>
          <CardGenerator tabs = {"Cap"}></CardGenerator>

        </div>
 
    );
  }
  
  export default SportIndividuels;