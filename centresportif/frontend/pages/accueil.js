import React from "react";
import MyCarousel from "../components/accueil/carousel"
import MyTabs from "../components/accueil/tabs"
import MyReservation from "../components/accueil/reservation"
import Test from "../components/accueil/test"
const Accueil = props => (
    <div>    
        <MyCarousel></MyCarousel>
        <MyTabs></MyTabs>
        <MyReservation></MyReservation>
        <Test></Test>
    </div>
)
export default Accueil;