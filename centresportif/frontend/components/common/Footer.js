import React, { Component } from 'react';
import {  
    Navbar,
    NavbarBrand,
    Nav,
    } from 'reactstrap';
import { AiFillPhone,AiOutlineFacebook } from 'react-icons/ai';
import { BsPhone } from 'react-icons/bs';
import { FaFax,FaStreetView,FaEnvelope } from 'react-icons/fa';

import Link from "next/link";

const Header = () => (
    <footer>
      <div className=" pt-5 pb-3 footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xs-12 about-company">
              <h2>Centre Sportif de Perwez</h2>
              <p className="pr-5 text-white-50">Le centre sportif offre des infrastructures de haute qualité autant pour les sports collectifs qu'individuels. On peut y retrouver plus de 25 clubs, proposant un bel éventail de disciplines. </p>            
            </div>
            <div className="col-lg-3 col-xs-12 links">
              <h4 className="mt-lg-0 mt-sm-3">Liens</h4>
                <ul className="m-0 p-0">
                  <li>-  <Link href='/' style={{color: "white"}}>Accueil</Link></li>
                  <li>-  <Link href='/infos/contact' style={{color: "white"}}>Nous contacter</Link></li>
                  <li>-  <Link href='/createBooking' style={{color: "white"}}>Réserver une salle | un terrain</Link></li>
                  <li>-  <Link href='/infos/schedule' style={{color: "white"}}>Horaire</Link></li>
                  <li>-  <Link href='/infos/faq' style={{color: "white"}}>FAQ</Link></li>
                  <li>-  <Link href='/infos/cafetaria' style={{color: "white"}}>Cafétaria</Link></li>
                </ul>
            </div>
            <div className="col-lg-4 col-xs-12 location">
              <h4 className="mt-lg-0 mt-sm-4">Adresse</h4>
              <p><FaStreetView className="icon"/> Rue des Marronniers, 17, 1360 Perwez</p>
              <p className="mb-0"><AiFillPhone className="icon"/> +32 (0)81 65 60 23</p>
              <p className="mb-0"><BsPhone className="icon"/> +32 (0)473 84 46 13</p>
              <p className="mb-0"><FaFax className="icon"/> +32 (0)81 65 60 23</p>
              <p><FaEnvelope className="icon"/> centre.sportif@perwez.be</p>
            </div>
          </div>
          <div className="row mt-1">
            <div className="col copyright">
              <p className=""><small className="text-white-50">© 2020. Tous droits réservés.</small></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
)

export default Header;