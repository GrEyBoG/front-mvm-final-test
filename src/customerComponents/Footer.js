import React from "react";

//style

import style from '../styles/customerPage/footer.css';

function Footer(){
    return(
        <div className='footer-container'>
            <div className='footer-left'>

                <p>

                    <h3>COLOMBIA</h3> <br/>

                    <h3>Medellín:</h3>
                    Calle 12 # 31 - 203 <br/>
                    <h3>Tel:</h3> + 57 (604) 448 81 11  <br/>
                    <h3>Bogotá:</h3>
                    Carrera 52 N° 14-30

                </p>

            </div>

            <div className="footer-midle">

                <p>

                    <h3>E.E.U.U</h3> <br/>

                    <h3>Miami: </h3>

                    PLLC – 9130 S. Dadeland Boulevard <br/>

                    Suite 1900, Miami, FL <br/>

                </p>

            </div>

            <div className='footer-right'>

                <p>

                    <h3>REPÚBLICA DOMINICANA</h3> <br/>

                    <h3>Santo Domingo:</h3>
                    Strategy And Consultancy <br/>
                    Service S.R.L. <br/>
                    Av. John F. Kennedy, Edificio Plaza Compostela, 4to. Piso, <br/>
                    Suite 4I5, Ensanche Paraíso. <br/>
                    <h3>Tel:</h3> 8095414091 – 8095414079 

                </p>

            </div>
            
        </div>
    )
}

export {Footer}

