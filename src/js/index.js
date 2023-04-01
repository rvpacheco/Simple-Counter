//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
// include your styles into the webpack bundle
import "../styles/index.css";
//import your own components
import Home from "./component/home.jsx";

let segundo1=0;
let segundo2=0;
let minuto1=0;
let minuto2=0;
let hora=0;
setInterval(()=>{
        segundo1++;
    if(segundo1==10){
        segundo2++;
        segundo1=0;
    }
    if(segundo2==6){
        minuto1++;
        segundo2=0;
    }
    if(minuto1==10){
        minuto2++;
        minuto1=0;
    }
    if(minuto2==6){
        hora++;
        minuto2=0;
    }
    if(hora==10){
        segundo1=0;
        segundo2=0;
        minuto1=0;
        minuto2=0;
        hora=0;
    }
    ReactDOM.render(<Home segundo1={segundo1} segundo2={segundo2} minuto1={minuto1} minuto2={minuto2} hora={hora}/>, document.querySelector("#app"));
    //console.log(hora,minuto2,minuto1,segundo2, segundo1);
}, 1000)