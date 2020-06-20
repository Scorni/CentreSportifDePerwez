import React, {Component} from "react"
import Head from "next/head"

export default class CustomHead extends Component{
    render(){
        return(
            <Head>
                <meta charset="utf-8"></meta>
                <meta http-equiv="x-ua-compatible" content="ie=edge"></meta>
                {/** Changer le Accueil en fonction de la page où l'on se trouve */}
                <title>Accueil - Centre Sportif de Perwez</title>
                <meta name="description" content="This is the home page of Centre Sportif de Perwez and the index default page" key="description"></meta>
                <meta property="og:title" content="Centre Sportif de Perwez" key="ogTitle"></meta>
                <meta property="og:type" content="website" key="ogType"></meta>
                <meta property="og:url" content="https://centresportifdeperwez.be/" key="ogUrl"></meta>
                {/* Mettre le logo en image <meta property="og:image" content="test.png"></meta> */}
            </Head>
        )
    }
}