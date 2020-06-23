import React from "react";
import Link from "next/link";

{/* Exemple d'utilisation de const avec des props */}
const PremiereConst = props => (
    <div>
        <Link href='/creation'>
            <a>
                Vers creation :)
            </a>
        </Link>
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