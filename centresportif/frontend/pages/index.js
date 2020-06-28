import React from "react";
import Link from "next/link";
import MyAccueil from "./accueil"

{/* Exemple d'utilisation de const avec des props */}
const PremiereConst = props => (
    <div>
        <MyAccueil></MyAccueil>
    </div>
) 

export default PremiereConst;               

{/* Exemple d'utilisation de classe 

class PremiereClass extends React.Component{
    render(){
        return <p>Vient de ma première classe</p>
    }
}

export default PremiereClass;                 **/}