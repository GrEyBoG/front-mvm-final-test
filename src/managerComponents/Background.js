import React from "react";

//Styles
import style from '../styles/managerPage/background.css';

//images
import customerManager from "../images/1x/customerManagerText.png";
import customerManager2x from "../images/2x/customerManagerText@2x.png";
import customerManager3x from "../images/3x/customerManagerText@3x.png";



function Background(){
    return(
        <div className="background-container">
        
            <img className="customer-manager-text" srcSet={`${customerManager} 1x, ${customerManager2x} 2x, ${customerManager3x} 3x`} src={customerManager} alt="customerManagerText"/>
            
            <div className="circle"></div>

            <h1>customer manager</h1>

        </div>
    );
}

export {Background};