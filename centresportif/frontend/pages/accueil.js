import React from "react";
import MyCarousel from "../components/accueil/carousel"

const Accueil = props => (
    <div style={{maxWidth:"100%"}}>
        <p>
            Voici l'accueil ! Accueil
        </p>
        <div  style={{width:"50%",  height:"360px" }}>
        <MyCarousel></MyCarousel>
        </div>
    </div>
)
export default Accueil;