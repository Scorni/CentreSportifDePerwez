import React,{useEffect, useState } from "react";
import Sportsindividuel from "../../components/sports/category/SportsIndividuelsListe";
import { useRouter } from 'next/router'


const reloadPage = props => {
    const router = useRouter();
    useEffect(() => {
        if (window.performance) {
          if (performance.navigation.type == 1 ) {

            router.push("./Sportsindividuels")
            
          } 
        }
      })
      return(<p></p>)
}
export default reloadPage;