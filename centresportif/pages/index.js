import React, {Component} from 'react';
import Header from "../src/Header";
import CustomHead from "../src/CustomHead";

{/** Packages that try to use window object or DOM properties won't work when generating html so we need to disable them. */}
if (typeof window !== "undefined") {
  require("jquery");
  require("popper.js");
  require("bootstrap");
}

export default class Post extends Component{
  render(){
    return(
     
        <>
          <CustomHead />
        </>
    
      
    )
  }
}