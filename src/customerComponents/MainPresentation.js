import React from "react";

//Styles
import style from '../styles/customerPage/mainPresentation.css';

//Images
import customerSupportText from '../images/1x/customerSupportText.png'
import customerSupportText2x from '../images/2x/customerSupportText@2x.png' 
import customerSupportText3x from '../images/3x/customerSupportText@3x.png'


function MainPresentation(){
    return(
        <div className="main-presentation">

            <div className="text-container">

                <h1 className="mvm-title">

                    mvm

                </h1>

                <h2 className="subtitle">

                    customer support

                </h2>

            </div>

            <div className="textImages-container">
            
                <img className="textImage-1" srcSet={`${customerSupportText} 1x, ${customerSupportText2x} 2x, ${customerSupportText3x} 3x`} src={customerSupportText} alt="bigSpiral"/>
                <img className="textImage-2" srcSet={`${customerSupportText} 1x, ${customerSupportText2x} 2x, ${customerSupportText3x} 3x`} src={customerSupportText} alt="bigSpiral"/>
                <img className="textImage-3" srcSet={`${customerSupportText} 1x, ${customerSupportText2x} 2x, ${customerSupportText3x} 3x`} src={customerSupportText} alt="bigSpiral"/>
                <img className="textImage-4" srcSet={`${customerSupportText} 1x, ${customerSupportText2x} 2x, ${customerSupportText3x} 3x`} src={customerSupportText} alt="bigSpiral"/>

            </div>

                        
            {/* <div className="spirals-container">

                <img className="bigSpiral" srcSet={`${bigSpiral} 1x, ${bigSpiral2x} 2x, ${bigSpiral3x} 3x`} src={bigSpiral} alt="bigSpiral"/>
                <img className="mediumSpiral" srcSet={`${mediumSpiral} 1x, ${mediumSpiral2x} 2x, ${mediumSpiral3x} 3x`} src={mediumSpiral} alt="mediumSpiral"/>
                <img className="smallSpiral" srcSet={`${smallSpiral} 1x, ${smallSpiral2x} 2x, ${smallSpiral3x} 3x`} src={smallSpiral} alt="smallSpiral"/>

            </div> */}
        

        </div>
    )
}

export {MainPresentation};