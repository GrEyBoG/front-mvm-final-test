import React from "react";


//Styles
import style from '../styles/customerPage/rigthMenu.css';

//Images
import faceboockIcon from '../images/1x/faceboockIcon.png';
import faceboockIcon2x from '../images/2x/faceboockIcon@2x.png';
import faceboockIcon3x from '../images/3x/faceboockIcon@3x.png';

import twiterIcon from '../images/1x/twiterIcon.png';
import twiterIcon2x from '../images/2x/twiterIcon@2x.png';
import twiterIcon3x from '../images/3x/twiterIcon@3x.png';

import linkedInIcon from '../images/1x/linkedInIcon.png';
import linkedInIcon2x from '../images/2x/linkedInIcon@2x.png';
import linkedInIcon3x from '../images/3x/linkedInIcon@3x.png';

function RigthMenu(){
    return(
        <div className='rigth-menu'>
            <div className="menu-container">

                <ul className="menu-list">
                
                    <li>
                        <a href="https://www.facebook.com/MVMingenieria" target="_blank"><img className="faceboock-icon" srcSet={`${faceboockIcon} 1x, ${faceboockIcon2x} 2x, ${faceboockIcon3x} 3x`} src={faceboockIcon} alt="faceboockIcon"/></a>
                    </li>

                    <li>
                        <a href="https://twitter.com/mvmingenieria" target="_blank"><img className="twiter-icon" srcSet={`${twiterIcon} 1x, ${twiterIcon2x} 2x, ${twiterIcon3x} 3x`} src={twiterIcon} alt="twiterIcon"/></a>
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/company/mvmingsoftware/" target="_blank"><img className="linkedIn-icon" srcSet={`${linkedInIcon} 1x, ${linkedInIcon2x} 2x, ${linkedInIcon3x} 3x`} src={linkedInIcon} alt="linkedInIcon"/></a>
                    </li>

                </ul>

            </div>
        </div>
    )
}

export {RigthMenu};